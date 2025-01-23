import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarButton}  from "../../components/Bar-Button";
import { globalStyles } from '../../styles/global';

const ParentDashboard = () => {
    const navigation = useNavigation();
    
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={[globalStyles.container, { backgroundColor: '#F3F4F6' }]}>
                <View style={globalStyles.header}>
                    <Text style={[globalStyles.subtitle]}>어렵지 않은 학습</Text>
                    <Text style={[globalStyles.description]}>상황 대처, 게임을 통한 학습으로 지능을 향상시켜요. </Text>
                </View>

                <View style={[styles.menu, { marginTop: -40 }]}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('guardian/result')}>
                        <View style={styles.menuItemContent}>
                        </View>
                    </TouchableOpacity>
                    <BarButton 
                        title={"대화형 상황 대처 학습"} 
                        explain={"AI와 대화하며 학습력 UP UP"} 
                        toLink={"/child/training/sitchoice"} 
                        imgLink={require("../../assets/speak.png")}
                    />
                    <BarButton 
                        title={"선택형 상황 대처 학습"} 
                        explain={"사지선다 문제로 질문에 맞는 답변 선택"} 
                        toLink={"/"} 
                        imgLink={require("../../assets/check.png")}
                    />
                    <BarButton 
                        title={"카드 뒤집기"} 
                        explain={"같은 카드를 찾으며 기억력 상승"} 
                        toLink={"/child/training/card"} 
                        imgLink={require("../../assets/cardgame.png")}
                    />
                    <BarButton 
                        title={"숨은 과일 찾기"} 
                        explain={"숨은 과일을 찾으며 관찰력을 높여요."} 
                        toLink={"/child/training/memory"} 
                        imgLink={require("../../assets/fruit.svg")}
                    />
                </View>
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
        fontFamily: 'Pretendard',
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
    menu: {
        marginTop: 40,
        marginLeft: 30,
    },
    menuItem: {
        paddingVertical: 15,
    },
    menuItemContent: {
        flexDirection: 'column',
    },
    logoutButton: {
        marginTop: 60,
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    logoutText: {
        color: '#9F9F9F',
        fontFamily: 'Pretendard',
        fontSize: 16,
    },
});

export default ParentDashboard;
