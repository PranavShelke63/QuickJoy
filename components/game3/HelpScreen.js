import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import gameStyles from './styles/gameStyles';

const HelpScreen = () => (
  <ScrollView contentContainerStyle={gameStyles.scrollContainer}>
    <Text style={gameStyles.title}>How to Play</Text>
    <Text style={gameStyles.text}>
      Welcome to the MCU Quiz!{"\n\n"}
      - Tap 'Play' to start the quiz.{"\n"}
      - Each question has four options. Tap the one you think is correct.{"\n"}
      - Your score will be shown at the end. Try to get them all right!{"\n\n"}
      Good luck, hero!
    </Text>
  </ScrollView>
);

export default HelpScreen; 