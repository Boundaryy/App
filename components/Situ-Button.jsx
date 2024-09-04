import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const SituButton = ({ pick, toLink, title, explain }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(toLink);
    };
    
    return (
        <TouchableOpacity onPress={handleClick} style={pick}>
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
        backgroundColor: "#F3F4F6",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // 화살표와 텍스트 사이의 공간을 자동으로 조정
        marginTop: 10,
        borderRadius: 20,
        padding: 14,
        elevation: 2,
    },
    barBtnParent: {
        backgroundColor: "#F3F4F6",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // 화살표와 텍스트 사이의 공간을 자동으로 조정
        marginTop: 10,
        borderWidth: 3, // 테두리 두께
        borderColor: '#5772FF', // 테두리 색상
        borderRadius: 10, // 테두리 모서리 둥글기
        borderRadius: 20,
        padding: 14,
        elevation: 2,
    },
    textBg: {
        marginLeft: 10,
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
        // arrowBox 스타일은 필요 없다면 삭제 가능
    },
    arrow: {
        transform: [{ rotate: '180deg' }], // 180도 회전
        height: 20,
        width: 20,
    }
});

export default SituButton;
