import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyPage = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>마이페이지</Text>
      <View style={styles.profile}>
        {/* <Image source={require('./happy.png')} style={styles.profileImage} /> */}
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>신희성</Text>
          <Text style={styles.profileEmail}>tlsgmltjd00@gmail.com</Text>
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
    padding: 15,
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  line: {
    height: 2,
    backgroundColor: 'rgb(201, 201, 201)',
    marginVertical: 20,
  },
  calendar: {
    alignItems: 'center',
    width: '100%',
  },
  calendarStyle: {
    width: 274,
  },
  calendarLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 15,
    color: '#888888',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default MyPage;
