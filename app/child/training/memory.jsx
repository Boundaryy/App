import React, { useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Animated } from 'react-native';
import { useRouter } from 'expo-router';

export default function MemoryGame() {
  const emojis = ['🍎', '🍊', '🍌'];
  const emojiCount = 5; 
  const router = useRouter(); 


  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * 800);  
    const left = Math.floor(Math.random() * 350); 
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
        <View style={styles.headerContent}>
          <Image 
            source={require('../../../assets/arrow.png')} 
            style={styles.arrow} 
          />
          <Text style={styles.title}>메모리게임</Text>
        </View>
      </View>
      
      {emojis.map((emoji, index) => (
        Array.from({ length: emojiCount }).map((_, i) => {
          const position = getRandomPosition();
          return (
            <Text 
              key={`${emoji}-${index}-${i}`} 
              style={[styles.emoji, { top: position.top, left: position.left }]}>
              {emoji}
            </Text>
          );
        })
      ))}
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 416,  
    height: 930, 
    resizeMode: 'cover', 
  },
  header: {
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerContent: {
    flexDirection: 'row',  
    alignItems: 'center', 
  },
  arrow: {
    width: 24,
    height: 24,  
    marginRight: 10, 
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
