import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/global';

const LearningMethod = () => {
    return (
        <View style={globalStyles.container}>
            <View style={styles.progressBarContainer}>
                <View style={styles.progressBar}>
                    <View style={styles.progress} />
                </View>
            </View>

            <View style={[globalStyles.container, { backgroundColor: '#F3F4F6' }]}>
                <View style={styles.header}>
                    <Text style={[globalStyles.subtitle]}>학습 방법</Text>
                    <Text style={[globalStyles.description]}>아래 예시와 같이 학습이 진행되요.</Text>   
                </View>

                <Text style={[styles.question, styles.pretendardFont]}>
                    철수와 영희가 내 앞에 있다.{"\n"}인사를 해야 할까?
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.buttonText, styles.pretendardFont]}>철수와 영희는 내 친구니까 인사를 해야 한다.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.buttonText, styles.pretendardFont]}>철수와 영희는 내 친구니까 인사를 해야 한다.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.buttonText, styles.pretendardFont]}>철수와 영희는 내 친구니까 인사를 해야 한다.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.buttonText, styles.pretendardFont]}>철수와 영희는 내 친구니까 인사를 해야 한다.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progressBarContainer: {
        alignItems: 'center',
        marginTop: 50, 
    },
    progressBar: {
        width: 330,
        height: 10,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
    },
    progress: {
        width: '50%',
        height: '100%',
        backgroundColor: '#5772FF',
        borderRadius: 5,
    },
    header: {
        marginTop: -40, 
        marginLeft: 15,
    },
    question: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 120,
        marginTop: 140,
        fontWeight: 700,
    },
    button: {
        backgroundColor: '#5772FF',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
        width: '100%',
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
    pretendardFont: {
        fontFamily: 'Pretendard',
    },
});

export default LearningMethod;
