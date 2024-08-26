import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BarState = ({ desc }) => {
  return (
    <View style={styles.barBtn}>
      <View style={styles.iconBg}>
        {/* <Image source={require('./childIcon.png')} style={styles.iconImg} /> */}
      </View>
      <View style={styles.arrowBox} />
      <View style={styles.textBg}>
        <Text style={styles.title}>스도쿠</Text>
        <Text style={styles.desc}>{desc || '성공했어요'}</Text>
      </View>
    </View>
  );
};

const SignupButton = ({ desc, href }) => {
  return (
    <TouchableOpacity style={styles.signupButton} onPress={() => {/* Handle navigation */}}>
      <Text style={styles.buttonText}>{desc}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('./sunglasses.png')} style={styles.headerImage} /> */}
        <Text style={styles.h2}>트레이닝을 완료했어요.</Text>
        <Text style={styles.p}>학습 성공률은 3/3입니다</Text>
      </View>
      <View style={styles.barBtnContainer}>
        <BarState />
        <BarState />
      </View>
      <SignupButton desc="다음으로" href="#" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 40,
    paddingLeft: 20, // Svelte의 85px에 해당하는 값
  },
  headerImage: {
    width: 50, // 이미지 크기 조정
    height: 50,
  },
  h2: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 10,
  },
  p: {
    color: '#808080',
    fontSize: 14,
    marginVertical: 5,
  },
  barBtnContainer: {
    marginVertical: 20,
  },
  barBtn: {
    width: 220,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconBg: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {
    height: 40,
    width: 40,
  },
  textBg: {
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  desc: {
    fontSize: 12,
    color: 'rgb(108, 113, 255)',
  },
  arrowBox: {
    marginLeft: 12,
    visibility: 'hidden', // 리액트 네이티브에서는 visibility를 사용할 수 없습니다.
  },
  signupButton: {
    width: 310,
    height: 50,
    backgroundColor: '#5772FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
