import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { globalStyles } from '../../styles/global'
import { useRouter } from 'expo-router';

const MyPage = () => {
  const router = useRouter()

  const markedDates = {
    '2024-07-01': { marked: true, dotColor: '#5772FF' },
    '2024-07-02': { marked: true, dotColor: '#5772FF' },
    '2024-07-03': { marked: true, dotColor: '#5772FF' },
    '2024-07-05': { marked: true, dotColor: '#5772FF' },
    '2024-07-08': { marked: true, dotColor: '#5772FF' },
    '2024-07-09': { marked: true, dotColor: '#5772FF' },
    '2024-07-11': { marked: true, dotColor: '#5772FF' },
    '2024-07-12': { marked: true, dotColor: '#5772FF' },
    '2024-07-13': { marked: true, dotColor: '#5772FF' },
    '2024-07-16': { marked: true, dotColor: '#5772FF' },
    '2024-07-17': { marked: true, dotColor: '#5772FF' },
    '2024-07-18': { marked: true, dotColor: '#5772FF' },
    '2024-07-19': { marked: true, dotColor: '#5772FF' },
    '2024-07-20': { marked: true, dotColor: '#5772FF' },
    '2024-07-22': { marked: true, dotColor: '#5772FF' },
    '2024-07-23': { marked: true, dotColor: '#5772FF' },
    '2024-07-26': { marked: true, dotColor: '#5772FF' },
    '2024-07-27': { marked: true, dotColor: '#5772FF' },
    '2024-07-28': { marked: true, dotColor: '#5772FF' },
    '2024-07-30': { marked: true, dotColor: '#5772FF' },
    '2024-07-31': { marked: true, dotColor: '#5772FF' },
  };

  const handleLoginClick = () => {
    router.push('/child/home')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBox} onPress={handleLoginClick}>
        <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
        <Text style={styles.arrowText}>돌아가기</Text>
      </TouchableOpacity>

      <Text style={globalStyles.subtitle}>마이페이지</Text>
      <View style={styles.profile}>
        {/* <Image source={require('./happy.png')} style={styles.profileImage} /> */}
        <View style={styles.profileInfo}>
          <Image style={styles.image} source={require("../../assets/maru.jpeg")}/>
          <View style={{gap:5}}>
            <Text style={styles.profileName}>신희성</Text>
            <Text style={styles.profileEmail}>tlsgmltjd00@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.calendar}>
        <Calendar
          current={'2024-07-01'}
          markedDates={markedDates}
          style={styles.calendarStyle}
          theme={{
            todayTextColor: '#5772FF',
            dayTextColor: '#000',
            dotColor: '#5772FF',
            selectedDayBackgroundColor: '#5772FF',
            selectedDayTextColor: '#fff',
          }}
        />
        <View style={styles.calendarLegend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#5772FF' }]} />
            <Text>학습한 날</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#000' }]} />
            <Text>학습하지 않은 날</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding:40,
    flex: 1,
  },
  arrowBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrow: {
    height: 20,
    width: 20,
  },
  arrow1: {
    height: 20,
    width: 20,
    transform: [{ rotate: '180deg' }], 
  },
  arrowText: {
    fontSize: 18,
    color: '#808080',
    marginLeft: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginTop:20,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
    borderColor: '#5772FF',
    borderWidth: 2,
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
    color: '#222',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  line: {
    height: 1,
    backgroundColor: 'rgb(201, 201, 201)',
    marginVertical: 20,
  },
  calendar: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  calendarStyle: {
    width: '100%',
    marginBottom: 20,
  },
  calendarLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 15,
    color: '#888888',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
});
export default MyPage