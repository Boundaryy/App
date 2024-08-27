import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const BarButton = ({ toLink, imgLink, title, explain }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(toLink);
      };
    
    return (
        <TouchableOpacity onPress={handleClick} style={styles.barBtn}>
            <View style={styles.iconBg}>
                <Image source={imgLink} style={styles.iconImg} />
            </View>
            <View style={styles.textBg}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{explain}</Text>
            </View>
            <View style={styles.arrowBox}>
                <Image style={styles.arrow} source={require('../assets/arrow.png')} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    barBtn: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 10,
        elevation: 2, // Android shadow effect
    },
    iconBg: {
        backgroundColor: '#FFFFFF',
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImg: {
        height: 40,
        width: 40,
    },
    textBg: {
        marginLeft: 10,
        gap: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    desc: {
        fontSize: 12,
        color: '#808080',
    },
    arrowBox: {
        position: 'absolute',
        right: 40,
    },
    arrow: {
        transform: [{ rotate: '180deg' }], // 45도 회전
        height:  20,
        width:20,
        
    }
});