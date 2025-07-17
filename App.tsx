
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import QuizMaster from './components/QuizMaster';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Mini Games' }} />
        <Stack.Screen name="QuizMaster" component={QuizMaster} options={{ title: 'Quiz Master' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
