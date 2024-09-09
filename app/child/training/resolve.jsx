import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../../styles/global';

const ChatScreen = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (messageList.length >= 3) {
      router.push('/child/training/resultcontent');
    }
  }, [messageList, router]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessageList([...messageList, message]);
      setMessage("");
    }
  };

  const handleBackClick = () => {
    router.push("child/home"); 
  };

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity style={globalStyles.backButton} onPress={handleBackClick}>
        <Text style={globalStyles.backText}>뒤로가기</Text>
      </TouchableOpacity>
      <View style={globalStyles.header} >
        <Text style={globalStyles.subtitle}>상황 대처 지능 테스트</Text>
      </View>

      <ScrollView style={styles.chatArea}>
        <View style={styles.speechBubbleContainer}>
          <Image 
            source={{ uri: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png' }} 
            style={styles.icon} 
          />
          <View style={styles.speechBubble}>
            <Text style={styles.bubbleText}>오늘 희성이가 아파서 학교에 가지 못했다.</Text>
          </View>
        </View>
        {messageList.map((mes, key) => (
          <View key={key} style={styles.mySpeechBubbleContainer}>
            <Image 
              source={{ uri: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png' }} 
              style={styles.icon} 
            />
            <View style={styles.mySpeechBubble}>
              <Text style={styles.myBubbleTextContent}>{mes}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <SafeAreaView style={styles.sendBox}>
        <TextInput
          style={styles.input}
          placeholder="여기에 메시지를 입력하세요"
          placeholderTextColor="#A0A0A0"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Image source={require('../../../assets/image.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  backText: {
    fontSize: 18,
    color: '#808080',
    marginTop: 40,
    marginLeft: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    marginTop: 80,
    marginLeft: 30,
  },
  chatArea: {
    flex: 1,
    marginTop: 120,
  },
  speechBubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  mySpeechBubbleContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  icon: {
    width: 54,
    height: 54,
    borderRadius: 20,
  },
  speechBubble: {
    backgroundColor: '#F3F4F6',
    padding: 16, 
    borderRadius: 16,
    borderTopLeftRadius: 0,
    maxWidth: '80%', 
    marginLeft: 16,
    marginTop: 4,
    justifyContent: 'center',
  },
  mySpeechBubble: {
    backgroundColor: '#5772FF',
    padding: 16, 
    borderRadius: 16,
    borderTopRightRadius: 0,
    maxWidth: '80%', 
    marginRight: 10,
    marginTop: 4,
    justifyContent: 'center',
  },
  bubbleText: {
    fontSize: 15, 
  },
  myBubbleTextContent: {
    color: 'white',
    fontSize: 16,
  },
  sendBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: 20,
    width: "90%",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 10,
  },
  sendIcon: {
    width: 24,
    height: 24,
    tintColor: '#5772FF',
  },
});

export default ChatScreen;
