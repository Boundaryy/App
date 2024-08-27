import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/child/training/result');
    }, 5000);

   
    return () => clearTimeout(timer);
  }, [router]);

  const handleLoginClick = () => {
    router.push('/child/home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBox} onPress={handleLoginClick}>
        <Image source={require('../../../assets/arrow.png')} style={styles.arrow} />
        <Text style={styles.arrowText}>돌아가기</Text>
      </TouchableOpacity>

      <Text style={styles.header}>상황 대처 지능 테스트</Text>

      <ScrollView style={styles.chatArea}>
        <View style={styles.speechBubble}>
          <Image source={require('../../../assets/images/happyface.png')} style={styles.icon} />
          <View style={styles.bubbleText}>
            <Text>으갸갸갸갸갸갹</Text>
          </View>
        </View>

        <View style={styles.mySpeechBubble}>
          <Image source={require('../../../assets/images/happyface.png')} style={styles.icon} />
          <View style={styles.myBubbleText}>
            <Text style={styles.myBubbleTextContent}>오교교교굑교교교교교</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.sendBox}>
        <TextInput
          style={styles.input}
          placeholder="여기에 메세지를 입력하세요"
          value={message}
          onChangeText={setMessage}
        />
        <Image source={require('../../../assets/arrow.png')} style={styles.arrow1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  arrowBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrow: {
    height: 20,
    width: 20,
  },
  arrow1: {
    height: 20,
    width: 20,
    transform: [{ rotate: '180deg' }], 
  },
  arrowText: {
    fontSize: 18,
    color: '#808080',
    marginLeft: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chatArea: {
    flex: 1,
  },
  speechBubble: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  mySpeechBubble: {
    flexDirection: 'row-reverse',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  bubbleText: {
    backgroundColor: '#cbcbcb',
    padding: 15,
    borderRadius: 50,
    borderTopLeftRadius: 0,
    marginLeft: 10,
  },
  myBubbleText: {
    backgroundColor: '#5772FF',
    padding: 15,
    borderRadius: 50,
    borderTopRightRadius: 0,
    marginRight: 10,
  },
  myBubbleTextContent: {
    color: 'white',
  },
  sendBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  sendIcon: {
    width: 26,
    height: 26,
  },
  barBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iconBg: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImg: {
    width: 40,
    height: 40,
  },
  textBg: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 12,
    color: 'rgb(108, 113, 255)',
  },
});

export default ChatScreen;
