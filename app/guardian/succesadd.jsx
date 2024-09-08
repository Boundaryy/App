import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router'; 

export default function AnswerScreen() {
  const router = useRouter(); 

  const handlePress = () => {
    router.push('/guardian/home'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image 
          source={{ uri: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Blue%20Heart.png' }}
          style={styles.icon}
        />
      </View>
      <Text style={styles.message}>성공!</Text>
      <Text style={styles.pointsMessage}>상황이 추가되었습니다.</Text>
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
