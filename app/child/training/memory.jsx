import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../../styles/global';

const { width, height } = Dimensions.get('window');

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

  const getRandomPosition = (imageBounds) => {
    const { top, left, width, height } = imageBounds;
    const emojiTop = Math.floor(Math.random() * (height - 56)) + top; 
    const emojiLeft = Math.floor(Math.random() * (width - 56)) + left;
    return { top: emojiTop, left: emojiLeft };
  };

  useEffect(() => {
    const selectedBackground = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setRandomBackground(selectedBackground);

    const imageBounds = {
      top: height - 640 - 40, 
      left: (width - 330) / 2,
      width: 330,
      height: 640,
    };

    const newPositions = emojis.map((emoji, index) =>
      Array.from({ length: list[index] }).map(() => getRandomPosition(imageBounds))
    );
    setPositions(newPositions);

    const timer = setInterval(() => {
      setCountdown((prev) => {
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
    <View style={styles.container}>
      <ImageBackground
        source={randomBackground}
        style={styles.background}
        imageStyle={styles.imageStyle} 
      >
        {emojis.map((emoji, index) =>
          positions[index] &&
          positions[index].map((position, i) => (
            <Text
              key={`${emoji}-${index}-${i}`}
              style={[
                styles.emoji,
                {
                  top: position.top - (height - 640 - 40), 
                  left: position.left - (width - 330) / 2,
                },
              ]}
            >
              {emoji}
            </Text>
          ))
        )}
      </ImageBackground>

      <View style={globalStyles.header}>
        <Text style={[globalStyles.subtitle, { fontFamily: 'Pretendard' }]}>숨은 과일 찾기</Text>
        <Text style={[globalStyles.description, { fontFamily: 'Pretendard' }]}>
          과일들이 몇 개인지 잘 보세요.
        </Text>
      </View>

      <Text style={styles.countdown}>{countdown}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  background: {
    width: 330,
    height: 640,
    position: 'absolute',
    left: '50%',
    bottom: 40,
    transform: [{ translateX: -165 }],
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: 20, 
  },
  emoji: {
    position: 'absolute',
    fontSize: 56,
    fontFamily: 'Pretendard',
  },
  countdown: {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: [{ translateX: -70 }, { translateY: -70 }],
    textAlign: 'center',
    fontSize: 140,
    color: '#FFFFFF',
    fontFamily: 'Pretendard',
    marginLeft: 30,
  },
});
