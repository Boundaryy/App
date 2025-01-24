import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useRouter } from 'expo-router';

const Button = ({ title, onPress, disabled }) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={!disabled ? onPress : null}
            style={[
                styles.button,
                disabled && styles.buttonDisabled,
            ]}
        >
            <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
);

const LearningMethod = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [tutorialStep, setTutorialStep] = useState(1);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const router = useRouter();

    const options = [
        "옵션 1: 인사해야 한다.",
        "옵션 2: 인사하지 않아도 된다.",
        "옵션 3: 상황에 따라 다르다.",
        "옵션 4: 더 생각해봐야 한다.",
    ];

    useEffect(() => {
        if (tutorialStep <= 2) {
            const interval = setInterval(() => {
                setIsHighlighted((prev) => !prev);
            }, 500);

            return () => clearInterval(interval);
        }
    }, [tutorialStep]);

    const handleNextTutorial = () => {
        setTutorialStep((prevStep) => prevStep + 1);
    };

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
        console.log(`Option ${index + 1} selected: ${options[index]}`);
    };

    const handleNextClick = () => {
        if (selectedOption !== null) {
            console.log('Next button clicked');
            router.push('/child/training/resolve');
        }
    };

    console.log('Rendering LearningMethod Component');

    return (
        <View style={[globalStyles.container, { flex: 1 }]}>
            <View
                style={[
                    styles.progressBarContainer,
                    tutorialStep === 1 && isHighlighted && styles.highlightBox,
                ]}
            >
                <View style={styles.progressBar}>
                    <View style={styles.progress} />
                </View>
            </View>

            <View style={[globalStyles.container, { backgroundColor: '#F3F4F6', flex: 1 }]}>
                <View style={styles.header}>
                    <Text style={[globalStyles.subtitle, styles.pretendardFont]}>학습 방법</Text>
                    <Text style={[globalStyles.description, styles.pretendardFont]}>
                        아래 예시와 같이 학습이 진행되요.
                    </Text>
                </View>

                <Text style={[styles.question, styles.pretendardFont]}>
                    철수와 영희가 내 앞에 있다.{"\n"}인사를 해야 할까?
                </Text>

                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.choiceBox,
                            selectedOption === index && styles.choiceBoxSelected,
                            tutorialStep === 2 && selectedOption === index && isHighlighted && styles.highlightBox,
                            tutorialStep === 2 && isHighlighted && styles.redBorder,
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
                        disabled={selectedOption === null}
                    />
                </View>
            </View>

            {tutorialStep <= 2 && (
                <View
                    style={[
                        styles.tutorialOverlay,
                        tutorialStep === 1
                            ? { ...styles.tutorialCenter, top: 480 }
                            : { ...styles.tutorialSubtitle, top: 220 },
                    ]}
                >
                    <Text style={[styles.tutorialTitle, styles.pretendardFont]}>
                        {tutorialStep === 1 ? "문제 진행 상태" : "정답 선택"}
                    </Text>
                    <Text style={[styles.tutorialText, styles.pretendardFont]}>
                        {tutorialStep === 1
                            ? "문제를 풀 때 마다 파란색이 증가합니다."
                            : "여기서 질문에 대한 답을 고르면 됩니다."}
                    </Text>
                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={handleNextTutorial}
                    >
                        <Text style={[styles.nextButtonText, styles.pretendardFont]}>
                            {tutorialStep === 2 ? "완료" : "다음"}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            {tutorialStep <= 2 && (
                <View
                    style={[
                        styles.transparentLayer,
                        tutorialStep === 1 ? styles.transparentBottom : styles.transparentTop,
                    ]}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    progressBarContainer: {
        alignItems: 'center',
        marginTop: 50,
        borderWidth: 3,
        borderColor: 'transparent',
        borderRadius: 5,
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
    highlightBox: {
        borderWidth: 3,
        borderColor: 'red',
        marginHorizontal: 28,
    },
    tutorialOverlay: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        zIndex: 20,
        position: 'absolute',
    },
    tutorialCenter: {
        top: '40%',
        left: '10%',
        right: '10%',
    },
    tutorialSubtitle: {
        position: 'absolute',
        left: '10%',
        right: '10%',
    },
    tutorialTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
    },
    tutorialText: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    nextButton: {
        backgroundColor: '#5772FF',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 260,
        height: 36,
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    pretendardFont: {
        fontFamily: 'Pretendard',
    },
    transparentLayer: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        zIndex: 10,
    },
    transparentTop: {
        top: 0,
        height: '50%',
    },
    transparentBottom: {
        bottom: 0,
        height: '50%',
    },
    redBorder: {
        borderWidth: 3,
        borderColor: 'red',
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
        backgroundColor: '#D3D3D3',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Pretendard',
        fontWeight: '600',
    },
    buttonTextDisabled: {
        color: '#A9A9A9',
    },
});

export default LearningMethod;
