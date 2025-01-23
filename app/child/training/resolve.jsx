import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/global';

const App = () => {
    const [chatMessages, setChatMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [chatName, setChatName] = useState('');
    const [chatCount, setChatCount] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const names = ['희성', '규민', '윤찬', '태영'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        setChatName(randomName);

        const initialMessage = {
            id: `${Date.now()}-response`,
            sender: 'response',
            message: `안녕! 나는 ${randomName}이야. 어떻게 도와줄까?`,
        };
        setChatMessages([initialMessage]);
    }, []);

    const handleSend = () => {
        if (inputText.trim() && !showButtons) {
            const newMessage = {
                id: `${Date.now()}-user`,
                sender: 'user',
                message: inputText.trim(),
            };

            setChatMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText('');

            setChatCount((prevCount) => {
                const newCount = prevCount + 1;

                if (newCount % 3 === 0) {
                    setShowButtons(true);
                    return newCount;
                }

                setTimeout(() => {
                    const autoResponse = {
                        id: `${Date.now()}-response`,
                        sender: 'response',
                        message: `${chatName}가 알겠어! 푹 쉬고 힘내!`,
                    };
                    setChatMessages((prevMessages) => [...prevMessages, autoResponse]);
                }, 1000);

                return newCount;
            });
        }
    };

    const handleKeyPress = (event) => {
        if (event.nativeEvent.key === 'Enter') {
            handleSend();
        }
    };

    const handleStop = () => {
        router.push('/child/training/resultcontent');
    };

    const handleContinue = () => {
        setShowButtons(false);
        const autoResponse = {
            id: `${Date.now()}-response`,
            sender: 'response',
            message: `${chatName}가 알겠어! 푹 쉬고 힘내!`,
        };
        setChatMessages((prevMessages) => [...prevMessages, autoResponse]);
    };

    const renderChatBubble = ({ item }) => {
        const isUser = item.sender === 'user';
        return (
            <View
                style={[
                    styles.chatBubbleContainer,
                    isUser ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' },
                ]}
            >
                <View
                    style={[
                        styles.chatBubble,
                        isUser ? styles.userBubble : styles.responseBubble,
                        isUser ? styles.userBubbleRadius : styles.responseBubbleRadius,
                    ]}
                >
                    <Text style={[styles.chatText, isUser && styles.userText]}>{item.message}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, styles.text]}>상황 대처 학습</Text>
                <Text style={[globalStyles.description]}>{`${chatName}이와 대화해요.`}</Text>
            </View>

            <FlatList
                data={chatMessages}
                renderItem={renderChatBubble}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.chatContainer}
                style={{ marginBottom: 80 }}
            />

            {showButtons && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
                        <Text style={styles.stopButtonText}>그만하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                        <Text style={styles.continueButtonText}>계속하기</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.textInput, { outlineStyle: 'none' }]}
                    placeholder="여기에 답변을 입력하세요."
                    value={inputText}
                    onChangeText={setInputText}
                    onKeyPress={handleKeyPress}
                    editable={!showButtons} // 입력창 비활성화
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton} disabled={showButtons}>
                    <Image
                        source={require('../../../assets/image.png')}
                        style={styles.sendImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    chatContainer: {
        paddingVertical: 10,
    },
    chatBubbleContainer: {
        maxWidth: '80%',
        marginVertical: 8,
        marginHorizontal: 20,
    },
    chatBubble: {
        padding: 12,
        borderRadius: 15,
        paddingHorizontal: 20,
    },
    userBubble: {
        backgroundColor: '#5772FF',
    },
    responseBubble: {
        backgroundColor: '#FFFFFF',
    },
    userBubbleRadius: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    responseBubbleRadius: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 25,
    },
    chatText: {
        fontSize: 16,
        color: '#505050',
        fontFamily: 'Pretendard',
        fontWeight: '400',
    },
    userText: {
        color: '#FFFFFF',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 90,
        left: 10,
        right: 10,
    },
    stopButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 21,
        width: 150,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#5772FF',
    },
    continueButton: {
        backgroundColor: '#5772FF',
        borderRadius: 21,
        width: 150,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stopButtonText: {
        color: '#5772FF',
        fontSize: 16,
        fontWeight: '600',
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    inputContainer: {
        position: 'absolute',
        bottom: 30,
        left: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 48,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 4 },
        shadowOpacity: 0.13,
        shadowRadius: 20,
        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'Pretendard',
        color: '#A1A1A1 ',
        marginLeft: 10,
    },
    sendButton: {
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendImage: {
        width: 24,
        height: 24,
        marginRight: -20,
    },
    text: {
        fontFamily: 'Pretendard',
    },
});

export default App;
