import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';

const App = () => {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/guardian/succesadd');
    };

    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, styles.text]}>상황 추가</Text>
                <Text style={[globalStyles.description]}>아이에게 필요한 상황을 추가하세요.</Text>

                <View style={styles.existingSituationsContainer}>
                    <TouchableOpacity style={styles.situationItem}>
                        <Text style={styles.situationText}>싸운 친구에게 사과하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.situationItem}>
                        <Text style={styles.situationText}>설날에 어른들에게 용돈 받은 후</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.situationItem}>
                        <Text style={styles.situationText}>친구와의 시간 약속을 못 지켰을 때</Text>
                    </TouchableOpacity>
                </View>

                {/* 상황 등록하기 */}
                <Text style={styles.sectionTitle}>상황 등록하기</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ex) 친구가 아파서 전화했을 때"
                    placeholderTextColor="#A0A0A0"
                />

                <Button title={"등록하기"} onPress={handleLoginClick} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    description: {
        color: '#565656',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '300',
        marginBottom: -10,
        marginTop: 30,
        fontFamily: 'Pretendard',
    },
    text: {
        fontFamily: 'Pretendard',
    },
    existingSituationsContainer: {
        marginTop: 20,
        marginBottom: 30,
    },
    situationItem: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    situationText: {
        fontSize: 16,
        fontFamily: 'Pretendard',
        color: '#333333',
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'Pretendard',
        marginBottom: 10,
        color: '#333333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        fontFamily: 'Pretendard',
        marginBottom: 20,
    },
});

export default App;
