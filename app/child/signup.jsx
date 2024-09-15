import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../styles/global';
import { Button } from '../../components/Button';
import axios from 'axios';

export default function SignUp() {
    const [gender, setSelectedGender] = useState('남자');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [userId, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const createTwoButtonAlert = () => {
        Alert.alert("빈칸없이 작성해주세요!");
    };

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
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

    const handleClick = async () => {
        if (!name || !age || !phoneNumber || !gender || !userId || !password) {
            createTwoButtonAlert();
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup/child`, {
                name,
                age: parseInt(age, 10),
                phoneNum: phoneNumber,
                gender,
                userId,
                password,
                point: 0
            });
            console.log("회원가입 성공");
            Alert.alert("회원가입 성공", "로그인 페이지로 이동합니다.");
            router.push('/child/signin');
        } catch (error) {
            console.error("회원가입 중 오류 발생:", error.response?.data || error.message);
            Alert.alert("회원가입 오류", error.response?.data?.message || "다시 시도해 주세요.");
        }
    };

    return (
        <View style={globalStyles.logincontainer}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Boundary</Text>
                <Text style={globalStyles.subtitle}>회원가입</Text>
                <Text style={globalStyles.description}>서비스에서 사용될 정보를 알려주세요.</Text>
            </View>

            <SafeAreaView style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>전화 번호를 알려주세요.</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder="예시) 010-1234-5678"
                    value={phoneNumber}
                    onChangeText={formatPhoneNumber}
                    keyboardType="numeric"
                />
            </SafeAreaView>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>만 나이를 알려주세요.</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder="예시) 12"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                />
            </View>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>이름을 알려주세요.</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder="예시) 김바운"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>성별을 선택해주세요.</Text>
                <View style={styles.genderContainer}>
                    <TouchableOpacity
                        style={[styles.genderOption, gender === '남자' && styles.selectedGender]}
                        onPress={() => handleGenderClick('남자')}
                    >
                        <Text style={gender === '남자' ? styles.selectedText : styles.text}>남자</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.genderOption, gender === '여자' && styles.selectedGender]}
                        onPress={() => handleGenderClick('여자')}
                    >
                        <Text style={gender === '여자' ? styles.selectedText : styles.text}>여자</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>사용할 아이디를 입력하세요.</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder="ex) boundary_baby"
                    value={userId}
                    onChangeText={setUsername}
                />
            </View>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>사용할 비밀번호를 입력하세요.</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder="ex) qwer!1234"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <Button onPress={handleClick} title={"회원가입"} />
        </View>
    );
}

const styles = StyleSheet.create({
    genderContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    genderOption: {
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 20,
        padding: 10,
        minWidth: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedGender: {
        backgroundColor: '#5772FF',
        borderColor: '#5772FF',
    },
    text: {
        color: '#808080',
    },
    selectedText: {
        color: '#fff',
    },
});
