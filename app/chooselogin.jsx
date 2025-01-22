import React, { useState } from 'react';
import { globalStyles } from '../styles/global';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Button  from '../components/Button';

const ChooseScreen = () => {
  const [selectedOption, setSelectedOption] = useState('/child/signin');
  const [toLink, setToLink] = useState('/child/signin');
  const router = useRouter();

  const handleIconClick = (option) => {
    setToLink(option + "/signin");
    setSelectedOption(option);
  };

  const handleClick = () => {
    router.push(toLink);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={globalStyles.title}>Boundary</Text>
        <Text style={globalStyles.subtitle}>로그인</Text>
        <Text style={globalStyles.description}>아이와 부모님을 선택해 주세요.</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={[styles.icon, selectedOption === '/child' && styles.selectedIcon]}
            onPress={() => handleIconClick('/child')}
            accessible
            accessibilityLabel="아이 아이콘"
            accessibilityRole="button"
          >
            <Image
              source={require('../assets/images/baby.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>아이로 로그인</Text>
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
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>부모로 로그인</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={handleClick} title={"계속하기"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 100,
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
});

export default ChooseScreen;
