import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ChatScreen = () => {
    const [messages, setMessages] = useState([
        { text: "안녕하세요, 학부모님 속상하시죠?", from: "left" },
        { text: "괜찮아요. 오히려 이 서비스 덕에 행복해요", from: "right" },
        { text: "정말 다행이에요.", from: "left" },
        { text: "매우감사합니당", from: "right" }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, from: "right" }]);
            setNewMessage('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>조언 상담</Text>

            <ScrollView style={styles.chat} contentContainerStyle={{ flexGrow: 1 }}>
                {messages.map((message, index) => (
                    <View
                        key={index}
                        style={[
                            styles.message,
                            message.from === 'left' ? styles.leftMessage : styles.rightMessage
                        ]}
                    >
                        <Text style={message.from === 'left' ? styles.leftText : styles.rightText}>
                            {message.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="여기에 메시지를 입력하세요."
                    value={newMessage}
                    onChangeText={setNewMessage}
                    onSubmitEditing={sendMessage} // Trigger sendMessage on 'Enter' key
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>➤</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
    },
    header: {
        textAlign: 'left',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 40,
    },
    chat: {
        flex: 1,
        marginBottom: 20,
    },
    message: {
        maxWidth: '70%',
        padding: 12,
        borderRadius: 20,
        marginVertical: 5,
    },
    leftMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        borderTopLeftRadius: 0,
    },
    rightMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#5772FF',
        borderRadius: 25,
        borderTopRightRadius: 0,
    },
    leftText: {
        color: '#515151',
        fontSize: 16,
        lineHeight: 22,
    },
    rightText: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 22,
    },
    inputArea: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#565656',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    sendButton: {
        backgroundColor: '#5772FF',
        borderRadius: 30,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default ChatScreen;
