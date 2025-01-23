import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/global';

const App = () => {
    const [chatMessages, setChatMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const initialMessage = {
            id: `${Date.now()}-response`,
            sender: 'response',
            message: '안녕! 어떻게 도와줄까?',
        };
        setChatMessages([initialMessage]);
    }, []);

    const handleSend = () => {
        if (inputText.trim()) {
            const newMessage = {
                id: `${Date.now()}-user`,
                sender: 'user',
                message: inputText.trim(),
            };

            setChatMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText('');

            setTimeout(() => {
                const autoResponse = {
                    id: `${Date.now()}-response`,
                    sender: 'response',
                    message: '알겠어! 푹 쉬고 힘내!',
                };
                setChatMessages((prevMessages) => [...prevMessages, autoResponse]);
            }, 1000);
        }
    };

    const handleKeyPress = (event) => {
        if (event.nativeEvent.key === 'Enter') {
            handleSend();
        }
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
                <Text style={[globalStyles.description]}>철수와 대화해요.</Text>
            </View>

            <FlatList
                data={chatMessages}
                renderItem={renderChatBubble}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.chatContainer}
                style={{ marginBottom: 80 }}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.textInput, { outlineStyle: 'none' }]} 
                    placeholder="여기에 답변을 입력하세요."
                    value={inputText}
                    onChangeText={setInputText}
                    onKeyPress={handleKeyPress} 
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
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
