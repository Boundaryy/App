import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/global';

const LearningMethod = () => {
    const [selectedOption, setSelectedOption] = useState(null); // 선택된 옵션 상태
    const [tutorialStep, setTutorialStep] = useState(1); // 튜토리얼 단계
    const [isHighlighted, setIsHighlighted] = useState(false); // 강조 상태

    const options = [
        "철수와 영희는 내 친구니까 인사를 해야 한다.",
        "철수와 영희는 내 친구니까 인사를 해야 한다.",
        "철수와 영희는 내 친구니까 인사를 해야 한다.",
        "철수와 영희는 내 친구니까 인사를 해야 한다.",
    ];

    useEffect(() => {
        if (tutorialStep <= 2) {
            const interval = setInterval(() => {
                setIsHighlighted((prev) => !prev); // 강조 상태를 토글
            }, 500); // 500ms 간격으로 깜빡임

            return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
        }
    }, [tutorialStep]);

    const handleNextTutorial = () => {
        setTutorialStep((prevStep) => prevStep + 1);
    };

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    return (
        <View style={globalStyles.container}>
            {/* 프로그레스 바 */}
            <View
                style={[
                    styles.progressBarContainer,
                    tutorialStep === 1 && isHighlighted && styles.highlightBox, // 프로그레스 바 깜빡임 효과
                ]}
            >
                <View style={styles.progressBar}>
                    <View style={styles.progress} />
                </View>
            </View>

            {/* 메인 컨텐츠 */}
            <View style={[globalStyles.container, { backgroundColor: '#F3F4F6' }]}>
                <View style={styles.header}>
                    <Text style={[globalStyles.subtitle]}>학습 방법</Text>
                    <Text style={[globalStyles.description]}>
                        아래 예시와 같이 학습이 진행되요.
                    </Text>
                </View>

                <Text style={[styles.question, styles.pretendardFont]}>
                    철수와 영희가 내 앞에 있다.{"\n"}인사를 해야 할까?
                </Text>

                {/* 4지선다 문항 */}
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.choiceBox,
                            selectedOption === index && styles.choiceBoxSelected, // 선택 상태에 따른 스타일
                            tutorialStep === 2 && isHighlighted && styles.highlightBox, // 항목 깜빡임 효과
                        ]}
                        onPress={() => handleOptionSelect(index)} // 선택 상태 업데이트
                    >
                        <Text
                            style={[
                                styles.choiceText,
                                styles.pretendardFont, // Pretendard 폰트 적용
                                selectedOption === index && styles.choiceTextSelected, // 선택 상태에 따른 텍스트 스타일
                            ]}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* 튜토리얼 설명 오버레이 */}
            {tutorialStep <= 2 && (
                <View
                    style={[
                        styles.tutorialOverlay,
                        tutorialStep === 1
                            ? styles.tutorialCenter // 프로그레스 바 설명은 중앙에 표시
                            : styles.tutorialSubtitle, // 문항 설명은 subtitle 아래에 표시
                    ]}
                >
                    <Text style={styles.tutorialText}>
                        {tutorialStep === 1
                            ? "이건 문제를 풀 때마다 조금씩 올라갑니다."
                            : "여기서 질문에 대한 답을 하나 고르면 됩니다."}
                    </Text>
                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={handleNextTutorial}
                    >
                        <Text style={styles.nextButtonText}>
                            {tutorialStep === 2 ? "완료" : "다음"}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    progressBarContainer: {
        alignItems: 'center',
        marginTop: 50,
        borderWidth: 3,
        borderColor: 'transparent', // 기본 테두리 투명
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
        marginBottom: 120,
        marginTop: 140,
        fontWeight: '700',
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
    },
    choiceTextSelected: {
        color: '#FFFFFF',
    },
    highlightBox: {
        borderWidth: 3,
        borderColor: 'red', // 깜빡임을 위한 빨간 테두리
        marginHorizontal: 28, // 양쪽에서 5만큼 줄어듦
    },
    tutorialOverlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        padding: 20,
        zIndex: 10,
    },
    tutorialCenter: {
        top: '40%', 
        left: '10%',
        right: '10%',
    },
    tutorialSubtitle: {
        top: 100, // subtitle 아래에 배치
        left: 20,
        right: 20,
    },
    tutorialText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    nextButton: {
        backgroundColor: '#5772FF',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    pretendardFont: {
        fontFamily: 'Pretendard',
    },
});

export default LearningMethod;
