import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const ResultScreen = () => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log('완료 버튼이 클릭되었습니다.');
        router.push('/guardian/result'); 
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>결과</Text>
                <Text style={styles.headerDate}>7월 17일 결과에요</Text>
            </View>

            <View style={styles.messageBox}>
                <Text style={styles.messageText}>희성아, 빨리 나아서 학교에서 보자.</Text>
                <Text style={styles.messageText}>희성아, 많이 <Text style={styles.highlight}>아프질 않길</Text> 바래 폭쉬어</Text>
                <Text style={styles.messageText}>희성아, 필요할게 있으면 언제든 말해</Text>
            </View>

            <View style={styles.imageContainer}>
            </View>

            <View style={styles.suggestions}>
                <Text style={styles.suggestionText}>희성아, 빨리 나아서 학교에서 보자.</Text>
                <Text style={styles.suggestionText}>희성아, 많이 <Text style={styles.highlight}>아프질 않길</Text> 바래 폭쉬어</Text>
                <Text style={styles.suggestionText}>희성아, 필요할게 있으면 언제든 말해</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>테스트에서{'\n'}희성이를 걱정하는 말을 해주셔야 해요.</Text>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>완료</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerDate: {
        fontSize: 16,
        color: '#909090',
    },
    messageBox: {
        width: 294,
        height: 177,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    messageText: {
        color: '#565656',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    highlight: {
        color: '#5772FF',
    },
    imageContainer: {
        width: 60,
        height: 60,
        position: 'relative',
        top: -50,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    suggestions: {
        width: 294,
        height: 177,
        backgroundColor: '#ECF7FF',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    suggestionText: {
        color: '#565656',
        fontSize: 16,
        marginBottom: 8,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        color: '#909090',
        fontSize: 16,
        textAlign: 'center',
    },
    submitButton: {
        width: 310,
        height: 50,
        backgroundColor: '#5772FF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default ResultScreen;
