import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../styles/global';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignupScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [childUsername, setChildUsername] = useState('');
    const route = useRouter();

    const createTwoButtonAlert = () => {
        alert("빈칸없이 작성해주세요!")
    };
    
    const formatPhoneNumber = (text) => {
        let input = text.replace(/\D/g, '');
        if (input.length > 3 && input.length <= 7) {
            input = input.replace(/(\d{3})(\d{1,4})/, '$1-$2');
        } else if (input.length > 7) {
            input = input.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
        }
        setPhoneNumber(input);
    };

    const handleClick = () => {
        if (!phoneNumber || !childUsername || !username || !password){
            createTwoButtonAlert()
        }
        else {
            try {
                 axios({
                     url:`http://52.79.202.25:5001/signup/parent`,
                     method:"post",
                     data : {
                         "phoneNum": phoneNumber,
                         "childId": childUsername,
                         "userId": username,
                         "password": password,
                     }
                 })
             }
             catch (error) {
                 alert(error+"백엔드 에러")
             }
            route.push('/guardian/signin')
        }
    }

    return (
            <View style={globalStyles.container}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.title}>Boundary</Text>
                    <Text style={globalStyles.subtitle}>회원가입</Text>
                    <Text style={globalStyles.description}>회원가입 정보를 입력해주세요</Text>
                </View>
                <View style={globalStyles.formGroup}>
                    <Text style={globalStyles.label}>전화 번호를 알려주세요.</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="예시) 010-1234-5678"
                        value={phoneNumber}
                        onChangeText={formatPhoneNumber}
                        keyboardType="numeric"
                    />
                </View>

                <View style={globalStyles.formGroup}>
                    <Text style={globalStyles.label}>사용할 아이디를 입력하세요.</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="예시) wbhaao"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={globalStyles.formGroup}>
                    <Text style={globalStyles.label}>사용할 비밀번호를 입력하세요.</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="예시) qwer!1234"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={globalStyles.formGroup}>
                    <Text style={globalStyles.label}>아이의 아이디를 입력하세요.</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="예시) gyumingim"
                        value={childUsername}
                        onChangeText={setChildUsername}
                    />
                </View>

                <Button title={"회원가입"} onPress={handleClick}></Button>
                </View>
    );
};

const styles = StyleSheet.create({
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
    headerDescription: {
        color: '#565656',
        fontSize: 14,
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5772FF',
        borderRadius: 8,
        height: 50,
        marginTop: 40,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
    },
});

export default SignupScreen;
