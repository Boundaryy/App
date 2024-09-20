import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { globalStyles } from '../../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultScreen = () => {
    const router = useRouter();
    const [feedbackTop, setFeedbackTop] = useState('');  
    const [feedbackBottom, setFeedbackBottom] = useState(''); 

    const deleteData = async () => {
        if (feedbackTop == ''){
            try {
                console.log("deleteData")
                const threadId = await AsyncStorage.getItem("thread");
                const response = await axios.delete(
                    `http://52.79.202.25:5001/sst/threads/${threadId}` ,{
                        headers: {
                          access_token:AsyncStorage.getItem("accessToken"),
                        },
                      }
                );
                console.log("deleteData2")
                await fetchData();
            } catch (error) {
                console.error('피드백 가져오기 실패:', error);
                deleteData();
            }
        }
    }

    const fetchData = async () => {
        try {
            console.log("fetchData")
            const threadId = await AsyncStorage.getItem("thread");
            const response = await axios.get(
                `http://52.79.202.25:5001/sst/threads/${threadId}`,{
                    headers: {
                      access_token:AsyncStorage.getItem("accessToken"),
                    },
                  } 
            );
            console.log("fetchData2")
            setFeedbackTop(response.data.feedBack);   
        } catch (error) {
            console.error('피드백 가져오기 실패:', error);
            fetchData();
        }
    }

    const handleSubmit = async () => {
        router.push('/child/training/point'); 
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.subtitle}>결과</Text>
                <Text style={globalStyles.description}>7월 17일 결과에요</Text>
            </View>
            
            <TouchableOpacity style={styles.messageBox}  onPress={() => deleteData()}>
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
        width: "85%",
        height: "70%",
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 16,
        marginTop: 110,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    scrollView: {
        width: "90%",
        height: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    messageText: {
        color: '#565656',
        fontSize: 18,
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
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
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
