import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';

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
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>조언 상담</Text>
            </View>

            <ScrollView style={styles.chat}>
                {messages.map((message, index) => (
                    <View key={index} style={[styles.message, message.from === 'left' ? styles.left : styles.right]}>
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="여기에 메시지를 입력하세요."
                    value={newMessage}
                    onChangeText={setNewMessage}
                    onSubmitEditing={sendMessage}
                />
                <Button title="➤" onPress={sendMessage} color="#5772FF" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '700',
    },
    chat: {
        flexGrow: 1,
        marginBottom: 20,
    },
    message: {
        maxWidth: '70%',
        padding: 12,
        borderRadius: 20,
        marginVertical: 5,
    },
    left: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        borderRadius: 25,
    },
    right: {
        backgroundColor: '#5772FF',
        alignSelf: 'flex-end',
        borderRadius: 25,
    },
    messageText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        padding: 10,
        elevation: 2,
    },
    input: {
        flex: 1,
        borderRadius: 30,
        padding: 10,
        fontSize: 16,
        color: '#565656',
    },
});

export default ChatScreen;
