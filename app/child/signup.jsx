import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../styles/global';
import Button  from '../../components/Button';
import axios from 'axios';

export default function SignUp() {
    const { width, height } = useWindowDimensions();
    const [gender, setSelectedGender] = useState('남자');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [userId, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const inputWidth = width > 400 ? '80%' : '90%';

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
            const response = await axios.post('https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/signup/child', {
                name,
                age: parseInt(age, 10),
                phoneNum: phoneNumber,
                gender,
                userId,
                password,
                point: 0
            },{
                withCredentials: true 
            });
            
            console.log("회원가입 성공");
            router.push('/child/signin');
        } catch (error) {
            console.error("회원가입 중 오류 발생:", error.response?.data?.message || error.message);
            alert("오류 : " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <View style={[globalStyles.container, { backgroundColor: '#F3F4F6' }]}>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ paddingBottom: 40 }}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.subtitle}>회원가입</Text>
                    <Text style={globalStyles.description}>서비스에서 사용될 정보를 알려주세요.</Text>
                </View>

                <View style={globalStyles.formGroup}>
                    <Text style={globalStyles.label}>전화 번호를 알려주세요.</Text>
                    <TextInput
                        style={[globalStyles.input, { width: inputWidth }]}
                        placeholder="예시) 010-1234-5678"
                        value={phoneNumber}
                        onChangeText={formatPhoneNumber}
                        keyboardType="numeric"
                    />
                </View>

                <View style={globalStyles.formGroup}>
                    <Text style={globalStyles.label}>나이를 알려주세요.</Text>
                    <TextInput
                        style={[globalStyles.input, { width: inputWidth }]}
                        placeholder="예시) 12"
                        value={age}
                        onChangeText={setAge}
                        keyboardType="numeric"
                    />
                </View>

                <View style={globalStyles.formGroup}>
                    <Text style={globalStyles.label}>이름을 알려주세요.</Text>
                    <TextInput
                        style={[globalStyles.input, { width: inputWidth }]}
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
                        style={[globalStyles.input, { width: inputWidth }]}
                        placeholder="ex) boundary_baby"
                        value={userId}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={globalStyles.formGroup}>
                    <Text style={globalStyles.label}>사용할 비밀번호를 입력하세요.</Text>
                    <TextInput
                        style={[globalStyles.input, { width: inputWidth }]}
                        placeholder="ex) qwer!1234"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <View style={{ marginBottom: 140 }}>
                    <Button onPress={handleClick} title={"회원가입"} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    genderContainer: {
        flexDirection: 'row',
        marginLeft: 16,
        gap: 5,
    },
    genderOption: {
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 20,
        paddingVertical: 9,
        paddingHorizontal: 20,
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
        fontSize: 16,
    },
    selectedText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '550',
    },
});
