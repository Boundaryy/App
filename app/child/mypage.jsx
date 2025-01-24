import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';

const App = () => {
   const [progress, setProgress] = useState(0.47); // 규민이 요거 진행률 나타내는거임 0.뒤에가 진행률 현재는 47퍼

   return (
       <View style={[globalStyles.container]}>
           <View style={globalStyles.header}>
               <Text style={[globalStyles.subtitle, styles.text]}>아이 학습 진행도 확인</Text>
               <Text style={[globalStyles.description]}>아이의 학습 결과를 확인하며 도와주세요.</Text>
           </View>

           <View style={styles.progressBarContainer}>
               <Text style={styles.levelText}>
                   <Text style={styles.nameHighlight}>신희성님</Text>{' '}
                   <Text style={styles.defaultColor}>레벨 </Text>
                   <Text style={styles.levelHighlight}>46</Text>
               </Text>

               <View style={styles.progressBarWrapper}>
                   <Text style={styles.progressLeftText}>470/1000</Text>
                   <Text style={styles.progressRightText}>pt</Text>
               </View>
               <View style={styles.progressBar}>
                   <View style={[styles.progress, { width: `${progress * 100}%` }]} />
               </View>
           </View>
       </View>
   );
};

const styles = StyleSheet.create({
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
   progressBarContainer: {
       alignItems: 'center',
       marginTop: 50,
   },
   levelText: {
       fontSize: 24,
       fontWeight: '700',
       color: '#000000',
       marginTop: -30,
       marginBottom: 30,
       marginLeft: -150,
       fontFamily: 'Pretendard',
   },
   nameHighlight: {
       color: '#5772FF', 
   },
   levelHighlight: {
       color: '#5772FF', 
   },
   defaultColor: {
       color: '#000000', 
   },
   progressBarWrapper: {
       width: 320,
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginBottom: 5,
   },
   progressLeftText: {
       fontSize: 14,
       fontWeight: '500',
       color: '#8E8E8E',
       fontFamily: 'Pretendard',
   },
   progressRightText: {
       fontSize: 14,
       fontWeight: '500',
       color: '#8E8E8E',
       fontFamily: 'Pretendard',
   },
   progressBar: {
       width: 320,
       height: 10,
       backgroundColor: '#E0E0E0',
       borderRadius: 5,
       overflow: 'hidden',
   },
   progress: {
       height: '100%',
       backgroundColor: '#5772FF',
   },
});

export default App;
