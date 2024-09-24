import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { globalStyles } from '../../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');
const rem = width / 375;  // Base width of iPhone 11 is 375

const ResultScreen = () => {
    const router = useRouter();
    const [feedbackTop, setFeedbackTop] = useState('');  
    const [feedbackBottom, setFeedbackBottom] = useState(''); 

    const deleteData = async () => {
        if (feedbackTop === '') {
            try {
                const threadId = await AsyncStorage.getItem("thread");
                await axios.delete(
                    `http://52.79.202.25:5001/sst/threads/${threadId}`, {
                        headers: {
                          access_token: await AsyncStorage.getItem("accessToken"),
                        },
                    }
                );
                await fetchData();
            } catch (error) {
                console.error('피드백 가져오기 실패:', error);
                deleteData();
            }
        }
    };

    const fetchData = async () => {
        try {
            const threadId = await AsyncStorage.getItem("thread");
            const response = await axios.get(
                `http://52.79.202.25:5001/sst/threads/${threadId}`, {
                    headers: {
                      access_token: await AsyncStorage.getItem("accessToken"),
                    },
                }
            );
            setFeedbackTop(response.data.feedBack);   
        } catch (error) {
            console.error('피드백 가져오기 실패:', error);
            fetchData();
        }
    };

    const handleSubmit = () => {
        router.push('/child/training/point'); 
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={globalStyles.subtitle}>결과</Text>
                <Text style={globalStyles.description}>7월 17일 결과에요</Text>
            </View>
            
            <TouchableOpacity style={styles.messageBox} onPress={deleteData}>
                <SafeAreaView style={styles.scrollView}>
                    <ScrollView>
                        <Text style={styles.messageText}>{feedbackTop || '터치하면 피드백을 볼 수 있어요.'}</Text>
                    </ScrollView>
                </SafeAreaView>
            </TouchableOpacity>

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
        backgroundColor: '#FFFFFF',
    },
    header: {
        alignItems: 'center',
        marginBottom: -10 * rem,
        marginTop: 50,
    },
    messageBox: {
        width: "85%",
        height: 400 * rem, 
        backgroundColor: '#F9F9F9',
        borderRadius: 10 * rem,
        padding: 15 * rem,
        marginTop: 30 * rem,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    scrollView: {
        width: "90%",
        height: "90%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageText: {
        color: '#565656',
        fontSize: 17 * rem,
        fontWeight: '500',
        textAlign: 'center',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20 * rem,
    },
    footerText: {
        color: '#909090',
        fontSize: 16 * rem,
        textAlign: 'center',
    },
    submitButton: {
        width: '80%',
        height: 50 * rem,
        backgroundColor: '#5772FF',
        borderRadius: 8 * rem,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15 rem',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: '17 rem', // ''를 쓰면 에러가 나지 않음. 하지만 그렇지 않다면 에러가 뜸.
        fontWeight: '600',
    },
});

export default ResultScreen;
