import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { globalStyles } from '../../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

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
        padding: width * 0.05,
        paddingTop: height * 0.1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    messageBox: {
        width: "85%",
        height: height * 0.5, 
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: width * 0.04,
        marginTop: height * 0.05,
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
        fontSize: width * 0.045,
        fontWeight: '500',
        textAlign: 'center',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    footerText: {
        color: '#909090',
        fontSize: width * 0.04,
        textAlign: 'center',
    },
    submitButton: {
        width: '80%',
        height: height * 0.06,
        backgroundColor: '#5772FF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: width * 0.045,
        fontWeight: '600',
    },
});

export default ResultScreen;
