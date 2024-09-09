import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { Calendar } from 'react-native-calendars';
import { BarButton } from "../../components/Bar-Button";
import { globalStyles } from '../../styles/global';
import { router } from 'expo-router';

const App = () => {
const [userData, setUserData] = useState(null);
const [logoutMessage, setLogoutMessage] = useState('');
const [userData, setUserData] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/user');

                setUserData(response.data);

                setUserData(response.data); 
            } catch (error) {
                console.error("데이터 불러오기 중 오류 발생:", error);
                Alert.alert("오류", "데이터를 불러오는데 실패했습니다.");
            }
        };


        fetchData();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await axios.post('https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/logout', {});
            if (response.status === 200) {
                setLogoutMessage(response.data); 
                setTimeout(() => {
                    router.push('/'); 
                }, 2000); 
            } else {
                console.log('로그아웃 실패');
            }
        } catch (error) {
            console.error('로그아웃 중 오류 발생:', error);
        }
    };

        fetchData(); 
    }, []);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Boundary</Text>
                <Text style={globalStyles.subtitle}>어렵지 않은 학습</Text>
                <Text style={globalStyles.description}>
                    상황 대처, 게임을 통해 지능을 향상시켜요
                </Text>
            </View>
            
            <View style={[styles.buttonContainer, { marginTop: 110 }]}>
                <BarButton 
                    toLink={"/child/training/situchoose"} 
                    imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Tipping%20Hand.png" }} 
                    title={"상황 대처 학습"} 
                    explain={"게임을 통한 학습능력 상승"}
                />
                <BarButton 
                    toLink={"/child/training/choose"} 
                    imgLink={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Footprints.png" }} 
                    title={"코그니션 트레이닝"} 
                    explain={"인지 기능 향상 트레이닝을 진행해요!"}
                />
            </View>
            
            <View style={styles.header}>
                <Text style={styles.header}>꾸준히 함께해봐요</Text>
                <Text style={styles.description}>
                    상황 대처, 게임을 통한 학습으로 지능을 향상시켜요
                </Text>
              
                <TouchableOpacity onPress={() => {router.push('/child/home')}} style={styles.levelContainer}>
                    <Image source={require("../../assets/images/image.png")} style={styles.levelImage} />
                    <Text style={styles.levelText}>LV.{userData?.point ?? '...'}</Text>
                </TouchableOpacity>
            </View>
            
            <Calendar style={styles.calendar} />
            
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>로그아웃</Text>
            </TouchableOpacity>
            
            {logoutMessage ? (
                <Text style={styles.logoutMessage}>{logoutMessage}</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        width: "85%",
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 60,
        backgroundColor: '#5772FF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    buttonExplain: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
    },
    calendar: {
        marginTop: 4,
        width: '130%',  
        alignSelf: 'center',  
    },
    header: {
        fontSize: 26,
        gap: 4,
        fontWeight: "600",
        marginLeft: "-10px",
        marginTop: "10px",
    },
    description: {
        color: "#808080",
        marginLeft: "-10px",
        marginBottom: "8px",
    },
    levelContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginLeft: "-20px", 
    },
    levelImage: {
        width: 80,
        height: 80,
        marginRight: 0, 
    },
    levelText: {
        fontSize: 20,
        fontWeight: '600',
        color: "gray",
    },
    logoutButton: {
        marginTop: 20,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 240,
    },
    logoutButtonText: {
        color: '#898989',
        fontSize: 16,
        fontWeight: '400',
    },
    logoutMessage: {
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 16,
        color: '#898989',
    },
});

export default App;
