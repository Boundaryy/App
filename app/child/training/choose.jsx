import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BarButton } from "../../../components/Bar-Button";
import { globalStyles } from '../../../styles/global';
import { useNavigation } from '@react-navigation/native'; 

const App = () => {
    const navigation = useNavigation(); 

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>뒤로가기</Text>
                </TouchableOpacity>
                <Text style={globalStyles.subtitle}>코그니션 트레이닝</Text>
                <Text style={globalStyles.description}>
                    상황 대처, 게임을 통한 학습으로 지능을 향상시켜요
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <BarButton 
                    toLink={"/child/training/memory"} 
                    imgLink={require("../../../assets/images/situation.png")} 
                    title={"메모리 게임"} 
                    explain={"과일이 몇개 있는지 맞춰봐요"}
                />
                <BarButton 
                    toLink={"/child/training/card"} 
                    imgLink={require("../../../assets/images/happyface.png")} 
                    title={"카드 짝맞추기 게임"} 
                    explain={"같은 모양의 카드를 맞춰봐요"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backText: {
        fontSize: 18,
        color: '#808080',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        width: "85%",
        marginTop: -280, 
        marginBottom: 20,
    },
});

export default App;
