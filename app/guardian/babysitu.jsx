import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useRouter } from 'expo-router';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';

const results = [
  {
    date: "6월 29일",
    title: "상황 대처 학습",
    status: "correct",
    summary: "잘했어요 (10 문제중 9개 정답)",
  },
  {
    date: "6월 28일",
    title: "상황 대처 학습",
    status: "incorrect",
    summary: "못했어요 (10 문제중 3개 정답)",
  }
];

const MyPage = () => {
  const router = useRouter();
  const [points, setPoints] = useState(0); // 여기가 포인트 API 연결한거에용! 슷지 비꾸면 api 연결 안했을 때 이 숫자 나옵니다. 현재는 0 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`);  
        setPoints(response.data.point);  
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleBackButtonClick = () => {
    router.back(); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackButtonClick}>
        <Text style={styles.backText}>뒤로가기</Text>
      </TouchableOpacity>

      <Text style={globalStyles.subtitle}>아이 학습 진행도 확인</Text>

      <View style={styles.headerContainer}>
        <Image 
          source={require('../../assets/images/image.png')} 
          style={styles.headerImage} 
        />
        <Text style={styles.headerText}>LV.8 ({points} 포인트)</Text>
      </View>

      <View style={[styles.profileContainer, { marginTop: 30 }]}>
        <View style={styles.line} />
        <View style={styles.calendarContainer}>
          <Calendar 
            style={styles.calendar}
          />
          <Text style={styles.calendarText}>최근 진행 완료 상황</Text>
        </View>

        <ScrollView style={styles.resultsContainer}>
          {results.map((result, index) => (
            <View key={index} style={styles.resultItem}>
              <Image
                source={{
                  uri: result.status === 'correct'
                    ? 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cowboy%20Hat%20Face.png'
                    : 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png'
                }}
                style={styles.resultIcon}
              />
              <View style={styles.resultContent}>
                <Text style={styles.resultTitle}>{result.title}</Text>
                <Text style={styles.resultDate}>{result.date} 상황 대처 학습 결과</Text>
                <Text style={[styles.resultSummary, result.status === 'incorrect' && styles.incorrectSummary]}>
                  {result.summary}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40, 
  },
  backText: {
    fontSize: 18,
    color: '#808080',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerImage: {
    width: 100,
    height: 100, 
    marginRight: 10, 
  },
  headerText: {
    fontSize: 18,
    color: '#565656', 
    marginLeft: -20,
    marginTop: -10,
    fontWeight: '500',
  },
  profileContainer: {
    marginTop: 10,
  },
  calendarContainer: {
    marginTop: -50,
  },
  calendar: {
    width: '100%',
  },
  calendarText: {
    fontSize: 26,
    color: '#000000', 
    marginTop: 20, 
    fontWeight: '600',
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  resultIcon: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  resultContent: {
    flexGrow: 1,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
  },
  resultDate: {
    fontSize: 16,
    color: '#5772FF',
    marginTop: 4,
  },
  resultSummary: {
    fontSize: 16,
    color: '#4CAF50', 
    marginTop: 4,
  },
  incorrectSummary: {
    color: '#FF0000', 
  },
});

export default MyPage;
