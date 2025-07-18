import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ActivityIndicator, Dimensions } from 'react-native';
import gameStyles from './styles/gameStyles';
import colors from '../../global.css';

const allQuestions = [
  {
    question: 'Who is the first Avenger in the MCU timeline?',
    options: ['Iron Man', 'Captain America', 'Thor', 'Hulk'],
    answer: 'Captain America',
  },
  {
    question: 'What is the name of Thor’s hammer?',
    options: ['Stormbreaker', 'Gungnir', 'Mjolnir', 'Vanir'],
    answer: 'Mjolnir',
  },
  {
    question: 'Which Infinity Stone does Vision have on his forehead?',
    options: ['Time Stone', 'Mind Stone', 'Power Stone', 'Reality Stone'],
    answer: 'Mind Stone',
  },
  {
    question: 'Who is the villain in Avengers: Infinity War?',
    options: ['Ultron', 'Loki', 'Thanos', 'Red Skull'],
    answer: 'Thanos',
  },
  {
    question: 'What is Black Panther’s real name?',
    options: ['T’Challa', 'M’Baku', 'N’Jadaka', 'Shuri'],
    answer: 'T’Challa',
  },
  {
    question: 'What is the real name of the Scarlet Witch?',
    options: ['Wanda Maximoff', 'Natasha Romanoff', 'Carol Danvers', 'Pepper Potts'],
    answer: 'Wanda Maximoff',
  },
  {
    question: 'Which character is known as the Winter Soldier?',
    options: ['Bucky Barnes', 'Sam Wilson', 'Steve Rogers', 'Tony Stark'],
    answer: 'Bucky Barnes',
  },
  {
    question: 'Who is Peter Parker’s best friend in Spider-Man: Homecoming?',
    options: ['Ned Leeds', 'Harry Osborn', 'Flash Thompson', 'MJ'],
    answer: 'Ned Leeds',
  },
  {
    question: 'Which movie introduced Black Panther?',
    options: ['Captain America: Civil War', 'Black Panther', 'Avengers: Age of Ultron', 'Iron Man 3'],
    answer: 'Captain America: Civil War',
  },
  {
    question: 'What is the name of Tony Stark’s AI assistant after JARVIS?',
    options: ['FRIDAY', 'KAREN', 'EDITH', 'HOMER'],
    answer: 'FRIDAY',
  },
  {
    question: 'Who is the director of S.H.I.E.L.D. in the first Avengers movie?',
    options: ['Nick Fury', 'Phil Coulson', 'Maria Hill', 'Alexander Pierce'],
    answer: 'Nick Fury',
  },
  {
    question: 'Which Guardian of the Galaxy only says "I am Groot"?',
    options: ['Groot', 'Rocket', 'Drax', 'Star-Lord'],
    answer: 'Groot',
  },
  {
    question: 'What is the name of Doctor Strange’s mentor?',
    options: ['The Ancient One', 'Wong', 'Mordo', 'Kaecilius'],
    answer: 'The Ancient One',
  },
  {
    question: 'Which Avenger is able to calm the Hulk down?',
    options: ['Black Widow', 'Thor', 'Iron Man', 'Hawkeye'],
    answer: 'Black Widow',
  },
  {
    question: 'What is the name of Ant-Man’s daughter?',
    options: ['Cassie', 'Hope', 'Janet', 'Peggy'],
    answer: 'Cassie',
  },
  // 15 more questions below
  {
    question: 'Who is the main villain in Black Panther?',
    options: ['Killmonger', 'Ulysses Klaue', 'M’Baku', 'Zemo'],
    answer: 'Killmonger',
  },
  {
    question: 'What is the name of Peter Quill’s father?',
    options: ['Ego', 'Yondu', 'Thanos', 'Howard'],
    answer: 'Ego',
  },
  {
    question: 'Which Avenger lifted Thor’s hammer in Age of Ultron?',
    options: ['Vision', 'Captain America', 'Iron Man', 'Hulk'],
    answer: 'Vision',
  },
  {
    question: 'What is the name of Loki’s mother?',
    options: ['Frigga', 'Hela', 'Jane', 'Sif'],
    answer: 'Frigga',
  },
  {
    question: 'Who is the leader of the Dora Milaje?',
    options: ['Okoye', 'Nakia', 'Shuri', 'Ramonda'],
    answer: 'Okoye',
  },
  {
    question: 'What is the name of Tony Stark’s daughter?',
    options: ['Morgan', 'Pepper', 'Hope', 'Cassie'],
    answer: 'Morgan',
  },
  {
    question: 'Which Avenger wore a suit made by Shuri?',
    options: ['Black Panther', 'Spider-Man', 'Iron Man', 'Captain America'],
    answer: 'Black Panther',
  },
  {
    question: 'Who destroyed Thor’s hammer?',
    options: ['Hela', 'Thanos', 'Odin', 'Loki'],
    answer: 'Hela',
  },
  {
    question: 'What is the name of the prison in Guardians of the Galaxy?',
    options: ['The Kyln', 'The Raft', 'The Vault', 'The Cube'],
    answer: 'The Kyln',
  },
  {
    question: 'Who is the Red Skull’s real name?',
    options: ['Johann Schmidt', 'Arnim Zola', 'Baron Strucker', 'Alexander Pierce'],
    answer: 'Johann Schmidt',
  },
  {
    question: 'Which Avenger does not have superpowers?',
    options: ['Hawkeye', 'Thor', 'Hulk', 'Scarlet Witch'],
    answer: 'Hawkeye',
  },
  {
    question: 'Who is the king of Asgard after Odin?',
    options: ['Thor', 'Loki', 'Hela', 'Valkyrie'],
    answer: 'Thor',
  },
  {
    question: 'What is the name of the organization Natasha Romanoff worked for before S.H.I.E.L.D.?',
    options: ['KGB', 'HYDRA', 'CIA', 'MI6'],
    answer: 'KGB',
  },
  {
    question: 'Who is the villain in Spider-Man: Homecoming?',
    options: ['Vulture', 'Mysterio', 'Green Goblin', 'Sandman'],
    answer: 'Vulture',
  },
  {
    question: 'What is the name of the planet Hulk is sent to in Thor: Ragnarok?',
    options: ['Sakaar', 'Xandar', 'Vormir', 'Titan'],
    answer: 'Sakaar',
  },
  {
    question: 'Who is the first character to wield the Infinity Gauntlet in the MCU?',
    options: ['Thanos', 'Hulk', 'Iron Man', 'Thor'],
    answer: 'Thanos',
  },
];

