import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SituButton } from "../../../components/Situ-Button";
import { globalStyles } from '../../../styles/global'


const App = () => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.subtitle}>상황 고르기</Text>
                <Text style={globalStyles.description}>
                    상황 대처, 게임을 통한 학습으로 지능을 향상시켜요
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <SituButton toLink={"/child/training/resolve"}  title={"친구들이 놀릴 때 대처하기"} explain={"게임을 통한 학습능력 상승"}></SituButton>
                <SituButton toLink={"/child/training/resolve"}  title={"코그니션 트레이닝"} explain={"인지 기능 향상 트레이닝을 진행해요!"}></SituButton>
                <SituButton toLink={"/child/training/resolve"}  title={"코그니션 트레이닝"} explain={"인지 기능 향상 트레이닝을 진행해요!"}></SituButton>
                <SituButton toLink={"/child/training/resolve"}  title={"코그니션 트레이닝"} explain={"인지 기능 향상 트레이닝을 진행해요!"}></SituButton>
                <SituButton toLink={"/child/training/resolve"}  title={"코그니션 트레이닝"} explain={"인지 기능 향상 트레이닝을 진행해요!"}></SituButton>
                <SituButton toLink={"/child/training/resolve"}  title={"코그니션 트레이닝"} explain={"인지 기능 향상 트레이닝을 진행해요!"}></SituButton>
                <SituButton toLink={"/child/training/resolve"}  title={"코그니션 트레이닝"} explain={"인지 기능 향상 트레이닝을 진행해요!"}></SituButton>
            </View>
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
        marginTop: 20,
    },
});

export default App;
