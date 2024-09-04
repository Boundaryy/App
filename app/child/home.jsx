import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BarButton } from "../../components/Bar-Button";
import { globalStyles } from '../../styles/global'
import { TouchableOpacity } from 'react-native-web';
import { router } from 'expo-router';

const App = () => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.subtitle}>어렵지 않은 학습</Text>
                <Text style={globalStyles.description}>
                    상황 대처, 게임을 통한 학습으로 지능을 향상시켜요
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <BarButton toLink={"/child/training/situchoose"} imgLink={require("../../assets/images/situation.png")} title={"상황 대처 학습"} explain={"게임을 통한 학습능력 상승"}></BarButton>
                <BarButton toLink={"/child/training/choose"} imgLink={require("../../assets/images/happyface.png")} title={"코그니션 트레이닝"} explain={"인지 기능 향상 트레이닝을 진행해요!"}></BarButton>
            </View>
            <View style={styles.header}>
                <Text style={styles.header}>꾸준히 함께해봐요</Text>
                <Text style={styles.description}>
                    상황 대처, 게임을 통한 학습으로 지능을 향상시켜요
                </Text>
              
                <TouchableOpacity onPress={() => {router.push('/child/mypage')}} style={styles.levelContainer}>
                    <Image source={require("../../assets/images/image.png")} style={styles.levelImage} />
                    {/* LV.8과 11pt 텍스트를 나란히 배치 */}
                    <Text style={styles.levelText}>LV.8</Text>
                    <Text style={styles.pointText}>11pt</Text>
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
        marginTop: 20,
    },
    header: {
        fontSize: 26,
        gap: 10,
        fontWeight: "600",
    },
    description: {
        color: "#808080",
    },
    levelContainer: {
        borderRadius: "10px",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10, 
        backgroundColor: "#F3F3F3",
        // borderColor: "#5772FF",
        // borderStyle: "solid",
        // borderWidth: "2px",
        height: 80
    },
    levelImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    levelText: {
        fontSize: 20,
        fontWeight: '600',
        marginRight:100, 
        color: "#5772FF",
    },
    pointText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000', 
    },
});

export default App;
 