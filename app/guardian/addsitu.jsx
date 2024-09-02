import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

export default function MemoryGameAnswer() {
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = () => {
    router.push('/child/training/memoryre'); // Navigate to the desired route
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>메모리게임 정답</Text>

      <View style={styles.content}>
        <Text style={styles.question}>
          <Text style={styles.highlight}>Q. 사과의 개수</Text>를 알려주세요.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="예시) ~~하는 상황"
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>완료하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    marginTop: 24,
  },
  question: {
    fontSize: 18,
    marginBottom: 24,
    color: '#000',
  },
  highlight: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#4A90E2',
    paddingVertical: 8,
    marginBottom: 32,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
