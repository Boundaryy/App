import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { globalStyles } from '../../styles/global';

dayjs.locale('ko');

const App = () => {
    const [progress, setProgress] = useState(0.47);

    const weekDaysKor = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, styles.text]}>
                    아이 학습 진행도 확인
                </Text>
                <Text style={[globalStyles.description]}>
                    아이의 학습 결과를 확인하며 도와주세요.
                </Text>
            </View>

            <View style={styles.progressBarContainer}>
                <Text style={styles.levelText}>
                    <Text style={styles.nameHighlight}>신희성님</Text>{' '}
                    <Text style={styles.defaultColor}>레벨 </Text>
                    <Text style={styles.levelHighlight}>46</Text>
                </Text>

                <View style={styles.progressBarWrapper}>
                    <Text style={styles.progressLeftText}>470/1000</Text>
                    <Text style={styles.progressRightText}>pt</Text>
                </View>
                <View style={styles.progressBar}>
                    <View
                        style={[styles.progress, { width: `${progress * 100}%` }]}
                    />
                </View>
            </View>

            <View style={styles.calendarContainer}>
                <Calendar
                    style={styles.calendar}
                    theme={{
                        todayTextColor: 'black',
                        textDayFontSize: 20,
                        textDayFontWeight: 'bold',
                        textMonthFontSize: 20,
                        textMonthFontWeight: 'bold',
                        textSectionTitleColor: 'rgba(138, 138, 138, 1)',
                        selectedDayBackgroundColor: '#5772FF',
                        selectedDayTextColor: '#ffffff',
                        arrowColor: '#5772FF',
                        textDayFontFamily: 'Pretendard',
                        textMonthFontFamily: 'Pretendard',
                        textDayHeaderFontFamily: 'Pretendard',
                        textDayHeaderFontWeight: 'bold',
                        backgroundColor: '#F3F4F6',
                        calendarBackground: '#F3F4F6',
                        dayTextColor: '#000000',
                    }}
                    markedDates={{
                        '2025-01-24': {
                            selected: true,
                            selectedColor: '#5772FF',
                            selectedTextColor: '#ffffff',
                        },
                        '2025-01-25': {
                            marked: true,
                            dotColor: '#5772FF',
                        },
                    }}
                    monthFormat={'yyyy년 MM월'}
                    firstDay={0}
                    renderHeader={(date) => (
                        <Text style={styles.headerText}>
                            {dayjs(date).format('YYYY년 MM월')}
                        </Text>
                    )}
                    dayNamesShort={weekDaysKor}
                    renderDay={(day) =>
                        day ? (
                            <View
                                style={[
                                    styles.dayContainer,
                                    { backgroundColor: '#F3F4F6' },
                                ]}
                            >
                                <Text style={styles.dayText}>
                                    {dayjs(day.dateString).format('DD')}
                                </Text>
                            </View>
                        ) : (
                            <View />
                        )
                    }
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
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Pretendard',
    },
    dayContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 10,
        paddingVertical: 5,
    },
    dayText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Pretendard',
    },
});

export default App;
