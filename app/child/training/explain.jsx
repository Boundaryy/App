import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/global';
import Button from '../../../components/Button';
import { useRouter } from 'expo-router';

const App = () => {
   const router = useRouter();

   const handleLoginClick = () => {
       router.push('/child/training/sitchoice');
   };

   const chatMessages = [
       { id: '1', sender: 'user', message: '나 몸이 아파서 학교 못가겠어' },
       { id: '2', sender: 'response', message: '많이 아프겠다. 오늘은 푹 쉬어' },
       { id: '3', sender: 'user', message: '과제 있으면 알려주라!!' },
       { id: '4', sender: 'response', message: '응 알겠어!' },
   ];

   const renderChatBubble = ({ item }) => {
       const isUser = item.sender === 'user';
       return (
           <View style={[
               styles.chatBubbleContainer,
               isUser ? { alignSelf: 'flex-start' } : { alignSelf: 'flex-end' }
           ]}>
               <View
                   style={[
                       styles.chatBubble,
                       isUser ? styles.userBubble : styles.responseBubble,
                       isUser ? styles.userBubbleRadius : styles.responseBubbleRadius,
                   ]}
               >
                   <Text style={[styles.chatText, !isUser && styles.responseText]}>
                       {item.message}
                   </Text>
               </View>
           </View>
       );
   };

   return (
       <View style={[globalStyles.container]}>
           <View style={globalStyles.header}>
               <Text style={[globalStyles.subtitle, styles.text]}>상황 대처 학습 예시</Text>
               <Text style={[globalStyles.description]}>아래 예시와 같이 학습이 진행되요.</Text>
               <FlatList
                   data={chatMessages}
                   renderItem={renderChatBubble}
                   keyExtractor={(item) => item.id}
                   contentContainerStyle={styles.chatContainer}
               />
               <Text style={[styles.description, styles.text]}>
                   바운더리에서 {'\n'}상황 대처 학습을 진행해봐요.
               </Text>
               <Button title={"다음으로"} onPress={handleLoginClick} />
           </View>
       </View>
   );
};

const styles = StyleSheet.create({
   chatContainer: {
       marginVertical: 20,
   },
   chatBubbleContainer: {
       maxWidth: '90%',
       marginVertical: 23,
       marginHorizontal: 20,
   },
   chatBubble: {
       padding: 12,
       borderRadius: 15,
       paddingHorizontal: 20, 
   },
   userBubble: {
       backgroundColor: '#FFFFFF',
   },
   responseBubble: {
       backgroundColor: '#5772FF',
   },
   userBubbleRadius: {
       borderTopLeftRadius: 25,
       borderTopRightRadius: 25,
       borderBottomLeftRadius: 0,
       borderBottomRightRadius: 25,
   },
   responseBubbleRadius: {
       borderTopLeftRadius: 25,
       borderTopRightRadius: 0,
       borderBottomLeftRadius: 25,
       borderBottomRightRadius: 25,
   },
   chatText: {
       fontSize: 16,
       color: '#505050',
       fontFamily: 'Pretendard',
       fontWeight: 400,
   },
   responseText: {
       color: '#FFFFFF',
       fontFamily: 'Pretendard',
       fontWeight: 400,
   },
   description: {
       color: '#565656',
       fontSize: 18,
       textAlign: 'center',
       fontWeight: '300',
       marginBottom: -10,
       marginTop: 30,
       fontFamily: 'Pretendard',
   },
   text: {
       fontFamily: 'Pretendard',
   },
});

export default App;