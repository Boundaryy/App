import React, { useState } from 'react';
import { globalStyles } from '../styles/global'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Button  from '../components/Button';

const ChooseScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [toLink, setToLink] = useState(null);
  const router = useRouter();

  const handleIconClick = (option) => {
    setSelectedOption(option);
    setToLink(option === '/child' ? '/cservicecheck' : '/pservicecheck');
  };

  const handleClick = () => {
    if (toLink) {
      router.push(toLink)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={globalStyles.subtitle}>회원가입</Text>
        <Text style={globalStyles.description}>회원가입 유형을 선택해주세요.</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={[
              styles.icon, 
              selectedOption === '/child' && styles.selectedIcon,
              { marginRight: -20 }
            ]}
            onPress={() => handleIconClick('/child')}
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
            style={[
              styles.icon, 
              selectedOption === '/guardian' && styles.selectedIcon,
              { marginLeft: -20 }
            ]}
            onPress={() => handleIconClick('/guardian')}
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
        <Button onPress={handleClick} title={"다음으로"}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F3F4F6',
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
    borderRadius: 8,
    padding: 15,
    borderWidth: 0,
    backgroundColor: '#F3F4F6',
    elevation: 2,

  },
  selectedIcon: {
    backgroundColor: '#F3F4F6',
    borderColor: '#5772FF',
    borderWidth: 2,
    elevation: 5,

  },
  iconImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  iconText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#565656',
    fontFamily: 'Pretendard',
  },
});

export default ChooseScreen;
