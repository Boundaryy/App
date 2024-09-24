import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BarButton } from "../../components/Bar-Button";
import { globalStyles } from '../../styles/global';

const ParentDashboard = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    const { username = '@Boundary' } = route.params || {};
    
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.subtitle}>아이의 학습을 확인하세요.</Text>
                <Text style={globalStyles.description}>아이의 학습 결과를 확인하며 도와주세요.</Text>
            </View>

            <View style={styles.userInfo}>
                <Image source={require('../../assets/pro.png')} style={styles.userAvatar}/>
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>김바운</Text>
                    <Text style={styles.userHandle}>{username}</Text>
                </View>
            </View>


            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('guardian/result')}>
                    <View style={styles.menuItemContent}>
                    </View>
                </TouchableOpacity>
                <BarButton 
                    title={"아이 학습 진행도 확인"} 
                    explain={"출석체크 등 아이의 학습 진행도를 확인해요."} 
                    toLink={"/guardian/babysitu"} 
                    imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png" }}
                />
                <BarButton 
                    title={"상황 추가"} 
                    explain={"상황을 추가하세요"} 
                    toLink={"/guardian/addsitu"} 
                    imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Ballot%20Box%20with%20Ballot.png" }}
                />
                <BarButton 
                    title={"결과"} 
                    explain={"아이의 학습을 한번에 확인해요"} 
                    toLink={"/guardian/result"} 
                    imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Peeking%20Eye.png" }}
                />
                <BarButton 
                    title={"조언 상담"} 
                    explain={"아이 학습에 대한 이야기를 나눠요"} 
                    toLink={"/guardian/advice"} 
                    imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20Decoration.png" }}
                />
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

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -30,
        justifyContent: 'center',
        marginLeft: -70,
        marginTop: 10,
    },
    userAvatar: {
        width: 120,
        height: 120,
        backgroundColor: '#5772FF',
        borderRadius: 20,
        marginRight: 30,
        borderColor: 'gray',
    },
    userDetails: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
    },
    userHandle: {
        fontSize: 16,
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
});

export default ParentDashboard;