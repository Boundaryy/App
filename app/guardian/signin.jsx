import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../styles/global';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async () => {
        if (!username || !password) {
            alert("빈칸없이 작성해주세요");
        } else {
            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                    userId: username,
                    password: password,
                });

                if (response.data.success) {
                    console.log("로그인 성공");  
                    router.push('/child/home');
                } else {
                    console.log("로그인 실패");
                    Alert.alert("로그인 실패", "아이디 또는 비밀번호를 확인하세요.");
                }
            } catch (error) {
                console.error("로그인 중 오류 발생:", error);
                Alert.alert("오류", "서버와의 연결이 원활하지 않습니다.");
            }
        }
    };

    const handleSignup = () => {
        router.push('/child/signup');
    };

    return (
        <View style={globalStyles.logincontainer}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.title}>Boundary</Text>
                    <Text style={globalStyles.subtitle}>로그인</Text>
                    <Text style={globalStyles.description}>로그인 정보를 입력해주세요</Text>
                </View>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>아이디를 입력하세요.</Text>
                <TextInput
                    style={globalStyles.input}

                    placeholder="예시) boundary_baby"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>비밀번호를 입력하세요.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="예시) qwer!1234"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.signupLink}>아직 회원가입을 하지 않았다면?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingLeft: 50,
    },
    header: {
        marginBottom: 20,
        paddingTop: 60,
    },
    headerTitle: {
        color: '#5772FF',
        fontSize: 18,
        fontWeight: '700',
    },
    headerSubtitle: {
        fontSize: 28,
        fontWeight: '700',
        marginVertical: 10,
    },
    formGroup: {
        marginBottom: 40,
    },
    label: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 8,
    },
    input: {
        width: '270px',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#5772FF',
        fontSize: 18,
        color: '#5772FF',
    },
    submitButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#5772FF',
        borderRadius: 8,
        width: 310,
        height: 50,
        marginTop: 150,
    },
    submitButtonText: {
        position: "absolute",
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
    },
    signupLink: {
        color: '#565656',
        fontSize: 16,
        fontWeight: '200',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default LoginScreen;
