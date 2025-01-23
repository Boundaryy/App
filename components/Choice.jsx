import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const BarButton = ({ toLink, title, explain, isSelected, onSelect }) => {
    const router = useRouter();

    const handlePress = () => {
        if (isSelected) {
            onSelect(null); 
        } else {
            onSelect(title); 
        }
    };

    return (
        <TouchableOpacity 
            onPress={handlePress} 
            style={[
                styles.barBtn, 
                isSelected && styles.selectedButton
            ]}
        >
            <View style={styles.textBg}>
                <Text style={[
                    styles.title, 
                    { fontFamily: 'Pretendard' }
                ]}>{title}</Text>
                <Text style={[
                    styles.desc, 
                    { fontFamily: 'Pretendard' }
                ]}>{explain}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    barBtn: {
        width: 318,
        height: 76,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 10,
        elevation: 2, 
        marginLeft: 20,
    },
    selectedButton: {
        borderWidth: 2,
        borderColor: '#5772FF',
    },
    textBg: {
        marginLeft: 6,
        gap: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: '550',
    },
    desc: {
        fontSize: 14,
        color: '#808080',
        fontWeight: '500',
    }
});
