import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const App = () => {
    const [selectedSession, setSelectedSession] = useState(null);
    const [situations, setSituations] = useState([]);
    const [loading, setLoading] = useState(true); 
    const navigation = useNavigation();

    useEffect(() => {
        const fetchSituations = async () => {
            try {
                const response = await axios.get('http://boundary.main.oyunchan.com:5001/situations');
                setSituations(response.data);
            } catch (error) {
                console.error('Failed to fetch situations:', error);
            } finally {
                setLoading(false); 
            }
        };
        fetchSituations();
    }, []);

    const handleSessionPress = (index) => {
        setSelectedSession(index);
    };

    const handleNextButtonPress = () => {
        navigation.navigate('child/training/resolve'); 
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#5772FF" />
                <Text>상황을 불러오는 중...</Text>
            </View>
        );
    }

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

                {situations.map((situation, index) => (
                    <TouchableOpacity
                        key={situation.situationId}
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
                            <Text style={styles.buttonTitle}>{situation.content}</Text>
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        fontWeight: "900",
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
