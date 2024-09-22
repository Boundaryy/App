import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { globalStyles } from '../../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const ChatScreen = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [threads, setThreads] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  const router = useRouter();

  useEffect(() => {
    if (messageList.length >= 5) {
      setTimeout(function () {
        AsyncStorage.setItem("thread", threads);
        router.push('/child/training/resultcontent');
      }, 3000);

    }
  }, [messageList, router]);

  const fetchFirstMessage = async () => {
    toggleVisibility();
    try {
      const response = await axios.post(
        `http://52.79.202.25:5001/sst/1`,
        {
          headers: {
            access_token: AsyncStorage.getItem("accessToken"),
          },
        }
      );
      console.log(response.data.botFirstMessage)
      setThreads(response.data.threadId)
      setMessageList([...messageList, response.data.botFirstMessage])
    } catch (error) {
      console.error('첫 메시지 불러오기 실패:', error);
      fetchFirstMessage();
    }
  };

  const sendMessage = async () => {
      try {
        console.log(threads);
        console.log(message);
        const response = await axios.post(
          `http://52.79.202.25:5001/sst/threads/${threads}`,
          {
            userMessage: message,
          },
          {
            headers: {
              access_token: AsyncStorage.getItem("accessToken"),
            },
          }
        );

        const botMessage = response.data.botMessage;
        setMessageList([...messageList, message, botMessage]);
        setMessage('');
      } catch (error) {
        console.error('메시지 전송 실패:', error);
        sendMessage();
      }
    };

  const handleBackClick = () => {
    router.push('child/home');
  };

  return (
    <View style={globalStyles.container}>
      {isVisible && (
        <TouchableOpacity style={styles.startButton} onPress={fetchFirstMessage}>
          <Text style={styles.startText}>시작하기</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={globalStyles.backButton} onPress={handleBackClick}>
        <Text style={globalStyles.backText}>뒤로가기</Text>
      </TouchableOpacity>
      <View style={globalStyles.header}>
        <Text style={globalStyles.subtitle}>상황 대처 지능 테스트</Text>
      </View>

      <ScrollView style={styles.chatArea}>
        {messageList.map((mes, key) => (
          <View key={key} style={key % 2 === 1 ? styles.mySpeechBubbleContainer : styles.speechBubbleContainer}>
            <Image
              source={{
                uri: key % 2 === 1
                  ? 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png'
                  : 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png',
              }}
              style={styles.icon}
            />
            <View style={key % 2 === 1 ? styles.mySpeechBubble : styles.speechBubble}>
              <Text style={key % 2 === 1 ? styles.myBubbleTextContent : styles.bubbleText}>{mes}</Text>
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
  startButton: {
    position: 'absolute',
    top: height * 0.5,
    left: width * 0.5,
    transform: [{ translateX: -width * 0.25 }, { translateY: -height * 0.05 }],
    backgroundColor: "#5772FF",
    padding: width * 0.05,
    borderRadius: 24,
    color: '#808080',
  },
  startText: {
    fontWeight: "bold",
    fontSize: width * 0.08,
    color: '#FFFFFF',
  },
  backText: {
    color: '#808080',
    marginTop: height * 0.05,
    marginLeft: width * 0.05,
  },
  header: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    color: '#000000',
    marginTop: height * 0.1,
    marginLeft: width * 0.05,
  },
  chatArea: {
    flex: 1,
    marginTop: height * 0.1,
  },
  speechBubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: height * 0.04,
  },
  mySpeechBubbleContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    marginBottom: height * 0.04,
  },
  icon: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: 20,
  },
  speechBubble: {
    backgroundColor: '#F3F4F6',
    padding: width * 0.04,
    borderRadius: 16,
    borderTopLeftRadius: 0,
    maxWidth: '80%',
    marginLeft: width * 0.04,
    marginTop: height * 0.01,
    justifyContent: 'center',
  },
  mySpeechBubble: {
    backgroundColor: '#5772FF',
    padding: width * 0.04,
    borderRadius: 16,
    borderTopRightRadius: 0,
    maxWidth: '80%',
    marginRight: width * 0.02,
    marginTop: height * 0.01,
    justifyContent: 'center',
  },
  bubbleText: {
    fontSize: width * 0.04,
  },
  myBubbleTextContent: {
    color: 'white',
    fontSize: width * 0.04,
  },
  sendBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: width * 0.025,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: height * 0.02,
    width: '90%',
  },
  input: {
    flex: 1,
    fontSize: width * 0.045,
    color: '#333',
    padding: width * 0.03,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: width * 0.025,
  },
  sendIcon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: '#5772FF',
  },
});

export default ChatScreen;
