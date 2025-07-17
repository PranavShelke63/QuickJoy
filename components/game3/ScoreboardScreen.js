import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import gameStyles from './styles/gameStyles';

const ScoreboardScreen = () => (
  <View style={gameStyles.container}>
    <Text style={gameStyles.title}>Scoreboard</Text>
    <Text style={gameStyles.text}>Scoreboard feature coming soon! Compete with friends and see who is the ultimate MCU fan.</Text>
  </View>
);

export default ScoreboardScreen; 