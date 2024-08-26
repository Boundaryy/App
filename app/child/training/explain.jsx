import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const handleLoginClick = () => {
        // 여기서 네비게이션을 통해 다른 화면으로 이동
        // 예: navigation.navigate('TrainingResolve');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>상황 대처 학습</Text>
            {/* <Image source={require('./conv-image.svg')} style={styles.emoji} /> */}
            <Text style={styles.description}>
                시작하면 상황이 제시됩니다. {'\n'}상황에 맞춰 내가 친구에게 해야할 {'\n'}적절한 말을 해봅시다
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleLoginClick}>
                <Text style={styles.buttonText}>시작하기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    emoji: {
        width: 300,
        height: 150,
        marginVertical: 160,
    },
    description: {
        color: '#565656',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 8,
        marginTop: 20,
    },
    button: {
        width: 310,
        height: 50,
        backgroundColor: '#5772FF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default App;
