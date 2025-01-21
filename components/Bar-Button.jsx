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
                <Text style={[styles.title, { fontFamily: 'Pretendard' }]}>{title}</Text>
                <Text style={[styles.desc, { fontFamily: 'Pretendard' }]}>{explain}</Text>
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    barBtn: {
        width: 330,
        height: 108,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 10,
        elevation: 2, 
    },
    iconBg: {
        backgroundColor: '#FFFFFF',
        height: 40,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImg: {
        height: 54,
        width: 54,
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
    },
    arrowBox: {
        position: 'absolute',
        right: 40,
    },
    arrow: {
        transform: [{ rotate: '180deg' }], 
        height:  20,
        width:20,
        
    }
});