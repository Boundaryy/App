import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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

            <View style={styles.calendar}>
                <Text style={styles.calendarHeader}>2024.08</Text>
                <View style={styles.calendarDays}>
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
                        <Text key={index} style={styles.calendarDayInactive}>{day}</Text>
                    ))}
                    {[...Array(31).keys()].map((day) => (
                        <Text
                            key={day}
                            style={[
                                styles.calendarDay,
                                (day === 26) ? styles.calendarDayActive : null, // 27일을 26으로 조정
                            ]}
                        >
                            {day + 1}
                        </Text>
                    ))}
                </View>

                <View style={styles.calendarLegend}>
                    <View style={styles.calendarLegendItem}>
                        <View style={styles.calendarLegendDot}></View>
                        <Text>학습한 날</Text>
                    </View>
                    <View style={styles.calendarLegendItem}>
                        <View style={[styles.calendarLegendDot, styles.calendarLegendDotInactive]}></View>
                        <Text>학습하지 않은 날</Text>
                    </View>
                </View>
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
        marginBottom: 40,
        alignItems: 'let', 
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
        marginTop: 8,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        justifyContent: 'center',
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
    calendar: {
        width: 320,
        padding: 15,
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        alignSelf: 'center',
    },
    calendarHeader: {
        fontSize: 16,
        color: '#565656',
        marginBottom: 10,
        textAlign: 'left',
        width: '100%',
    },
    calendarDays: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    calendarDay: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 5,
        textAlign: 'center',
        color: '#000',
    },
    calendarDayActive: {
        backgroundColor: '#5772FF',
        color: '#FFFFFF',
    },
    calendarDayInactive: {
        color: '#898989',
    },
    calendarLegend: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    calendarLegendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    calendarLegendDot: {
        width: 10,
        height: 2,
        backgroundColor: '#5772FF',
        marginRight: 5,
    },
    calendarLegendDotInactive: {
        backgroundColor: '#000',
    },
    menu: {
        marginTop: 30,
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
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
