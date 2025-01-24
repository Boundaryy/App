import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useRouter } from 'expo-router';

const Button = ({ title, onPress, disabled }) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, disabled && styles.buttonDisabled]}
            disabled={disabled}
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
        {
            question: "버스에서 자리가 없다면 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 서서 간다.",
                "옵션 2: 억지로 자리를 만든다.",
                "옵션 3: 다른 사람에게 자리를 양보한다.",
                "옵션 4: 기사님께 항의한다.",
            ],
        },
        {
            question: "친구가 슬퍼하고 있다면 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 무관심하게 본다.",
                "옵션 2: 위로해준다.",
                "옵션 3: 함께 울어준다.",
                "옵션 4: 모른 척한다.",
            ],
        },
        {
            question: "시험 준비를 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 미리 계획을 세운다.",
                "옵션 2: 벼락치기 공부를 한다.",
                "옵션 3: 공부하지 않는다.",
                "옵션 4: 친구에게 맡긴다.",
            ],
        },
        {
            question: "길을 잃었을 때는 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 경찰에게 도움을 요청한다.",
                "옵션 2: 계속 걸어다닌다.",
                "옵션 3: 큰소리로 외친다.",
                "옵션 4: 울고만 있는다.",
            ],
        },
        {
            question: "동생이 잘못을 했다면 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 혼을 낸다.",
                "옵션 2: 이유를 물어본다.",
                "옵션 3: 그냥 넘어간다.",
                "옵션 4: 부모님께 말한다.",
            ],
        },
        {
            question: "친구가 거짓말을 하면 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 왜 거짓말을 했는지 묻는다.",
                "옵션 2: 화를 낸다.",
                "옵션 3: 관계를 끊는다.",
                "옵션 4: 용서한다.",
            ],
        },
        {
            question: "다른 사람이 도움을 요청하면 \n어떻게 해야 할까?",
            options: [
                "옵션 1: 도와준다.",
                "옵션 2: 모른 척한다.",
                "옵션 3: 조건을 건다.",
                "옵션 4: 고민한다.",
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
                        disabled={selectedOption === null} // 옵션을 선택하지 않았을 때 비활성화
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
    buttonDisabled: {
        backgroundColor: '#B0B0B0',
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
