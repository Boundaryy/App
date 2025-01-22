import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../../styles/global';
const { width, height } = Dimensions.get('window');

// 배경 이미지 배열
const backgroundImages = [
  require('../../../assets/memorygame1.jpg'),
  require('../../../assets/memorygame2.jpg'),
  require('../../../assets/memorygame3.png'),
];

export default function MemoryGame() {
  const emojis = ['🍎', '🍊', '🍌'];
  const list = [getRandomInt(3) + 3, getRandomInt(3) + 3, getRandomInt(3) + 3];
  AsyncStorage.setItem("emojiCount", list[0]);
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [positions, setPositions] = useState([]);
  const [randomBackground, setRandomBackground] = useState(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * (height - 100));
    const left = Math.floor(Math.random() * (width - 100));
    return { top, left };
  };

  useEffect(() => {
    const selectedBackground = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setRandomBackground(selectedBackground);

    const newPositions = emojis.map((emoji, index) =>
      Array.from({ length: list[index] }).map(() => getRandomPosition())
    );
    setPositions(newPositions);

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/child/training/memoryscanf');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <ImageBackground
      source={randomBackground}
      style={styles.background}
    >
      <View style={globalStyles.header}>
        <Text style={[globalStyles.subtitle, { fontFamily: 'Pretendard' }]}>메모리게임</Text>
      </View>

      <Text style={[styles.countdown, { fontSize: 140, fontWeight: 'bold', position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -70 }, { translateY: -70 }] }]}> {countdown} </Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {emojis.map((emoji, index) => (
          positions[index] && positions[index].map((position, i) => (
            <Text
              key={`${emoji}-${index}-${i}`}
              style={[styles.emoji, { top: position.top, left: position.left, fontFamily: 'Pretendard' }]}
            >
              {emoji}
            </Text>
          ))
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  header: {
    width: '80%',
    marginLeft: '10%',
    marginTop: height * 0.1,
    position: 'absolute',
    zIndex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: height * 0.15,
  },
  emoji: {
    position: 'absolute',
    fontSize: 56,
    fontFamily: 'Pretendard',
  },
  countdown: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -70 }, { translateY: -70 }],
    textAlign: 'center',
    fontSize: 140,
    color: '#FFFFFF',
    fontFamily: 'Pretendard',
  },
});