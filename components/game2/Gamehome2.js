import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import animeGameColors from './src2/style2.colors';

const GameHome2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Memory Match</Text>
      <Text style={styles.description}>
        Test your memory! Flip cards and find all the matching pairs in as few moves as possible.
      </Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('MemoryMatch')}
      >
        <Text style={styles.startButtonText}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.startButton, { marginTop: 16, backgroundColor: '#FFD700' }]}
        onPress={() => navigation.navigate('Game2Combo')}
      >
        <Text style={[styles.startButtonText]}>Combos & Tips</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: animeGameColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: animeGameColors.primary,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: '#000', // Add black shadow for border effect
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    color: animeGameColors.text,
    textShadowColor: '#000', // Add black shadow for border effect
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  startButton: {
    backgroundColor: animeGameColors.button,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 10,
  },
  startButtonText: {
    color: animeGameColors.text,
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#000', // Add black shadow for border effect
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default GameHome2;
