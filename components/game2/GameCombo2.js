import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';
import animeGameColors from './src2/style2.colors';

const combos = [
  { id: '1', title: 'Combo 1', desc: 'Match 2 pairs in a row without a wrong guess!' },
  { id: '2', title: 'Combo 2', desc: 'Find 3 pairs in 5 moves or less.' },
  { id: '3', title: 'Combo 3', desc: 'Clear the board with no mistakes for a perfect combo!' },
  { id: '4', title: 'Combo 4', desc: 'Remember card positions for faster matches.' },
  { id: '5', title: 'Combo 5', desc: 'Try to beat your best move count each time.' },
];

const GameCombo2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Memory Match Combos</Text>
        {combos.map(item => (
          <View style={styles.comboBox} key={item.id}>
            <Text style={styles.comboTitle}>{item.title}</Text>
            <Text style={styles.comboDesc}>{item.desc}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: animeGameColors.background,
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingBottom: 32, // Extra space for back button
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: animeGameColors.secondary,
    marginBottom: 20,
    marginTop: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  comboBox: {
    backgroundColor: animeGameColors.overlayLight,
    borderRadius: 10,
    padding: 18,
    marginBottom: 16,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  comboTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: animeGameColors.textSecondary,
    marginBottom: 6,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  comboDesc: {
    fontSize: 16,
    color: animeGameColors.text,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  backButton: {
    backgroundColor: animeGameColors.button,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    alignSelf: 'center',
  },
  backText: {
    color: animeGameColors.text,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default GameCombo2; 