import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './app/index.jsx';
import Choose from './app/choose.jsx';
import SignIn from './app/guardian/signin.jsx'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ title: 'Home' }} />
        <Stack.Screen name="Choose" component={Choose} options={{ title: 'Choose' }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }} /> {/* SignIn 화면 추가 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
