import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');

export default function MemoryGame() {
  const emojis = ['🍎', '🍊', '🍌'];
  const list = [getRandomInt(3)+3, getRandomInt(3)+3, getRandomInt(3)+3]
  AsyncStorage.setItem("emojiCount", list[0]);
  const router = useRouter(); 

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * (height - 100));
    const left = Math.floor(Math.random() * (width - 100));
    return { top, left };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/child/training/memoryscanf');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.title}>메모리게임</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {emojis.map((emoji, index) => (
          Array.from({ length: list[index] }).map((_, i) => {
            const position = getRandomPosition();
            return (
              <Text
                key={`${emoji}-${index}-${i}`} 
                style={[styles.emoji, { top: position.top, left: position.left }]}
              >
                {emoji}
              </Text>
            );
          })
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
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  emoji: {
    position: 'absolute',
    fontSize: 56, 
  },
});