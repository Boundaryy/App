import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { width, height } = useWindowDimensions();


    useEffect(() => {
        const checkInternetConnection = async () => {
            try {
                const response = await axios.head('https://www.google.com');
                alert(response.status === 200);
                return response.status === 200;
            } catch (error) {
                alert(error.message);
                return false;
            }
        };
        checkInternetConnection();
    }, []);

    const handleSubmit = async () => {
        if (!username || !password) {
            alert("빈칸없이 작성해주세요");
        } else {
            try {
                const response = await fetch(`https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/login`, {
                    method: 'POST',
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: username,
                        password: password,
                    }),
                });

                if (!response.ok) {
                    throw new Error('로그인 실패');
                }

                const data = await response.json();
                const accessToken = data.tokens.accessToken;
                const refreshToken = data.tokens.refreshToken;

                await AsyncStorage.setItem("accessToken", accessToken);
                await AsyncStorage.setItem("refreshToken", refreshToken);

                const userResponse = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
                    headers: {
                        'access_token': accessToken
                    }
                });

                if (!userResponse.ok) {
                    throw new Error('사용자 정보 가져오기 실패');
                }

                router.push('/child/home');
            } catch (error) {
                console.error("로그인 중 오류 발생:", error.message);
                alert("오류 : " + error.message);
            }
        }
    };

    const handleSignup = () => {
        router.push('/child/signup');
    };

    const inputWidth = width > 400 ? '80%' : '90%';
    const buttonWidth = width > 400 ? '80%' : '90%';
    const buttonMarginTop = height > 700 ? 20 : 10;
    const fontSize = width > 400 ? 20 : 16;

    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Boundary</Text>
                <Text style={globalStyles.subtitle}>로그인</Text>
                <Text style={globalStyles.description}>로그인 정보를 입력해주세요</Text>
            </View>
            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>아이디를 입력하세요.</Text>
                <TextInput
                    style={[globalStyles.input, { width: inputWidth }]} 
                    placeholder="예시) boundary_baby"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>비밀번호를 입력하세요.</Text>
                <TextInput
                    style={[globalStyles.input, { width: inputWidth }] }
                    placeholder="예시) qwer!1234"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.submitButton, { width: buttonWidth, marginTop: buttonMarginTop }]} 
                    onPress={handleSubmit}
                >
                    <Text style={[styles.submitButtonText, { fontSize }]}>로그인</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignup}>
                    <Text style={styles.signupLink}>아직 회원가입을 하지 않았다면?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    submitButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#5772FF',
        borderRadius: 8,
        height: 50,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
    signupLink: {
        color: '#565656',
        fontSize: 16,
        fontWeight: '200',
        marginTop: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%',
    },
});

export default LoginScreen;
