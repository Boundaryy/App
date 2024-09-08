import React, { useState } from 'react';
import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button.jsx';

export default function Index() {
  const router = useRouter();
  const [fontSize, setFontSize] = useState(16);  // 초기 글자 크기 설정

  const handle = () => {
    router.push('/choose');
  };

  const chooseLogin = () => {
    router.push('/chooselogin');
  };

  return (
    <View style={globalStyles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Button onPress={handle} title={"회원가입"} />
      <TouchableOpacity onPress={chooseLogin} style={{ margin: 20 }}>
        <Text style={[styles.loginText, { fontSize }]} onPress={() => setFontSize(fontSize + 2)}>로그인</Text>
      </TouchableOpacity>
      <Text style={globalStyles.footer}>©Barder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 170,
    marginBottom: 100,
    height: 126,
  },
  loginText: {
    fontWeight: '400',
    fontSize: 16,
    color: 'gray',
  },
});
