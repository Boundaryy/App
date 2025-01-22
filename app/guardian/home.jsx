import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BarButton } from "../../components/Bar-Button";
import { globalStyles } from '../../styles/global';

const ParentDashboard = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    const { username = 'a27856374@outlook.com' } = route.params || {};
    
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={[globalStyles.container, { backgroundColor: '#F3F4F6' }]}>
                <View style={globalStyles.header}>
                    <Text style={[globalStyles.subtitle]}>아이의 학습을 확인하세요.</Text>
                    <Text style={[globalStyles.description]}>아이의 학습 결과를 확인하며 도와주세요.</Text>
                </View>

                <View style={styles.userInfo}>
                    <Image source={require('../../assets/face.svg')} style={styles.userAvatar}/>
                    <View style={styles.userDetails}>
                        <Text style={styles.userName}>신희성</Text>
                        <Text style={styles.userHandle}>{username}</Text>
                    </View>
                </View>

                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('guardian/result')}>
                        <View style={styles.menuItemContent}>
                        </View>
                    </TouchableOpacity>
                    <BarButton 
                        title={"학습 진행도 확인"} 
                        explain={"아이의 학습 진행도를 확인하세요."} 
                        toLink={"/guardian/babysitu"} 
                        imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png" }}
                    />
                    <BarButton 
                        title={"상황 추가"} 
                        explain={"아이의 학습을 위한 상황을 추가하세요."} 
                        toLink={"/guardian/addsitu"} 
                        imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Ballot%20Box%20with%20Ballot.png" }}
                    />
                    <BarButton 
                        title={"학습 결과"} 
                        explain={"아이의 학습 결과를 확인하세요"} 
                        toLink={"/guardian/result"} 
                        imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Peeking%20Eye.png" }}
                    />
                
                </View>

                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutText}>로그아웃</Text>
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
        alignItems: 'left',
        fontFamily: 'Pretendard',
    },

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -30,
        justifyContent: 'center',
        marginLeft: -70,
        marginTop: 10,
    },
    userAvatar: {
        width: 80,
        height: 80,
        backgroundColor: '#5772FF',
        borderRadius: 60,
        marginRight: 30,
        marginLeft: 40,
        borderColor: 'gray',
    },
    userDetails: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'Pretendard',
    },
    userHandle: {
        fontSize: 16,
        color: '#4A4A4A',
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
    title: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Pretendard',
    },
    desc: {
        fontSize: 12,
        color: '#808080',
        fontFamily: 'Pretendard',
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
