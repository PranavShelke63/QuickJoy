import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import EmojiCatchGame from './EmojiCatchGame';

const GameHome1 = () => {
  const [mode, setMode] = useState(null);

  if (mode === '2p') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>2 Player Mode</Text>
        <EmojiCatchGame />
      </View>
    );
  }
  if (mode === 'ai') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Play vs AI (Coming Soon)</Text>
        {/* TODO: Render EmojiCatchGame with AI logic */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emoji Catch</Text>
      <Text style={styles.subtitle}>Choose a mode:</Text>
      <TouchableOpacity style={styles.button} onPress={() => setMode('2p')}>
        <Text style={styles.buttonText}>2 Player</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setMode('ai')}>
        <Text style={styles.buttonText}>Play with AI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4f3a99',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30,
    color: '#555',
  },
  button: {
    backgroundColor: '#6cf',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: 220,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GameHome1; 