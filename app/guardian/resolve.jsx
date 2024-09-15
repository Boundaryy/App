import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { globalStyles } from '../../styles/global';

const ResultScreen = () => {
    const router = useRouter();
    const [feedbackTop, setFeedbackTop] = useState('');  
    const [feedbackBottom, setFeedbackBottom] = useState(''); 

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/stt/threads/{thredId}` 
                );
                setFeedbackTop(response.data.feedBackTop);   
                setFeedbackBottom(response.data.feedBackBottom); 
            } catch (error) {
                console.error('피드백 가져오기 실패:', error);
            }
        };

        fetchFeedback();
    }, []);

    const handleSubmit = () => {
        router.push('/guardian/result'); 
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.subtitle}>결과</Text>
                <Text style={globalStyles.description}>7월 17일 결과에요</Text>
            </View>

            <View style={styles.messageBox}>
                <Text style={styles.messageText}>{feedbackTop || '값을 가지고 오지 못했어요.'}</Text>
            </View>

            <View style={styles.suggestions}>
                <Text style={styles.suggestionText}>{feedbackBottom || '값을 가지고 오지 못했어요.'}</Text>
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
        paddingTop: 100, 
        backgroundColor: '#FFFFFF',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: -220, 
    },
    headerDate: {
        fontSize: 16,
        color: '#909090',
        marginLeft: -140,  
    },
    messageBox: {
        width: 294,
        height: 177,
        backgroundColor: '#F9F9F9',
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
        marginTop: 40,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default ResultScreen;
