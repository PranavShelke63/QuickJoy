import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert, Image, ImageBackground } from 'react-native';
import animeGameColors from './src2/style2.colors';

const CARD_IMAGES = [
  require('./src2/cards/luffy.jpg'),
  require('./src2/cards/zoro.jpg'),
  require('./src2/cards/nami.jpg'),
  require('./src2/cards/sanji.jpg'),
  require('./src2/cards/ussop.jpg'),
  require('./src2/cards/chopper.jpg'),
  require('./src2/cards/robin.jpg'),
  require('./src2/cards/shanks.jpg'),
];

const BG_IMAGE = require('./src2/bgfor2.jpg');

const NUM_PAIRS = 8; // Use all 8 images
const NUM_COLUMNS = 4; // 4 columns
const NUM_ROWS = 4;    // 4 rows

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const generateCards = () => {
  // Only use the first NUM_PAIRS images
  const selectedImages = CARD_IMAGES.slice(0, NUM_PAIRS);
  const cards = shuffle([...selectedImages, ...selectedImages]).map((img, idx) => ({
    id: idx,
    img,
    flipped: false,
    matched: false,
  }));
  return cards;
};

const MemoryMatch = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      setIsBusy(true);
      const [firstIdx, secondIdx] = flippedIndices;
      if (cards[firstIdx].img === cards[secondIdx].img) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map((card, idx) =>
            idx === firstIdx || idx === secondIdx ? { ...card, matched: true } : card
          ));
          setFlippedIndices([]);
          setIsBusy(false);
        }, 700);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map((card, idx) =>
            idx === firstIdx || idx === secondIdx ? { ...card, flipped: false } : card
          ));
          setFlippedIndices([]);
          setIsBusy(false);
        }, 1000);
      }
      setMoves(m => m + 1);
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      Alert.alert('Congratulations!', `You won in ${moves} moves!`, [
        { text: 'Restart', onPress: handleRestart }
      ]);
    }
  }, [cards]);

  const handleCardPress = idx => {
    if (isBusy || cards[idx].flipped || cards[idx].matched || flippedIndices.length === 2) return;
    setCards(prev => prev.map((card, i) => i === idx ? { ...card, flipped: true } : card));
    setFlippedIndices(prev => [...prev, idx]);
  };

  const handleRestart = () => {
    setCards(generateCards());
    setFlippedIndices([]);
    setMoves(0);
    setIsBusy(false);
  };

  return (
    <ImageBackground source={BG_IMAGE} style={styles.bg} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Memory Match</Text>
        <Text style={styles.moves}>Moves: {moves}</Text>
        <View style={styles.grid}>
          {cards.map((card, idx) => (
            <TouchableOpacity
              key={card.id}
              style={[styles.card, card.flipped || card.matched ? styles.cardFlipped : styles.cardUnflipped]}
              onPress={() => handleCardPress(idx)}
              activeOpacity={0.8}
              disabled={card.flipped || card.matched || isBusy}
            >
              {card.flipped || card.matched ? (
                <Image source={card.img} style={styles.cardImage} resizeMode="cover" />
              ) : (
                <View style={styles.cardBack} />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
          <Text style={styles.restartText}>Restart</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    color: animeGameColors.primary,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  moves: {
    fontSize: 18,
    marginBottom: 16,
    color: animeGameColors.text,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300, // Slightly reduced for 4x4 grid
    marginBottom: 24,
    justifyContent: 'center',
  },
  card: {
    width: 60, // Reduced size for 4x4 grid
    height: 60,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    overflow: 'hidden',
  },
  cardUnflipped: {
    backgroundColor: animeGameColors.secondary,
    borderColor: animeGameColors.primary,
  },
  cardFlipped: {
    backgroundColor: '#fff',
    borderColor: animeGameColors.correct,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  cardBack: {
    width: '100%',
    height: '100%',
    backgroundColor: animeGameColors.secondary,
    borderRadius: 8,
  },
  restartButton: {
    backgroundColor: animeGameColors.button,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  restartText: {
    color: animeGameColors.text,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default MemoryMatch;




