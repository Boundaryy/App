import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Button = ({ onPress, title }) => {
  const router = useRouter();

  return (
    <View style={styles.buttonContainer}> 
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 310,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: -180,
  },
  buttonText: {
    color: '#5772FF',
    fontSize: 18,
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
});

export default Button;
