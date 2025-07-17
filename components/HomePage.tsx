import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type MiniGame = {
  id: string;
  label: string;
  img: string;
  desc: string;
};

const miniGames: MiniGame[] = [
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
    label: 'Quiz Master',
    img: 'https://via.placeholder.com/80',
    desc: 'Answer trivia questions.'
  },
];

const HomePage = () => {
  const navigation = useNavigation();

  const handlePress = (item: MiniGame) => {
    if (item.label === 'Quiz Master') {
      navigation.navigate("QuizMaster");
    }
    // Add more navigation logic for other games here
  };

  const renderItem = ({ item }: { item: MiniGame }) => (
    <TouchableOpacity style={styles.box} onPress={() => handlePress(item)}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Games</Text>
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
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#f0f0f0',
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
  },
  desc: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },
});

export default HomePage; 