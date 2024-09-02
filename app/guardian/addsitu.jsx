import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

export default function MemoryGameAnswer() {
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = () => {
    router.push('/guardian/succesadd'); // Navigate to the desired route
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>상황 추가</Text>

      <View style={styles.content}>
        <Text style={styles.question}>
          <Text style={styles.highlight}>이미 있는 상황</Text>
          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>HTML</Text>
            <Text style={styles.checkboxText}>CSS</Text>
            <Text style={styles.checkboxText}>JavaScript</Text>
            <Text style={styles.checkboxText}>PHP</Text>
            <Text style={styles.checkboxText}>Bootstrap</Text>
            <Text style={styles.checkboxText}>jQuery</Text>
            <Text style={styles.checkboxText}>NodeJS</Text>
            <Text style={styles.checkboxText}>Tailwind CSS</Text>
          </View>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    display: "flex",
    marginBottom: 20,
  },
  checkboxText: {
    backgroundColor: "#F0F0F0",
    fontSize: 18,
    padding: 10,
    marginVertical: 5,
  },
});
