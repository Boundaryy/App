import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useRouter } from 'expo-router';
import { Calendar } from 'react-native-calendars'; // 캘린더 라이브러리 추가

const MyPage = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back(); // 뒤로가기 버튼 클릭 시 이전 화면으로 돌아갑니다.
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackButtonClick}>
        <Text style={styles.backText}>뒤로가기</Text>
      </TouchableOpacity>

      <Text style={globalStyles.subtitle}>마이페이지</Text>
      <View style={[styles.profileContainer, { marginTop: 30 }]}>
        <View style={styles.profile}>
          <View style={styles.profileInfo}>
            <Image style={styles.image} source={require("../../assets/maru.jpeg")}/>
            <View style={{gap:5}}>
              <Text style={styles.profileName}>신희성</Text>
              <Text style={styles.profileEmail}>tlsgmltjd00@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.calendarContainer}>
          <Calendar 
            style={styles.calendar}
          />
        </View>
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
    marginTop: '40px',
  },
  backText: {
    fontSize: 18,
    color: '#808080',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: '10px',
  },
  image: {
    width: 80,
    height: 80,
  },
  profileInfo: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginTop:'12px',
    marginLeft: '10px',
  },
  profileEmail: {
    fontSize: 16,
    color: '#808080',
    marginLeft: '10px',
  },
  line: {
    height: 1,
    backgroundColor: 'rgb(201, 201, 201)',
    marginVertical: 20,
  },
  calendarContainer: {
    marginTop: 20,
  },
  calendar: {
    width: '100%',
  },
});

export default MyPage;
