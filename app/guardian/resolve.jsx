import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { globalStyles } from '../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';

const { width, height } = Dimensions.get('window');
const rem = width / 375; 

const ResultScreen = () => {
    const router = useRouter();
    const [feedbackTop, setFeedbackTop] = useState('');  
    const [feedbackBottom, setFeedbackBottom] = useState(''); 

    const deleteData = async () => {
        if (feedbackTop === '') {
            try {
                const threadId = await AsyncStorage.getItem("thread");
                const accessToken = await AsyncStorage.getItem("accessToken");
                await axios.delete(
                    `https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/sst/threads/${threadId}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
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
                `https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/sst/threads/${threadId}`, {
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
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, { fontFamily: 'Pretendard' }]}>결과</Text>
                <Text style={[globalStyles.description, { fontFamily: 'Pretendard' }]}>상황 대처 학습 결과를 확인해봐요.</Text>
            </View>
            
            <TouchableOpacity style={styles.messageBox} onPress={deleteData}>
                <SafeAreaView style={styles.scrollView}>
                    <View style={styles.scrollViewContent}>
                        <Text style={[styles.messageText, { fontFamily: 'Pretendard', textAlign: 'center' }]}>
                            {feedbackTop || '터치하면 피드백을 볼 수 있어요.'}
                        </Text>
                    </View>
                </SafeAreaView>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={[styles.footerText, { fontFamily: 'Pretendard' }]}>테스트에서{'\n'}희성이를 걱정하는 말을 해주셔야 해요.</Text>
                <View style={styles.buttonContainer}>
          <Button title="확인" onPress={() => router.push('/child/training/point')} />
        </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        alignItems: 'center',
        marginBottom: -10 * rem,
        marginTop: 50,
    },
    messageBox: {
        width: 300,
        height: 400, 
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginTop: 30,
        justifyContent: 'center',
        marginLeft: 46,
    },
    scrollView: {
        width: "90%",
        height: "90%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageText: {
        color: '#565656',
        fontSize: 17 * rem,
        fontWeight: '500',
        textAlign: 'center',
        marginLeft: 20,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
    },
    footerText: {
        color: '#909090',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ResultScreen;
