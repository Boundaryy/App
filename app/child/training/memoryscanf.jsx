import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function MemoryGameAnswer() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/child/training/point');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>메모리게임 정답</Text>
      <Text style={styles.subHeader}>질문에 대한 답을 입력하세요.</Text>

      <View style={styles.content}>
        <Text style={styles.question}>
          <Text style={styles.highlight}>사과의 개수</Text>를 알려주세요.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="사과의 개수를 적어줘."
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>완료하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: '5%',
    paddingVertical: 32,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 60,
    marginLeft: '5%',
  },
  subHeader: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 24, 
    marginLeft: '5%',
  },
  content: {
    marginTop: 24,
  },
  question: {
    fontSize: 22,
    marginBottom: 24,
    color: '#565656',
    fontWeight: '600',
    marginLeft: '5%',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#5772FF',
    paddingVertical: 8,
    marginBottom: 24,
    fontSize: 18,
    marginLeft: '5%',
    width: '90%', 
  },
  button: {
    width: '90%', 
    height: 60,
    backgroundColor: '#5772FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center', 
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
