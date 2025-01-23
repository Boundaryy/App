import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../../styles/global';

const cards = [1, 2, 3, 1, 2, 3];
const { width } = Dimensions.get('window');
const numColumns = 3;
const cardSize = 120;

const formatTime = (milliseconds) => {
    const secs = Math.floor(milliseconds / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10); 
    const mins = Math.floor(secs / 60);
    return `${mins.toString().padStart(2, '0')}:${(secs % 60).toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
};

const CardGame = () => {
    const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
    const [matched, setMatched] = useState(Array(cards.length).fill(false));
    const [firstCard, setFirstCard] = useState(null);
    const [timer, setTimer] = useState(0); 
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const initialDelay = setTimeout(() => {
            setFlipped(Array(cards.length).fill(true)); 
            const flipBackTimer = setTimeout(() => {
                setFlipped(Array(cards.length).fill(false)); 
                setIsTimerRunning(true); 
            }, 1500); 
            return () => clearTimeout(flipBackTimer);
        }, 2000); 
        return () => clearTimeout(initialDelay);
    }, []);
    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 10); 
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning]);

    const handleCardPress = (index) => {
        if (flipped[index] || matched[index]) return;
        const newFlipped = [...flipped];
        newFlipped[index] = true;
        setFlipped(newFlipped);

        if (firstCard === null) {
            setFirstCard(index);
        } else {
            if (cards[firstCard] === cards[index]) {
                const newMatched = [...matched];
                newMatched[firstCard] = true;
                newMatched[index] = true;
                setMatched(newMatched);
            } else {
                setTimeout(() => {
                    const resetFlipped = flipped.map((f, i) =>
                        i === firstCard || i === index ? false : f
                    );
                    setFlipped(resetFlipped);
                }, 1000);
            }
            setFirstCard(null);
        }
    };

    const handleBackClick = () => {
        router.back();
    };

    useEffect(() => {
        if (matched.every(Boolean)) {
            setIsTimerRunning(false);
            router.push('/child/training/point');
        }
    }, [matched]);

    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, styles.text]}>카드 뒤집기</Text>
                <Text style={[globalStyles.description]}>모양이 똑같은 카드 2장을 선택하세요.</Text>

                <Text style={styles.timer}>{formatTime(timer)}</Text>

                <View style={styles.board}>
                    {cards.map((card, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleCardPress(index)}
                            style={[styles.card, (flipped[index] || matched[index]) && styles.cardFlipped]}
                        >
                            {flipped[index] || matched[index] ? (
                                <Text style={styles.cardText}>{card}</Text>
                            ) : (
                                <Image source={require('../../../assets/card.svg')} style={styles.cardImage} />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', 
        marginTop: 50,
    },
    card: {
        width: cardSize,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 8,
        marginHorizontal: 13.5,
        marginVertical: 13.5,
        backgroundColor: '#fff',
    },
    cardFlipped: {
        borderColor: '#5772FF',
        borderWidth: 4,
        backgroundColor: '#FFFFFF',
    },
    cardText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#5772FF',
        fontFamily: 'Pretendard',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    timer: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 20,
        marginBottom: -30,
        marginLeft: 120,
    },
});

export default CardGame;
