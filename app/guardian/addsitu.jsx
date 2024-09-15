import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function MemoryGameAnswer() {
  const router = useRouter();
  const [situation, setSituation] = useState('');
  const [situations, setSituations] = useState([]);

  useEffect(() => {
    const fetchSituations = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/situations`
        );
        setSituations(response.data); 
      } catch (error) {
        console.error(`상황 조회 실패:`, error);
      }
    };

    fetchSituations();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/situations`,
        {
          situation,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('등록 성공:', response.data);
      router.push('/guardian/succesadd');
    } catch (error) {
      console.error('등록 실패:', error);
    }
  };

  const handleBack = () => {
    router.push('/guardian/home');
  };

  const handleDelete = async (situationId) => {
    try {
      const response = await axios.delete(
        `http://boundary.main.oyunchan.com:5001/situations/${situationId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('삭제 성공:', response.status);
    
      setSituations(situations.filter(item => item.situationId !== situationId));
    } catch (error) {
      console.error('삭제 실패:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backText}>뒤로가기</Text>
      </TouchableOpacity>

      <Text style={styles.header}>상황 추가</Text>
      <Text style={styles.greeting}>아이에게 필요한 상황을 추가해보세요.</Text>

      <View style={styles.content}>
        <Text style={styles.highlight}>이미 있는 상황</Text>
        <View style={styles.checkboxContainer}>
          {situations.map((item) => (
            <View key={item.situationId} style={styles.checkboxItem}>
              <Text style={styles.checkboxText}>{item.content}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.situationId)}
              >
                <Text style={styles.deleteButtonText}>삭제</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="예시) ~~하는 상황"
          placeholderTextColor="#808080"
          value={situation}
          onChangeText={setSituation}
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
