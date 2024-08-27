import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AnswerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>정답입니다!</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>확인하기</Text>
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
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2', 
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
