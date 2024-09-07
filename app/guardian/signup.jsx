import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { useRouter } from 'expo-router';

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
            // try {
            //     axios({
            //         url:"https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/login",
            //         method:"post",
            //         data : {
            //             "name": name,
            //             "age": age,
            //             "phoneNum": phoneNumber,
            //             "gender": selectedGender,
            //             "userId": username,
            //             "password": username,
            //             "role": "Child",
            //             "point": 0
            //         }
            //     })
            // }
            // catch {
            //     alert("백엔드 에러")
            // }
            route.push('/guardian/signin')
        }
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Boundary</Text>
                    <Text style={styles.headerSubtitle}>회원가입</Text>
                    <Text style={styles.headerDescription}>서비스에서 사용될 정보를 알려주세요.</Text>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>전화 번호를 알려주세요.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="예시) 010-1234-5678"
                        value={phoneNumber}
                        onChangeText={formatPhoneNumber}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>사용할 아이디를 입력하세요.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="예시) wbhaao"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>사용할 비밀번호를 입력하세요.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="예시) qwer!1234"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>아이의 아이디를 입력하세요.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="예시) gyumingim"
                        value={childUsername}
                        onChangeText={setChildUsername}
                    />
                </View>

                <Button title={"회원가입"} onPress={handleClick}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
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
    headerDescription: {
        color: '#565656',
        fontSize: 14,
    },
    label: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 5,
    },
    input: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#5772FF',
        fontSize: 18,
        color: '#5772FF',
        marginBottom: 20,
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
