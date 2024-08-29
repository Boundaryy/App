import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index.jsx';
import Choose from './choose.jsx';
import SignIn from './guardian/signin.jsx';
import ChildNav from './nav/childnav';  // 수정된 네비게이션 바 컴포넌트 임포트

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ title: 'Home' }} />
        <Stack.Screen name="Choose" component={Choose} options={{ title: 'Choose' }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }} />
      </Stack.Navigator>
      <ChildNav />  
    </NavigationContainer>
  );
}
