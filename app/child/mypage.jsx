import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { globalStyles } from '../../styles/global';

const configureLocalization = () => {
  dayjs.locale('ko');

  LocaleConfig.locales.ko = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: '오늘',
  };

  LocaleConfig.defaultLocale = 'ko';
};

const ProgressBar = ({ name, level, progress }) => {
  return (
    <View style={styles.progressBarContainer}>
      <Text style={styles.levelText}>
        <Text style={styles.nameHighlight}>{name}님</Text>{' '}
        <Text style={styles.defaultColor}>레벨 </Text>
        <Text style={styles.levelHighlight}>{level}</Text>
      </Text>

      <View style={styles.progressBarWrapper}>
        <Text style={styles.progressLeftText}>470/1000</Text>
        <Text style={styles.progressRightText}>pt</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
};

const App = () => {
  configureLocalization();
  const [progress, setProgress] = useState(0.47);

  const calendarTheme = {
    todayTextColor: '#FFFFFF', 
    todayBackgroundColor: '#5772FF', 
    selectedDayTextColor: '#FFFFFF',
    textDayFontSize: 20,
    textDayFontWeight: 'bold',
    textMonthFontSize: 20,
    textMonthFontWeight: 'bold',
    textSectionTitleColor: 'rgba(138, 138, 138, 1)',
    selectedDayBackgroundColor: '#5772FF',
    arrowColor: '#5772FF',  
    textDayFontFamily: 'Pretendard',
    textMonthFontFamily: 'Pretendard',
    textDayHeaderFontFamily: 'Pretendard',
    textDayHeaderFontWeight: 'bold',
    backgroundColor: '#F3F4F6',
    calendarBackground: '#F3F4F6',
    dayTextColor: '#000000',
  };

  const markedDates = {
    '2025-01-24': {
      selected: true,
      selectedColor: '#5772FF',
      selectedTextColor: '#',
    },
    '2025-05-15': { marked: true, dotColor: '#50cebb' },
    '2025-05-16': { marked: true, dotColor: '#50cebb' },
    '2025-05-21': {
      startingDay: true,
      color: '#50cebb',
      textColor: 'white',
    },
    '2025-05-22': { color: '#70d7c7', textColor: 'white' },
    '2025-05-23': {
      color: '#70d7c7',
      textColor: 'white',
      marked: true,
      dotColor: 'white',
    },
    '2025-05-24': { color: '#70d7c7', textColor: 'white' },
    '2025-05-25': {
      endingDay: true,
      color: '#50cebb',
      textColor: 'white',
    },
  };

  return (
    <View style={[globalStyles.container]}>
      <View style={globalStyles.header}>
        <Text style={[globalStyles.subtitle, styles.text]}>
          마이페이지
        </Text>
        <Text style={[globalStyles.description]}>
          레벨과 학습 일수를 확인해요.
        </Text>
      </View>

      <ProgressBar 
        name="신희성" 
        level={46} 
        progress={progress} 
      />

      <View style={styles.calendarContainer}> 
        <Calendar
          style={styles.calendar}
          theme={calendarTheme}
          markingType={'period'}
          markedDates={markedDates}
          monthFormat={'yyyy년 MM월'}
          firstDay={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    color: '#565656',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: -10,
    marginTop: 30,
    fontFamily: 'Pretendard',
  },
  text: {
    fontFamily: 'Pretendard',
  },
  progressBarContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  levelText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginTop: -30,
    marginBottom: 30,
    marginLeft: -150,
    fontFamily: 'Pretendard',
  },
  nameHighlight: {
    color: '#5772FF',
  },
  levelHighlight: {
    color: '#5772FF',
  },
  defaultColor: {
    color: '#000000',
  },
  progressBarWrapper: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  progressLeftText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E8E',
    fontFamily: 'Pretendard',
  },
  progressRightText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E8E',
    fontFamily: 'Pretendard',
  },
  progressBar: {
    width: 320,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#5772FF',
  },
  calendarContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#F3F4F6',
  },
});

export default App;