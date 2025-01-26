import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../components/Button';
import { globalStyles } from '../../../styles/global';

export default function MemoryGameAnswer() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = async () => {
    const emojiCount = await AsyncStorage.getItem("emojiCount");
    if (selectedAnswer == emojiCount) {
      router.push('/child/training/point');
    } else {
      router.push('/child/training/pointNot');
    }
  };

  const options = ['4개', '5개', '6개', '7개'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={globalStyles.backButton}
        onPress={() => router.push('/child/home')}
      >
        <Image
          source={require('../../../assets/arrow.svg')}
          style={globalStyles.backButtonImage}
        />
      </TouchableOpacity>

      {/* Subtitle */}
      <Text style={[globalStyles.backsubtitle, { marginTop: 18 }]}>
        숨은 과일 찾기 정답
      </Text>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.question}>
          <Text style={styles.highlight}>Q.🍎</Text>
          <Text style={[styles.highlight, { color: '#5772FF' }]}>의 개수는?</Text>
        </Text>

        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option && styles.selectedButton,
              ]}
              onPress={() => setSelectedAnswer(option)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedAnswer === option && styles.selectedText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginTop: 40 }}>
          <Button title="선택하기" onPress={handleSubmit} />
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
  mainContent: {
    marginTop: 60, 
  },
  question: {
    fontSize: 22,
    marginBottom: 24,
    color: '#000000',
    fontWeight: '600',
    marginLeft: '6%',
    fontFamily: 'Pretendard',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
  optionButton: {
    width: 140,
    height: 160,
    paddingVertical: 16,
    margin: 8,
    borderWidth: 2,
    borderColor: '#5772FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#5772FF',
  },
  optionText: {
    fontSize: 20,
    color: '#5772FF',
    fontFamily: 'Pretendard',
    textAlign: 'center',
    fontWeight: '700',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});
