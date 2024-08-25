import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push('/choose');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.svg')} style={styles.logo} />

      <TouchableOpacity style={styles.signupButton} onPress={handleSignupClick}>
        <Text style={styles.signupButtonText}>회원가입</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>©Barder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 'auto',
    position: 'absolute',
    top: 350,
  },
  signupButton: {
    width: 310,
    height: 50,
    backgroundColor: '#5772FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    fontSize: 14,
    color: '#808080',
  },
});
