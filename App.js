
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import MCUQuiz from './components/game3/MCUQuiz';
import HomeScreen from './components/game3/Gamehome3';
import HelpScreen from './components/game3/HelpScreen';
import ScoreboardScreen from './components/game3/ScoreboardScreen';
import GameHome2 from './components/game2/Gamehome2';
import MemoryMatch from './components/game2/MemoryMatch';
import GameCombo2 from './components/game2/GameCombo2';
import GameHome1 from './components/game1/GameHome1';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="GameHome1" component={GameHome1} options={{ title: 'Emoji Catch Home' }} />
        <Stack.Screen name="Game2Home" component={GameHome2} options={{ title: 'Memory Match Home' }} />
        <Stack.Screen name="MemoryMatch" component={MemoryMatch} options={{ title: 'Memory Match' }} />
        <Stack.Screen name="Game2Combo" component={GameCombo2} options={{ title: 'Memory Match Combos' }} />
        <Stack.Screen name="Game3Home" component={HomeScreen} options={{ title: 'MCU Quiz Home' }} />
        <Stack.Screen name="MCUQuiz" component={MCUQuiz} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Help' }} />
        <Stack.Screen name="Scoreboard" component={ScoreboardScreen} options={{ title: 'Scoreboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
