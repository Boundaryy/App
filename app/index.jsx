import React, { useState } from 'react';
import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import  Button  from '../components/Button.jsx';

export default function Index() {
  const router = useRouter();
  const [fontSize, setFontSize] = useState(16);  

  const handle = () => {
    router.push('/choose');
  };

  const chooseLogin = () => {
    router.push('/chooselogin');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/main.svg')} style={styles.mainImage} />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>경계선 지능인 학습</Text>
        <Text style={styles.subText}>모두 바운더리에서</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={chooseLogin} title="로그인" />
        <View style={{ height: 60 }} />
        <Button onPress={handle} title="회원가입" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100%",
  },
  
  logo: {
    width: 320,
    marginBottom: 100,
    height: 240,
  },
  loginText: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: 16,
    color: 'gray',
  },
  mainImage: {
    width: 320,
    height: 240,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
    gap: 3,
  },
  mainText: {
    fontFamily: 'Pretendard',
    fontSize: 26,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
  },
  subText: {
    fontFamily: 'Pretendard',
    fontSize: 24,
    fontWeight: '500',
    color: '#666666',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -50,
  },
});
