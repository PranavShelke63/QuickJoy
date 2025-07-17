
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import MCUQuiz from './components/game3/MCUQuiz';
import HomeScreen from './components/game3/Gamehome4';
import HelpScreen from './components/game3/HelpScreen';
import ScoreboardScreen from './components/game3/ScoreboardScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Game3Home" component={HomeScreen} options={{ title: 'MCU Quiz Home' }} />
        <Stack.Screen name="MCUQuiz" component={MCUQuiz} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Help' }} />
        <Stack.Screen name="Scoreboard" component={ScoreboardScreen} options={{ title: 'Scoreboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
