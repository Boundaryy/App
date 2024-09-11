import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'; 
import { useRouter } from 'expo-router';
import axios from 'axios'; 

export default function AnswerScreen() {
  const router = useRouter();

  const handlePress = async () => {
    try {
      const response = await axios.post('http://boundary.main.oyunchan.com:5001/cognition', {
        addPoint: 100 
      });

      if (response.status === 200) {
        console.log('포인트가 성공적으로 전달되었습니다:', response.data);
        router.push('/child/home');
      }
    } catch (error) {
      console.error('포인트 전달 중 오류 발생:', error);
      Alert.alert(
        '오류',
        '포인트를 성공적으로 전달하지 못했습니다.',
        [{ text: '확인' }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Heart-Eyes.png' }}
          style={styles.icon}
        />
      </View>
      <Text style={styles.message}>성공적으로 학습을 마쳤어요!</Text>
      <Text style={styles.pointsMessage}>{' '}포인트가 지급되었습니다.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>완료하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  iconContainer: {
    marginBottom: 8,
  },
  icon: {
    width: 140,
    height: 140,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5772FF',
    marginBottom: 8,
  },
  pointsMessage: {
    fontSize: 18,
    color: '#808080',
    marginBottom: 50,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#5772FF',
    width: 310,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
