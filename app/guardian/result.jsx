import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

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
        summary: "잘했어요 (10 문제중 9개 정답)",
    }
];

const LearningResults = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>학습 결과</Text>
                <Text style={styles.subtitle}>최근 학습 결과를 확인해보세요.</Text>
            </View>
            {results.map((result, index) => (
                <TouchableOpacity key={index} style={styles.resultItem}>
                    {/* <Image source={require('./assets/Good.png')} style={styles.resultImage} /> */}
                    <View style={[styles.resultIcon, result.status === 'correct' ? styles.correct : styles.incorrect]} />
                    <View style={styles.resultContent}>
                        <Text style={styles.resultTitle}>{result.title}</Text>
                        <Text style={styles.resultDate}>{result.date} 상황 대처 학습 결과</Text>
                        <Text style={styles.resultSummary}>{result.summary}</Text>
                    </View>
                    <Text style={styles.resultLink}>{'>'}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        marginBottom: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
    },
    subtitle: {
        color: '#898989',
        fontSize: 14,
        marginVertical: 8,
        fontWeight: '200',
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    resultImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    resultIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    correct: {
        backgroundColor: 'transparent', // 여기에 체크 아이콘을 추가할 수 있습니다.
        // backgroundImage: 'url(/check-circle.svg)', // 리액트 네이티브에서는 이미지 사용 방식이 다릅니다.
    },
    incorrect: {
        backgroundColor: 'transparent', // 여기에 엑스 아이콘을 추가할 수 있습니다.
    },
    resultContent: {
        flexGrow: 1,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    resultDate: {
        fontSize: 14,
        color: '#5772FF',
        marginTop: 4,
    },
    resultSummary: {
        fontSize: 14,
        color: '#4CAF50',
        marginTop: 4,
    },
    resultLink: {
        fontSize: 16,
        color: '#CCC',
    },
});

export default LearningResults;
