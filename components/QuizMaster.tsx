import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
    answer: 'William Shakespeare',
  },
];

const QuizMaster = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionPress = (option: string) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Master</Text>
      <Text style={styles.question}>{questions[current].question}</Text>
      {questions[current].options.map(option => (
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            selected === option && (option === questions[current].answer
              ? styles.correct
              : styles.incorrect),
          ]}
          onPress={() => !showAnswer && handleOptionPress(option)}
          disabled={showAnswer}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {showAnswer && (
        <Text style={styles.feedback}>
          {selected === questions[current].answer ? 'Correct!' : 'Incorrect!'}
        </Text>
      )}
      {showAnswer && current < questions.length - 1 && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      )}
      {showAnswer && current === questions.length - 1 && (
        <Text style={styles.score}>Your Score: {score} / {questions.length}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: 250,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
  correct: {
    backgroundColor: '#b6e7a7',
  },
  incorrect: {
    backgroundColor: '#f7b2ad',
  },
  feedback: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 8,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
  },
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24,
    color: '#4a90e2',
  },
});

export default QuizMaster; 