import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MemoryGameAnswer() {
  const router = useRouter();
  const [situation, setSituation] = useState('');
  const [situations, setSituations] = useState([]);

  useEffect(() => {
    const fetchSituations = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        const response = await axios.get(
          `https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/situations`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,  
            },
          }
        );

        if (response.status !== 200) {
          throw new Error('상황 조회 실패');
        }

        console.log(response.data);
        setSituations(response.data);
      } catch (error) {
        console.error('상황 조회 실패:', error.message); // Error message for console only
      }
    };

    fetchSituations();
  }, []);

  const handleSubmit = async () => {
    if (!situation) {
      alert("빈칸없이 작성해주세요");
    } else {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        console.log("Access Token:", accessToken);  // 토큰 확인

        const response = await axios.post(
          `https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/situations`,
          {
            situation: situation,
          },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,  
            },
          }
        );

        // 응답 상태 코드가 201인 경우 처리
        if (response.status === 201) {
          console.log('등록 성공');
          router.push('/guardian/succesadd');  // 상황 등록 성공 후 화면 이동
        } else {
          console.error('등록 실패, 상태 코드:', response.status);
          alert('등록 실패, 상태 코드: ' + response.status);
        }
      } catch (error) {
        // 상세 에러 출력
        console.error('등록 실패:', error.message);
        if (error.response) {
          console.error('서버 응답:', error.response.data);
          console.error('응답 상태 코드:', error.response.status);
        }
        alert('등록 실패: ' + error.message);
      }
    }
  };

  const handleBack = () => {
    router.push('/guardian/home');
  };

  const handleDelete = async (situationId) => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const response = await axios.delete(
        `https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/situations/${situationId}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,  
          },
        }
      );

      if (response.status !== 200) {
        throw new Error('삭제 실패');
      }

      console.log('삭제 성공:', response.status);
      setSituations(situations.filter(item => item.situationId !== situationId));
    } catch (error) {
      console.error('삭제 실패:', error.message); // Error message for console only
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
          {situations.length === 0 ? (
            <Text>상황이 추가되지 않았어요</Text>
          ) : (
            situations.map((item) => (
              <View key={item.situationId} style={styles.checkboxItem}>
                <Text style={styles.checkboxText}>{item.content}</Text>
              </View>
            ))
          )}
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
    width: "90%",
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    display: 'flex',
  },
  checkboxItem: {
    flexDirection: 'row',
    width: "100%",
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
});
