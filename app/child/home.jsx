import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const App = () => {
    const handleSituationTrainingClick = () => {
        // 네비게이션을 통해 상황 대처 학습 화면으로 이동
        // 예: navigation.navigate('SituationTraining');
    };

    const handleCognitionTrainingClick = () => {
        // 네비게이션을 통해 코그니션 트레이닝 화면으로 이동
        // 예: navigation.navigate('CognitionTraining');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>어렵지 않은 학습</Text>
                <Text style={styles.headerSubtitle}>
                    상황 대처, 게임을 통한 학습으로 지능을 향상시켜요
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSituationTrainingClick}>
                    <Text style={styles.buttonText}>상황 대처 학습</Text>
                    <Text style={styles.buttonExplain}>게임을 통한 학습능력 상승</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleCognitionTrainingClick}>
                    <Text style={styles.buttonText}>코그니션 트레이닝</Text>
                    <Text style={styles.buttonExplain}>게임으로 트레이닝을 진행해요!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>꾸준히 함께해봐요</Text>
                <Text style={styles.headerSubtitle}>
                    상황 대처, 게임을 통한 학습으로 지능을 향상시켜요
                </Text>
            </View>
            <Calendar style={styles.calendar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginVertical: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#565656',
    },
    buttonContainer: {
        flexDirection: 'column',
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
