import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BarButton } from "../../components/Bar-Button";
import { globalStyles } from '../../styles/global';
import { router } from 'expo-router';

const App = () => {
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
              
                <TouchableOpacity onPress={() => {router.push('/child/mypage')}} style={styles.levelContainer}>
                    <Image source={require("../../assets/images/image.png")} style={styles.levelImage} />
                    <Text style={styles.levelText}>LV.8</Text>
                </TouchableOpacity>
            </View>
            <Calendar style={styles.calendar} />
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
        marginTop: "4",
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

});

export default App;
