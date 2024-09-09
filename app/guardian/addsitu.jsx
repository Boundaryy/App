import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MemoryGameAnswer() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/guardian/succesadd');
  };

  const handleBack = () => {
    router.push('/guardian/home');
  };

  const handleDelete = (item) => {
    console.log(`${item} 삭제`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backText}>뒤로가기</Text>
      </TouchableOpacity>

      <Text style={styles.header}>상황 추가</Text>
      <Text style={styles.greeting}>아이에게 필요한 상황을 추가해보세요.</Text>

      <View style={styles.content}>
        <Text style={styles.question}>
          <Text style={styles.highlight}>이미 있는 상황</Text>
          <View style={styles.checkboxContainer}>
            {['친구와 약속 조정', '식당에서 주문하기', '전화 통화하기', '친구 위로하기', '상점에서 계산하기'].map((item, index) => (
              <View key={index} style={styles.checkboxItem}>
                <Text style={styles.checkboxText}>{item}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item)}>
                  <Text style={styles.deleteButtonText}>삭제</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </Text>

        <TextInput
          style={styles.input}
          placeholder="예시) ~~하는 상황"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>등록하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 18,
    color: '#808080',
    marginLeft: 32,
    marginTop: 34,
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
    marginTop: 0,
    marginLeft: 30,
  },
  greeting: {
    fontSize: 16,
    color: '#808080',
    marginBottom: 24,
    marginLeft: 30,
  },
  content: {
    marginTop: 24,
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 24,
    color: '#000',
    textAlign: 'center',
  },
  highlight: {
    color: '#5772FF',
    fontWeight: '600',
    marginLeft: -190,
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#5772FF',
    paddingVertical: 8,
    marginBottom: 32,
    fontSize: 18,
    width: '80%',
  },
  button: {
    backgroundColor: '#5772FF',
    width: 340,
    height: 50,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    display: 'flex',
    marginBottom: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxText: {
    backgroundColor: '#ECF7FF',
    borderRadius: 4,
    fontSize: 18,
    padding: 12,
    marginVertical: 5,
    marginTop: 8,
    color: '#393939',
    flex: 1,
    width: 240, 
    marginLeft: 8,
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 12, 
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
