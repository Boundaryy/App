
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native-web';

export const Button = ({toLink, title}) => {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push(toLink);
  };

  return (
    <View style={styles.buttonContainer}> 
    <TouchableOpacity style={styles.button} onPress={handleSignupClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  button: {
    width: 310,
    height: 50,
    backgroundColor: '#5772FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Pretendard',
    fontWeight: '600',
  }
});
