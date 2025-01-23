import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/global';
import Button from '../../../components/Button';
import { useRouter } from 'expo-router';

const App = () => {
   const router = useRouter();

   const handleLoginClick = () => {
       router.push('/child/training/resolve');
   };

   return (
       <View style={[globalStyles.container]}>
           <View style={globalStyles.header}>
               <Text style={[globalStyles.subtitle, styles.text]}>상황 선택하기</Text>
               <Text style={[globalStyles.description]}>아래에서 학습할 상황을 선택해주세요.</Text>

               <Button title={"학습 시작하기"} onPress={handleLoginClick} />
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
});

export default App;