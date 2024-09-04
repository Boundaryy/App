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
                <SituButton pick={styles.barBtnParent} toLink={"/child/training/resolve"}  title={"친구들이 놀릴 때 대처하기"} explain={"부모님픽!"}></SituButton>
                <SituButton pick={styles.barBtn} toLink={"/child/training/resolve"}  title={"친구와 약속 조정"} explain={"처음 시도"}></SituButton>
                <SituButton pick={styles.barBtn} toLink={"/child/training/resolve"}  title={"식당에서 주문하기"} explain={"처음 시도"}></SituButton>
                <SituButton pick={styles.barBtn} toLink={"/child/training/resolve"}  title={"전화 통화하기"} explain={"처음 시도"}></SituButton>
                <SituButton pick={styles.barBtn} toLink={"/child/training/resolve"}  title={"친구 위로하기"} explain={"처음 시도"}></SituButton>
                <SituButton pick={styles.barBtn} toLink={"/child/training/resolve"}  title={"상점에서 계산하기"} explain={"처음 시도"}></SituButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    barBtn: {
        backgroundColor: "#F3F4F6",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // 화살표와 텍스트 사이의 공간을 자동으로 조정
        marginTop: 10,
        borderRadius: 20,
        padding: 14,
        elevation: 2,
    },
    barBtnParent: {
        backgroundColor: "#F3F4F6",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // 화살표와 텍스트 사이의 공간을 자동으로 조정
        marginTop: 10,
        borderWidth: 3, // 테두리 두께
        borderColor: '#5772FF', // 테두리 색상
        borderRadius: 10, // 테두리 모서리 둥글기
        borderRadius: 20,
        padding: 14,
        elevation: 2,
    },
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
