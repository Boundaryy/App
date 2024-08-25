import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const ChooseScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleIconClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      Alert.alert('이미지를 선택해 주세요.');
    } else {
      if (selectedOption === '아이') {
        router.push('/child/auth/signup');
      } else if (selectedOption === '부모') {
        router.push('/parent/auth/signup');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Boundary</Text>
        <Text style={styles.subtitle}>회원가입</Text>
        <Text style={styles.description}>아이와 부모님을 선택해 주세요.</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={[styles.icon, selectedOption === '아이' && styles.selectedIcon]}
          onPress={() => handleIconClick('아이')}
          accessible
          accessibilityLabel="아이 아이콘"
          accessibilityRole="button"
        >
          <Image
            source={require('../assets/images/baby.png')}
            style={styles.iconImage}
          />
          <Text style={styles.iconText}>아이로 회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.icon, selectedOption === '부모' && styles.selectedIcon]}
          onPress={() => handleIconClick('부모')}
          accessible
          accessibilityLabel="부모 아이콘"
          accessibilityRole="button"
        >
          <Image
            source={require('../assets/images/parents.png')}
            style={styles.iconImage}
          />
          <Text style={styles.iconText}>부모로 회원가입</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>계속하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 200,
    marginLeft: -120, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#5772FF',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 100,
  },
  icon: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 12,
    padding: 5,
    borderWidth: 0,
  },
  selectedIcon: {
    borderColor: '#5772FF',
    borderWidth: 3,
    transform: [{ scale: 1.1 }],
  },
  iconImage: {
    width: 100,
    height: 100,
    marginBottom: 2,
  },
  iconText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  submitButton: {
    width: 310,
    height: 50,
    backgroundColor: '#5772FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ChooseScreen;
