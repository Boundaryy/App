import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../../styles/global';

const cards = [1, 2, 3, 1, 2, 3];
const { width } = Dimensions.get('window');
const numColumns = 3;
const cardSize = 120;

const CardGame = () => {
    const [flipped, setFlipped] = useState(Array(cards.length).fill(true)); 
    const [matched, setMatched] = useState(Array(cards.length).fill(false));
    const [firstCard, setFirstCard] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlipped(Array(cards.length).fill(false)); 
        }, 1500);

        return () => clearTimeout(timer); 
    }, []);

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
            router.push('/child/training/point');
        }
    }, [matched]);

    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, styles.text]}>카드 뒤집기</Text>
                <Text style={[globalStyles.description]}>모양이 똑같은 카드 2장을 선택하세요.</Text>

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
        justifyContent: 'space-between',
        marginTop: 70,
    },
    card: {
        width: cardSize,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 8,
        marginHorizontal: 30,
        marginVertical: 13.5,
        backgroundColor: '#fff',
    },
    cardFlipped: {
        borderColor: '#5772FF',
        borderWidth: 3,
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
});

export default CardGame;
