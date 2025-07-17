import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Globalcolors from '../global.css.js';
import colors from './game3/styles/colors';

const miniGames = [
  {
    id: '1',
    label: 'Puzzle Game',
    img: 'https://via.placeholder.com/80',
    desc: 'Solve fun puzzles!'
  },
  {
    id: '2',
    label: 'Memory Match',
    img: 'https://via.placeholder.com/80',
    desc: 'Test your memory skills.'
  },
  {
    id: '3',
    label: 'MCU Quiz',
    img: require('../components/game3/marvel_images/01mcu.jpg'),
    desc: 'Test your Marvel Cinematic Universe knowledge!',
  },
];

const HomePage = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.label === 'MCU Quiz') {
      navigation.navigate('Game3Home');
    }
    // Add more navigation logic for other games here
  };

  const renderItem = ({ item }) => (
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
});

export default HomePage; 