import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { globalStyles } from '../../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ChatScreen = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [threads, setThreads] = useState('');
  
  const router = useRouter();

  useEffect(() => {
    if (messageList.length >= 6) {
      AsyncStorage.setItem("thread", threads);
      router.push('/child/training/resultcontent');
    }
  }, [messageList, router]);

  useEffect(() => {
    const fetchFirstMessage = async () => {
      try {
        const response = await axios.post(
          `http://boundary.main.oyunchan.com:5001/sst/1`,
          {
            headers: {
              access_token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQ2hpbGQiLCJpc3MiOiJncmV5Ym94IiwiZXhwIjoxNzI5NzAxNTQ2LCJpYXQiOjE3MjYxMDE1NDYsIm1lbWJlcklkIjo4fQ.eoF9O7YtIr5WhxVEmsR0xr5MwTLpf6XHNUJuVzJ5f6HpcMY1ZDkU20uOaRN-GHV3rLZrzvQuheocVsfxr8fTPg',
            },
          }
        );
        console.log(response.data.botFirstMessage)
        setThreads(response.data.threadId)
        setMessageList([...messageList, response.data.botFirstMessage])
        // setMessageList([{ sender: 'bot', text: firstMessage }]);
      } catch (error) {
        console.error('첫 메시지 불러오기 실패:', error);
      }
    };

    fetchFirstMessage();
  }, []);

  const sendMessage = async () => {
      try {
        console.log(threads)
        console.log(message)
        const response = await axios.post(
          `http://boundary.main.oyunchan.com:5001/sst/threads/${threads}`,
          {
            userMessage: message,
          },
          {
            headers: {
              access_token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQ2hpbGQiLCJpc3MiOiJncmV5Ym94IiwiZXhwIjoxNzI5NjY4MjU4LCJpYXQiOjE3MjYwNjgyNTgsIm1lbWJlcklkIjo4fQ.F3Cbsh8SbtTiVSL-gI6ISjWrYNvBwRIpx5UUyfjQ0YNxDamvRAwO96ie9YNgmnYsVMc-v1V-mqrd0LP6Fj7TDw',
            },
          }
        );

        console.log(response)

        const botMessage = response.data.botMessage;

        setMessageList([...messageList, message, botMessage]);
        setMessage('');
      } catch (error) {
        console.error('메시지 전송 실패:', error);
      }
    };

  const handleBackClick = () => {
    router.push('child/home');
  };

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity style={globalStyles.backButton} onPress={handleBackClick}>
        <Text style={globalStyles.backText}>뒤로가기</Text>
      </TouchableOpacity>
      <View style={globalStyles.header}>
        <Text style={globalStyles.subtitle}>상황 대처 지능 테스트</Text>
      </View>

      <ScrollView style={styles.chatArea}>
        {messageList.map((mes, key) => (
          <View key={key} style={key%2 == 1 ? styles.mySpeechBubbleContainer : styles.speechBubbleContainer}>
            <Image
              source={{
                uri: key%2 == 1
                  ? 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png'
                  : 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png',
              }}
              style={styles.icon}
            />
            <View style={key%2 == 1 ? styles.mySpeechBubble : styles.speechBubble}>
              <Text style={key%2 == 1 ? styles.myBubbleTextContent : styles.bubbleText}>{mes}</Text>
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
    width: '90%',
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
