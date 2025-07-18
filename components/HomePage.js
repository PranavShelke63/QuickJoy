import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../global.css';
import animeGameColors from './game2/src2/style2.colors';
import GameHome1 from './game1/GameHome1';

const miniGames = [
  {
    id: '1',
    label: 'Emoji Catch',
    img: 'https://em-content.zobj.net/source/microsoft-teams/363/grinning-face_1f600.png',
    desc: 'Catch falling emojis! 2 players',
  },
  {
    id: '2',
    label: 'One Piece Match',
    img: require('./game2/src2/iconfor2.jpg'),
    desc: 'Flip cards, match the crew!'
  },
  {
    id: '3',
    label: 'MCU Quiz',
    img: require('../components/game3/marvel_images/g3logo.jpg'),
    desc: 'Test your Marvel Cinematic Universe knowledge!',
  },
];

const HomePage = (props) => {
  const [showGameHome1, setShowGameHome1] = useState(false);
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.label === 'MCU Quiz') {
      navigation.navigate('Game3Home');
    }
    if (item.label === 'One Piece Match') { // updated label
      navigation.navigate('Game2Home');
    }
    if (item.label === 'Emoji Catch') {
      // Try navigation first, fallback to inline
      if (navigation && navigation.navigate) {
        navigation.navigate('GameHome1');
      } else {
        setShowGameHome1(true);
      }
    }
    // Add more navigation logic for other games here
  };

  const renderItem = ({ item }) => {
    if (item.label === 'One Piece Match') {
      return (
        <TouchableOpacity
          style={[styles.box, styles.game2Box]}
          onPress={() => handlePress(item)}
        >
          <View style={styles.game2ImageWrapper}>
            <ImageBackground
              source={item.img}
              style={styles.game2Image}
              imageStyle={styles.game2ImageStyle}
            >
              <View style={styles.game2ImageOverlay} />
            </ImageBackground>
          </View>
          <Text style={styles.game2Label}>{item.label}</Text>
          <Text style={styles.game2Desc}>{item.desc}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={[
          styles.box,
          item.label === 'MCU Quiz' ? { backgroundColor: colors.primary } : null
        ]}
        onPress={() => handlePress(item)}
      >
        <Image source={typeof item.img === 'string' ? { uri: item.img } : item.img} style={styles.image} />
        <Text
          style={[
            styles.label,
            item.label === 'MCU Quiz' ? { color: colors.secondary, fontWeight: 'bold' } : null
          ]}
        >
          {item.label}
        </Text>
        <Text style={[styles.desc, item.label === 'MCU Quiz' ? { color: colors.text } : null]}>{item.desc}</Text>
      </TouchableOpacity>
    );
  };

  if (showGameHome1) {
    return <GameHome1 />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/applogo.jpg')} style={styles.logo} />
      <Text style={styles.title}>QuickJoy</Text>
      <Text style={styles.subtitle}>Mini Games</Text>
      <FlatList
        data={miniGames}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf3fb",
    paddingTop: 40,
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
    color:"#4f3a99",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color:"#f2689c",
  },
  list: {
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 10,
    alignItems: 'center',
    width: 140,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#222',
  },
  desc: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },
  // --- Game2 (Memory Match) custom styles ---
  game2Box: {
    backgroundColor: animeGameColors.background,
    borderColor: animeGameColors.primary,
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    margin: 10,
    alignItems: 'center',
    width: 140,
    elevation: 4,
  },
  game2ImageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: animeGameColors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  game2Image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  game2ImageStyle: {
    borderRadius: 35,
    resizeMode: 'cover',
  },
  game2ImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(24,26,27,0.25)', // subtle dark overlay for readability
    borderRadius: 35,
  },
  game2Label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
    color: animeGameColors.primary,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
  game2Desc: {
    fontSize: 13,
    color: animeGameColors.text,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default HomePage; 