import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import gameStyles from './styles/gameStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const marvelBg = require('../../marvel_images/6mcu.jpg');

// Reusable shadow overlay component
export const ShadowOverlay = ({ visible }) => (
  visible ? <View style={gameStyles.shadowOverlay} pointerEvents="auto" /> : null
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handlePlay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('MCUQuiz');
    }, 1000);
  };

  return (
    <ImageBackground source={marvelBg} style={gameStyles.bg} resizeMode="cover">
      <ShadowOverlay visible={loading} />
      <View style={gameStyles.overlay} pointerEvents={loading ? 'none' : 'auto'}>
        <Text style={gameStyles.title}>MCU Quiz</Text>
        <TouchableOpacity style={[gameStyles.button, gameStyles.playButton]} onPress={handlePlay} disabled={loading}>
          <Text style={gameStyles.playText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[gameStyles.button, gameStyles.helpButton]} onPress={() => navigation.navigate('Help')} disabled={loading}>
          <Text style={gameStyles.helpText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[gameStyles.button, gameStyles.scoreButton]} onPress={() => navigation.navigate('Scoreboard')} disabled={loading}>
          <Text style={gameStyles.scoreText}>Scoreboard</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen; 