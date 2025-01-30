import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../../styles/global';

const { width } = Dimensions.get('window');

const App = () => {
    const router = useRouter();
    
    const chatMessages = [
        { id: '1', sender: 'user', message: '철수와 영희는 내 친구가 아니니까 인사를 해야한다.' },
        { id: '2', sender: 'response', message: '철수와 영희는 내 친구가 아니니까 인사를 해야한다.' },
    ];

    const handleBackPress = () => {
        router.back();
    };

    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, styles.text]}>오답 풀이</Text>
            </View>
            
            <View style={styles.chatContainer}>
                {chatMessages.map((message) => (
                    <View key={message.id} style={styles.messageWrapper}>
                        <View style={styles.labelContainer}>
                            <Text style={[
                                styles.label,
                                message.sender === 'user' ? styles.userLabel : styles.responseLabel
                            ]}>
                                {message.sender === 'user' ? '내가 선택한 답' : '정답'}
                            </Text>
                        </View>
                        <View style={[
                            styles.messageBubble,
                            message.sender === 'user' ? styles.userBubble : styles.responseBubble
                        ]}>
                            <Text style={styles.messageText}>{message.message}</Text>
                        </View>
                    </View>
                ))}

                <View style={styles.hintContainer}>
                    <Text style={styles.hintIcon}>
                        💡
                    </Text>
                    <Text style={styles.hintText}>
                        친구가 아니더라도 인사하는 것이 예의에요
                    </Text>
                </View>
                <View style={styles.paginationContainerContainer}>
                    <View style={styles.paginationContainer}>
                        <Image 
                            source={require('../../../assets/arrow.png')}
                            style={styles.sendImage1} 
                        />
                        <Text style={styles.paginationText}>3/5</Text>
                        <Image 
                            source={require('../../../assets/arrow.png')}
                            style={styles.sendImage2} 
                        />
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={() => router.push('/next-screen')}
                >
                    <Text style={styles.submitButtonText}>완료하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#FFF',
    },
    background: {
        width: 330,
        height: 640,
        position: 'absolute',
        left: '50%',
        bottom: 40,
        transform: [{ translateX: -165 }],
        overflow: 'hidden',
    },
    backButtonText: {
        fontSize: 24,
        color: '#000',
    },
    headerTitle: {
        textAlign: 'center',
        width: '100%',
        fontFamily: 'Pretendard',
    },
    chatContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    messageWrapper: {
        width: '100%',
        marginBottom: 24,
    },
    labelContainer: {
        marginBottom: 8,
        flexDirection: 'row',
    },
    label: {
        position:"absolute",
        top:-6,
        left:12,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 100,
        fontSize: 16,
        fontWeight: "900",
        fontFamily: 'Pretendard',
    },
    userLabel: {
        backgroundColor: '#ffffff',
        color: '#5772FF',
        border:"solid #5772FF"
    },
    responseLabel: {
        backgroundColor: '#5772FF',
        color: '#FFFFFF',
    },
    messageBubble: {
        zIndex:-1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: "10rem",
        padding: 16,
        border: "solid #5772FF",
        borderRadius: 10,
    },
    userBubble: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EEF1FF',
    },
    responseBubble: {
        backgroundColor: '#FFFFFF',
    },
    messageText: {
        fontWeight: 700,
        textAlign:"center",
        fontSize: 24,
        lineHeight: 36,
        color: '#505050',
        letterSpacing:"-3px",
        color:"black",
        fontFamily: 'Pretendard',
    },
    hintContainer: {
        backgroundColor: '#FFFFFF',
        paddingVertical: "15px",
        paddingHorizontal: "10px",
        borderRadius: 12,
        marginTop: 12,
        marginBottom: 24,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
    },
    hintText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#000000',
        fontFamily: 'Pretendard',
    },
    hintIcon: {
        fontSize: 24,
    },
    paginationContainerContainer: {
        marginVertical: 16,
        width: "100%",
        alignItems: "center",
    },
    paginationContainer: {
        alignItems: 'center',
        flexDirection: "row",
        marginBottom: 24,
        gap: 16,
    },
    paginationText: {
        fontSize: 18,
        fontWeight: 700,
        color: '#000000',
        fontFamily: 'Pretendard',
    },
    sendImage1: {
        width: "13px",
        height: "21px"
    },
    sendImage2: {
        transform: [{ scaleX: -1 }], // 좌우 반전
        width: "13px",
        height: "21px"
    },
    submitButton: {
        width: '100%',
        backgroundColor: '#5772FF',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Pretendard',
    },
});

export default App;