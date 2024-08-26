import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const ParentDashboard = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { username = '@Boundary' } = route.params || {};

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>아이의 학습을 확인하세요.</Text>
                <Text style={styles.headerSubtitle}>아이의 학습 결과를 확인하며 도와주세요.</Text>
            </View>

            <View style={styles.userInfo}>
                <View style={styles.userAvatar}></View>
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>김바운</Text>
                    <Text style={styles.userHandle}>{username}</Text>
                </View>
            </View>

            <View style={styles.progressBarContainer}>
                <View style={styles.progressBarFill}>
                    <Text style={styles.progressText}>62%</Text>
                </View>
            </View>

            <View style={styles.calendarContainer}>
                <Calendar
                    current={'2024-08-26'}
                    minDate={'2023-01-01'}
                    maxDate={'2024-12-31'}
                    onDayPress={(day) => {
                        console.log('selected day', day);
                    }}
                    monthFormat={'yyyy MM'}
                    hideArrows={false}
                    disableAllTouchEventsForDisabledDays={true}
                    hideExtraDays={true}
                    enableSwipeMonths={true}
                    markedDates={{
                        '2024-08-26': { selected: true, marked: true, selectedColor: '#5772FF' },
                        '2024-08-16': { marked: true, dotColor: '#50C878' },
                        '2024-08-21': { marked: true, dotColor: '#50C878' },
                    }}
                />
            </View>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ParentResult')}>
                    <View style={styles.menuItemContent}>
                        <Text style={styles.menuItemText}>결과</Text>
                        <Text style={styles.menuItemSubtext}>최근 시험 결과 보기</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ParentResolve')}>
                    <View style={styles.menuItemContent}>
                        <Text style={styles.menuItemText}>조언 상담</Text>
                        <Text style={styles.menuItemSubtext}>상담사와 채팅하기</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 60,
        flexGrow: 1,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 30,
        alignItems: 'left', 
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
    },
    headerSubtitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#898989',
        marginTop: 0,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        justifyContent: 'center',
        marginLeft: -140, 
    },
    userAvatar: {
        width: 86,
        height: 80,
        backgroundColor: '#5772FF',
        borderRadius: 50,
        marginRight: 15,
    },
    userDetails: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
    },
    userHandle: {
        fontSize: 14,
        color: '#4A4A4A',
    },
    progressBarContainer: {
        width: 320,
        height: 38,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBarFill: {
        width: '100%',
        height: '100%',
        backgroundColor: '#5772FF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressText: {
        color: '#FFFFFF',
    },
    calendarContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
        alignSelf: 'center',
        width: '100%',
    },
    menu: {
        marginTop: 0, 
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
        marginLeft: 30, 
    },
    menuItemContent: {
        flexDirection: 'column',
    },
    menuItemText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
    },
    menuItemSubtext: {
        fontSize: 14,
        color: '#898989',
        marginTop: 5,
    },
    menuItemArrow: {
        fontSize: 20,
        color: '#BCBCBC',
        marginLeft: 'auto',
    },
});

export default ParentDashboard;
