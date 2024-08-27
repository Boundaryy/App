import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global'
import { Button } from '../../components/Button';

export default function SignUp() {
    const [selectedGender, setSelectedGender] = useState('남자');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigation = useNavigation();

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
    };

    const handleKeyDown = (event, gender) => {
        if (event.nativeEvent.key === 'Enter' || event.nativeEvent.key === ' ') {
            handleGenderClick(gender);
        }
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

    const handleSubmit = () => {
        const formData = {
            phoneNumber,
            age,
            name,
            selectedGender,
            username,
            password
        };
        console.log('입력된 데이터:', formData);

        navigation.navigate('ChildHome');
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Boundary</Text>
                <Text style={globalStyles.subtitle}>회원가입</Text>
                <Text style={globalStyles.description}>서비스에서 사용될 정보를 알려주세요.</Text>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>전화 번호를 알려주세요.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="010-1234-5678"
                    value={phoneNumber}
                    onChangeText={formatPhoneNumber}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>나이를 알려주세요.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="18세"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>이름을 알려주세요.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ex) 김바운"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>성별을 선택해주세요.</Text>
                <View style={styles.genderContainer}>
                    <TouchableOpacity
                        style={[styles.genderOption, selectedGender === '남자' && styles.selectedGender]}
                        onPress={() => handleGenderClick('남자')}
                        onKeyPress={(e) => handleKeyDown(e, '남자')}
                    >
                        <Text style={selectedGender === '남자' ? styles.selectedText : styles.text}>남자</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.genderOption, selectedGender === '여자' && styles.selectedGender]}
                        onPress={() => handleGenderClick('여자')}
                        onKeyPress={(e) => handleKeyDown(e, '여자')}
                    >
                        <Text style={selectedGender === '여자' ? styles.selectedText : styles.text}>여자</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>사용할 아이디를 입력하세요.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ex) boundary_baby"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>사용할 비밀번호를 입력하세요.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ex) qwer!1234"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <Button toLink={"/child/signin"} title={"회원가입"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#5772FF',
        fontSize: 20,
        paddingVertical: 5,
        color: '#5772FF',
    },
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
    genderOptionRight: {
        marginRight: 20,  // 오른쪽 버튼을 왼쪽으로 50만큼 이동
    },
    button: {
        backgroundColor: '#5772FF',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
