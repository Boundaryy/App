import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BarButton } from "../../components/Bar-Button";
import { Calendar } from 'react-native-calendars';

const ParentDashboard = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    const { username = '@Boundary' } = route.params || {};
    
    const [selectedDate, setSelectedDate] = useState('');

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

            {/* Calendar Component */}
            <View style={styles.calendarContainer}>
                <Calendar
                    onDayPress={(day) => setSelectedDate(day.dateString)}
                    markedDates={{
                        [selectedDate]: { selected: true, marked: true, selectedColor: '#5772FF' },
                    }}
                    theme={{
                        selectedDayBackgroundColor: '#5772FF',
                        todayTextColor: '#5772FF',
                        arrowColor: '#5772FF',
                    }}
                />
            </View>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('guardian/result')}>
                    <View style={styles.menuItemContent}>
                    </View>
                </TouchableOpacity>
                <BarButton title={"조언 상담"} explain={"아이 학습에 대한 이야기를 나눠요"} toLink={"/guardian/advice"} imgLink={require("../../assets/images/happyface.png")}></BarButton>
                <BarButton title={"결과"} explain={"아이의 학습을 한번에 확인해요"} toLink={"/guardian/result"} imgLink={require("../../assets/images/cognition.png")}></BarButton>
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
        marginTop: 8,
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
        marginBottom: -30,
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
