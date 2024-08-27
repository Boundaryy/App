import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const results = [
    {
        date: "6월 29일",
        title: "상황 대처 학습",
        status: "correct",
        summary: "잘했어요 (10 문제중 9개 정답)",
        link: "#"
    },
    {
        date: "6월 28일",
        title: "상황 대처 학습",
        status: "incorrect",
        summary: "잘했어요 (10 문제중 9개 정답)",
        link: "#"
    }
];

const LearningResults = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/child/home');
        }, 3000);

        
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>학습 결과</Text>
                <Text style={styles.headerSubtitle}>최근 학습 결과를 확인해보세요.</Text>
            </View>
            {results.map((result, index) => (
                <View key={index} style={styles.resultItem}>
                    <View style={[styles.resultIcon, result.status === 'correct' ? styles.correct : styles.incorrect]} />
                    <View style={styles.resultContent}>
                        <Text style={styles.resultTitle}>{result.title}</Text>
                        <Text style={styles.resultDate}>{result.date} 상황 대처 학습 결과</Text>
                        <Text style={styles.resultSummary}>{result.summary}</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.resultLink}></Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    header: {
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingTop: 60,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
    },
    headerSubtitle: {
        color: '#898989',
        fontSize: 14,
        margin: 8,
        fontWeight: '200',
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    resultIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
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
    correct: {
        backgroundColor: 'url("/check-circle.svg")', 
    },
    incorrect: {
        backgroundColor: 'url("/x-circle.svg")', 
    },
    resultImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});

export default LearningResults;
