import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/global';
import Button from '../../../components/Button';

const App = () => {
    const handleLoginClick = () => {
        // 여기서 네비게이션을 통해 다른 화면으로 이동
        // 예: navigation.navigate('TrainingResolve');
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.subtitle}>상황 대처 예시</Text>
            <Image source={require('../../../assets/images/explain.png')} style={styles.emoji} />
            <Text style={styles.description}>
                시작하면 상황이 제시됩니다. {'\n'}상황에 맞춰 내가 친구에게 해야할 {'\n'}적절한 말을 해봅시다
            </Text>
            <Button toLink={"/child/training/resolve"} title={"시작하기"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    emoji: {
        width: 335,
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
