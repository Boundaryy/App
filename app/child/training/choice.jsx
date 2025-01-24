import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useRouter } from 'expo-router';

const Button = ({ title, onPress }) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
);

const LearningMethod = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0); 
    const [selectedOption, setSelectedOption] = useState(null);
    const router = useRouter();

    const questions = [
        {
            question: "철수와 영희가 내 앞에 있다.\n인사를 해야 할까?",
            options: [
                "옵션 1: 인사해야 한다.",
                "옵션 2: 인사하지 않아도 된다.",
                "옵션 3: 상황에 따라 다르다.",
                "옵션 4: 더 생각해봐야 한다.",
            ],
        },
        {
            question: "공공장소에서는 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 떠들지 않는다.",
                "옵션 2: 음악을 크게 듣는다.",
                "옵션 3: 친구와 장난친다.",
                "옵션 4: 전화통화를 한다.",
            ],
        },
        {
            question: "동료가 실수를 했다면 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 비난한다.",
                "옵션 2: 함께 해결한다.",
                "옵션 3: 무시한다.",
                "옵션 4: 상사에게 바로 보고한다.",
            ],
        },
    ];

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
        console.log(`Option ${index + 1} selected: ${questions[currentQuestion].options[index]}`);
    };

    const handleNextClick = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1); 
            setSelectedOption(null); 
        } else {
            router.push('/child/training/choicecontent');
        }
    };

    return (
        <View style={[globalStyles.container, { flex: 1 }]}>
            <View style={styles.progressBarContainer}>
                <View style={styles.progressBar}>
                    <View
                        style={[
                            styles.progress,
                            { width: `${((currentQuestion + 1) / questions.length) * 100}%` },
                        ]}
                    />
                </View>
            </View>

            <View style={[globalStyles.container, { backgroundColor: '#F3F4F6', flex: 1 }]}>
                <View style={styles.header}>
                    <Text style={[globalStyles.subtitle, styles.pretendardFont]}>
                        {currentQuestion + 1}/{questions.length}
                    </Text>
                    <Text style={[globalStyles.description, styles.pretendardFont]}>
                        {currentQuestion + 1}번 문항이에요.
                    </Text>
                </View>

                <Text style={[styles.question, styles.pretendardFont]}>
                    {questions[currentQuestion].question}
                </Text>

                {questions[currentQuestion].options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.choiceBox,
                            selectedOption === index && styles.choiceBoxSelected,
                        ]}
                        onPress={() => handleOptionSelect(index)}
                    >
                        <Text
                            style={[
                                styles.choiceText,
                                styles.pretendardFont,
                                selectedOption === index && styles.choiceTextSelected,
                            ]}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}

                <View style={styles.buttonContainer}>
                    <Button
                        title="다음으로"
                        onPress={handleNextClick}
                    />
                </View>
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
        marginBottom: 80,
        marginTop: 140,
        fontWeight: '700',
        fontFamily: 'Pretendard',
    },
    choiceBox: {
        borderWidth: 3,
        borderColor: '#5772FF',
        backgroundColor: '#FFFFFF',
        padding: 19,
        borderRadius: 10,
        marginVertical: 5,
        width: 320,
        height: 56,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    choiceBoxSelected: {
        backgroundColor: '#5772FF',
    },
    choiceText: {
        color: '#5772FF',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Pretendard',
    },
    choiceTextSelected: {
        color: '#FFFFFF',
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 310,
        height: 50,
        backgroundColor: '#5772FF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -180,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Pretendard',
        fontWeight: '600',
    },
    pretendardFont: {
        fontFamily: 'Pretendard',
    },
});

export default LearningMethod;
