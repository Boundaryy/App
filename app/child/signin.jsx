import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSubmit = () => {
        const formData = {
            username,
            password
        };
        console.log('입력된 데이터:', formData);

        // 로그인 버튼을 누르면 child/home으로 이동하도록 변경
        navigation.navigate('child/home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Boundary</Text>
                <Text style={styles.headerSubtitle}>로그인</Text>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>아이디를 입력하세요.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="boundary_baby"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>비밀번호를 입력하세요.</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('child/signup')}>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5772FF',
        borderRadius: 8,
        width: 310,
        height: 50,
        marginTop: 150,
    },
    submitButtonText: {
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
