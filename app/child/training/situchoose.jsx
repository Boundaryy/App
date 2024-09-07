import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useNavigation } from '@react-navigation/native';

const App = () => {
    const [selectedSession, setSelectedSession] = useState(null);
    const navigation = useNavigation();

    const handleSessionPress = (index) => {
        setSelectedSession(index);
    };

    const handleNextButtonPress = () => {
        navigation.navigate('child/training/resolve'); 
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backText}>뒤로가기</Text>
                </TouchableOpacity>
                <Text style={globalStyles.subtitle}>상황 선택하기</Text>
                <Text style={globalStyles.description}>
                    AI와 부모님이 만들어 준 상황을 선택해보세요.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.session,
                        selectedSession === 0 && styles.selectedSession
                    ]}
                    onPress={() => handleSessionPress(0)}
                >
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Family%20Man%2C%20Woman%2C%20Girl%2C%20Boy.png" }}
                        style={styles.buttonImage}
                    />
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonTitle}>친구들이 놀릴 때 대처하기</Text>
                        <Text style={styles.buttonExplain}>부모님픽!</Text>
                    </View>
                </TouchableOpacity>
                
                {['식당에서 주문하기', '전화 통화하기', '친구 위로하기', '상점에서 계산하기'].map((title, index) => (
                    <TouchableOpacity
                        key={index + 1}
                        style={[
                            styles.session,
                            selectedSession === index + 1 && styles.selectedSession
                        ]}
                        onPress={() => handleSessionPress(index + 1)}
                    >
                        <Image
                            source={{ uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" }}
                            style={styles.buttonImage}
                        />
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonTitle}>{title}</Text>
                            <Text style={styles.buttonExplain}>AI 생성</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextButtonPress}>
                <Text style={styles.nextButtonText}>선택하기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    backButton: {
        marginBottom: 10,
    },
    backText: {
        fontSize: 18,
        color: '#808080',
    },
    session: {
        backgroundColor: "#F3F4F6",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 20,
        padding: 14,
        marginBottom: 8,
        borderWidth: 3,
        borderColor: 'transparent', 
    },
    selectedSession: {
        borderColor: '#A5B3FF',
    },
    buttonContainer: {
        flexDirection: 'column',
        width: "85%",
        marginTop: 20,
    },
    buttonImage: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    buttonTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    buttonExplain: {
        color: '#808080',
        fontSize: 16,
    },
    nextButton: {
        backgroundColor: '#5772FF',
        width: 340,
        height: 50,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default App;
