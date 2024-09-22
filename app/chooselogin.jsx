import React, { useState } from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button';

const ChooseScreen = () => {
  const [selectedOption, setSelectedOption] = useState('/child/signin');
  const [toLink, setToLink] = useState('/child/signin');
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const handleIconClick = (option) => {
    setToLink(option + "/signin");
    setSelectedOption(option);
  };

  const handleClick = () => {
    router.push(toLink);
  };

  const iconSize = width > 400 ? (height > 800 ? 130 : 100) : (height > 800 ? 100 : 70);
  const fontSize = width > 400 ? (height > 800 ? 22 : 18) : (height > 800 ? 18 : 14);
  const marginBottom = height > 800 ? 120 : 80;
  const buttonPadding = width > 400 ? 15 : 10;

  return (
    <View style={[globalStyles.container, { paddingVertical: height > 800 ? 40 : 20 }]}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>Boundary</Text>
        <Text style={globalStyles.subtitle}>로그인</Text>
        <Text style={globalStyles.description}>아이와 부모님을 선택해 주세요.</Text>
      </View>

      <View style={[styles.iconContainer, { marginBottom }]}>
        <TouchableOpacity
          style={[styles.icon, selectedOption === '/child' && styles.selectedIcon]}
          onPress={() => handleIconClick('/child')}
          accessible
          accessibilityLabel="아이 아이콘"
          accessibilityRole="button"
        >
          <Image
            source={require('../assets/images/baby.png')}
            style={[styles.iconImage, { width: iconSize, height: iconSize }]} 
          />
          <Text style={[styles.iconText, { fontSize }]}>아이로 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.icon, selectedOption === '/guardian' && styles.selectedIcon]}
          onPress={() => handleIconClick('/guardian')}
          accessible
          accessibilityLabel="부모 아이콘"
          accessibilityRole="button"
        >
          <Image
            source={require('../assets/images/parents.png')}
            style={[styles.iconImage, { width: iconSize, height: iconSize }]} 
          />
          <Text style={[styles.iconText, { fontSize }]}>부모로 로그인</Text>
        </TouchableOpacity>
      </View>

      <Button onPress={handleClick} title={"계속하기"} buttonStyle={{ padding: buttonPadding }} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
  },
  icon: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 12,
    padding: 5,
    borderWidth: 0,
    marginVertical: 10,
    width: '40%',
  },
  selectedIcon: {
    borderColor: '#5772FF',
    borderWidth: 3,
    transform: [{ scale: 1.1 }],
  },
  iconImage: {
    marginBottom: 2,
  },
  iconText: {
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
});

export default ChooseScreen;
