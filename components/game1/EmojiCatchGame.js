import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');
const GAME_DURATION = 30; // seconds
const EMOJI_LIST = ['😀', '😂', '😍', '🥳', '😎', '🤩', '😜', '😇', '🥶', '😱'];
const EMOJI_SIZE = 48;
const EMOJIS_PER_TICK = 0.08; // spawn rate per tick per side

function getRandomEmoji() {
  return EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)];
}

function getRandomX() {
  // x is relative to half the screen
  return Math.random() * ((width / 2) - EMOJI_SIZE);
}

const EmojiCatchGame = () => {
  const [emojis, setEmojis] = useState([]); // {id, x, y, emoji, side}
  const [scores, setScores] = useState({ left: 0, right: 0 });
  const [timer, setTimer] = useState(GAME_DURATION);
  const [gameOver, setGameOver] = useState(false);
  const emojiId = useRef(0);
  const intervalRef = useRef();

  // Efficient game loop: move and spawn in one setEmojis call
  useEffect(() => {
    if (gameOver) return;
    intervalRef.current = setInterval(() => {
      setEmojis((prev) => {
        // Move emojis down and remove off-screen
        let updated = prev.map((e) => ({ ...e, y: e.y + 6 })).filter((e) => e.y < height - EMOJI_SIZE);
        // Spawn new emojis for each side
        if (Math.random() < EMOJIS_PER_TICK) {
          updated.push({
            id: emojiId.current++,
            x: getRandomX(),
            y: 0,
            emoji: getRandomEmoji(),
            side: 'left',
          });
        }
        if (Math.random() < EMOJIS_PER_TICK) {
          updated.push({
            id: emojiId.current++,
            x: getRandomX(),
            y: 0,
            emoji: getRandomEmoji(),
            side: 'right',
          });
        }
        return updated;
      });
    }, 50);
    return () => clearInterval(intervalRef.current);
  }, [gameOver]);

  // Timer
  useEffect(() => {
    if (gameOver) return;
    if (timer === 0) {
      setGameOver(true);
      return;
    }
    const t = setTimeout(() => setTimer((time) => time - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, gameOver]);

  // Tap to collect emoji
  const handleEmojiTap = (id, side) => {
    setEmojis((prev) => prev.filter((e) => e.id !== id));
    setScores((prev) => ({ ...prev, [side]: prev[side] + 1 }));
  };

  // Render emojis for a side
  const renderEmojis = (side) => (
    emojis.filter(e => e.side === side).map((e) => (
      <TouchableOpacity
        key={e.id}
        style={[
          styles.emoji,
          {
            left: e.x,
            top: e.y,
          },
        ]}
        onPress={() => handleEmojiTap(e.id, side)}
        activeOpacity={0.7}
      >
        <Text style={styles.emojiText}>{e.emoji}</Text>
      </TouchableOpacity>
    ))
  );

  return (
    <View style={styles.container}>
      {/* Centered score and timer */}
      <View style={styles.scoreBar}>
        <Text style={styles.scoreText}>P1: {scores.left}</Text>
        <Text style={styles.timerText}>{timer}s</Text>
        <Text style={styles.scoreText}>P2: {scores.right}</Text>
      </View>
      {/* Game area split vertically */}
      <View style={styles.gameArea}>
        {/* Left side */}
        <View style={[styles.playerArea, { borderRightWidth: 1 }]}> 
          {renderEmojis('left')}
        </View>
        {/* Right side */}
        <View style={styles.playerArea}>
          {renderEmojis('right')}
        </View>
      </View>
      {/* Game over overlay */}
      {gameOver && (
        <View style={styles.overlay}>
          <Text style={styles.winnerText}>
            {scores.left === scores.right
              ? 'Draw!'
              : scores.left > scores.right
              ? 'Player 1 Wins!'
              : 'Player 2 Wins!'}
          </Text>
          <TouchableOpacity onPress={() => {
            setScores({ left: 0, right: 0 });
            setTimer(GAME_DURATION);
            setEmojis([]);
            setGameOver(false);
          }} style={styles.restartBtn}>
            <Text>Restart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scoreBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#eef',
    zIndex: 2,
  },
  scoreText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 24,
    color: '#4f3a99',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e55',
    marginHorizontal: 24,
  },
  gameArea: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#eef',
    borderTopWidth: 2,
    borderColor: '#ccc',
  },
  playerArea: {
    flex: 1,
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    borderColor: '#ccc',
  },
  emoji: {
    position: 'absolute',
    zIndex: 2,
    width: EMOJI_SIZE,
    height: EMOJI_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiText: {
    fontSize: EMOJI_SIZE,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  winnerText: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  restartBtn: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
  },
});

export default EmojiCatchGame; 