const marvelImages = [
  require('../game3/marvel_images/01mcu.jpg'),
  require('../game3/marvel_images/02mcu.jpg'),
  require('../game3/marvel_images/3mcu.jpg'),
  require('../game3/marvel_images/4mcu.jpg'),
  require('../game3/marvel_images/5mcu.jpg'),
  require('../game3/marvel_images/6mcu.jpg'),
  require('../game3/marvel_images/7mcu.jpg'),
  require('../game3/marvel_images/8mcu.jpg'),
  require('../game3/marvel_images/9mcu.jpg'),
  require('../game3/marvel_images/10mcu.jpg'),
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

function getRandomImageIndex(excludeIndex) {
  let idx;
  do {
    idx = Math.floor(Math.random() * marvelImages.length);
  } while (idx === excludeIndex && marvelImages.length > 1);
  return idx;
}

function getRandomQuestions(arr, n) {
  const result = [];
  const used = new Set();
  while (result.length < n && used.size < arr.length) {
    const idx = Math.floor(Math.random() * arr.length);
    if (!used.has(idx)) {
      used.add(idx);
      result.push(arr[idx]);
    }
  }
  return result;
}

const MCUQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [restartLoading, setRestartLoading] = useState(false);
  const [questions, setQuestions] = useState(() => getRandomQuestions(allQuestions, 10));

  const onImageLoadEnd = () => setImageLoading(false);
  const onImageLoadStart = () => setImageLoading(true);

  const generateBgIndexes = () => {
    let arr = [];
    let lastIdx = -1;
    for (let i = 0; i < questions.length; i++) {
      lastIdx = getRandomImageIndex(lastIdx);
      arr.push(lastIdx);
    }
    return arr;
  };
  const [bgIndexes, setBgIndexes] = useState(generateBgIndexes);

  const handleOptionPress = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handleRetry = () => {
    setRestartLoading(true);
    setTimeout(() => {
      setCurrent(0);
      setSelected(null);
      setShowAnswer(false);
      setScore(0);
      setBgIndexes(generateBgIndexes()); // Regenerate random images
      setQuestions(getRandomQuestions(allQuestions, 10)); // New random questions
      setRestartLoading(false);
    }, 1000);
  };

  return (
    <ImageBackground
      source={marvelImages[bgIndexes[current]]}
      style={gameStyles.bg}
      resizeMode="cover"
      onLoadStart={onImageLoadStart}
      onLoadEnd={onImageLoadEnd}
    >
      {(imageLoading || restartLoading) && (
        <View style={localStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.text} />
        </View>
      )}
      <View style={gameStyles.overlay} pointerEvents={imageLoading || restartLoading ? 'none' : 'auto'}>
        <Text style={gameStyles.title}>MCU Quiz</Text>
        <Text style={localStyles.question}>{questions[current].question}</Text>
        {questions[current].options.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              localStyles.option,
              selected === option && (option === questions[current].answer
                ? localStyles.correct
                : localStyles.incorrect),
            ]}
            onPress={() => !showAnswer && handleOptionPress(option)}
            disabled={showAnswer}
          >
            <Text style={localStyles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        {showAnswer && (
          <Text style={localStyles.feedback}>
            {selected === questions[current].answer ? 'Correct!' : 'Incorrect!'}
          </Text>
        )}
        {showAnswer && current < questions.length - 1 && (
          <TouchableOpacity style={localStyles.nextButton} onPress={handleNext}>
            <Text style={localStyles.nextText}>Next</Text>
          </TouchableOpacity>
        )}
        {showAnswer && current === questions.length - 1 && !restartLoading && (
          <>
            <Text style={localStyles.score}>Your Score: {score} / {questions.length}</Text>
            <TouchableOpacity style={localStyles.retryButton} onPress={handleRetry} disabled={restartLoading}>
              <Text style={localStyles.retryIcon}>🔄</Text>
              <Text style={localStyles.retryText}>Retry</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const localStyles = StyleSheet.create({
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  question: {
    fontSize: 22,
    color: colors.text,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  option: {
    backgroundColor: colors.button,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: 260,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  correct: {
    backgroundColor: colors.correct,
    borderColor: colors.correct,
  },
  incorrect: {
    backgroundColor: colors.wrong,
    borderColor: colors.wrong,
  },
  optionText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedback: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    marginVertical: 12,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 16,
  },
  nextText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 22,
    color: colors.secondary,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.button,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 12,
  },
  retryIcon: {
    fontSize: 20,
    marginRight: 8,
    color: colors.secondary,
  },
  retryText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MCUQuiz; 