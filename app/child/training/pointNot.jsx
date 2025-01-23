import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../../styles/global';
import Button from '../../../components/Button';

export default function MemoryGameAnswer() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={globalStyles.subtitle}>포인트 지급</Text>
      <Text style={globalStyles.description}>와, 완전 열심히 하셨어요!</Text>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/coin.svg')} style={styles.image} />
        </View>
        <Text style={styles.message}>
          저금통에{"\n"} 
          <Text style={styles.highlight}>80 포인트</Text>가 추가되었어요
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="홈으로" onPress={() => router.push('/child/home')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: '5%',
    paddingVertical: 32,
  },
  content: {
    marginTop: 140, 
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 160,
    height: 160,
  },
  message: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 60,
    fontFamily: 'Pretendard', 
    fontWeight: 600,
  },
  highlight: {
    color: '#5772FF',
    fontWeight: '700',
    fontFamily: 'Pretendard', 
  },
  buttonContainer: {
    marginTop: 60,
  },
});
