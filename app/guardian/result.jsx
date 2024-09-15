import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios"

const axiosFunction = () => {
    const response = axios.get(`${process.env.REACT_APP_API_URL}/situations`)
}

const results = [
    {
        date: "6월 29일",
        title: "상황 대처 학습",
        status: "correct",
        summary: "잘했어요 (10 문제중 9개 정답)",
    },
    {
        date: "6월 28일",
        title: "상황 대처 학습",
        status: "incorrect",
        summary: "못했어요 (10 문제중 3개 정답)",
    }
];

const LearningResults = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('guardian/resolve'); 
    };

    const handleBackPress = () => {
        console.log('뒤로가기 버튼 누름');  
        navigation.goBack(); 
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                <Text style={styles.backButtonText}>뒤로가기</Text>
            </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.title}>학습 결과</Text>
                    <Text style={styles.subtitle}>최근 학습 결과를 확인해보세요.</Text>
                </View>
            {results.map((result, index) => (
                <TouchableOpacity key={index} style={styles.resultItem} onPress={handlePress}>
                    <Image
                        source={{
                            uri: result.status === 'correct'
                                ? 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cowboy%20Hat%20Face.png'
                                : 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png'
                        }}
                        style={styles.resultIcon}
                    />
                    <View style={styles.resultContent}>
                        <Text style={styles.resultTitle}>{result.title}</Text>
                        <Text style={styles.resultDate}>{result.date} 상황 대처 학습 결과</Text>
                        <Text style={[styles.resultSummary, result.status === 'incorrect' && styles.incorrectSummary]}>
                            {result.summary}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    backButtonText: {
        fontSize: 18,
        color: '#808080',  
        marginTop: 40,
        marginLeft: 30,
    },
    header: {
        marginBottom: 10,
        paddingTop: 0,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#000',
        marginLeft: 28,
        marginTop: 20,
    },
    subtitle: {
        color: '#898989',
        fontSize: 16,
        marginVertical: 8,
        fontWeight: '200',
        marginTop: 0,
        marginLeft: 28,
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    resultIcon: {
        width: 68,
        height: 68,
        marginRight: 20,
        marginLeft: 24,
    },
    resultContent: {
        flexGrow: 1,
    },
    resultTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000000',
        marginLeft: -8,
    },
    resultDate: {
        fontSize: 16,
        color: '#5772FF',
        marginTop: 4,
        marginLeft: -7,
    },
    resultSummary: {
        fontSize: 16,
        color: '#4CAF50', 
        marginTop: 4,
        marginLeft: -7,
    },
    incorrectSummary: {
        color: '#FF0000', 
    },
});

export default LearningResults;
