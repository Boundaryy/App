import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const cards = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]; 
const { width } = Dimensions.get('window');
const cardSize = width / 4 - 5; 

const CardGame = () => {
    const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
    const [matched, setMatched] = useState(Array(cards.length).fill(false)); 
    const [firstCard, setFirstCard] = useState(null);
    const router = useRouter();

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
                        (i === firstCard || i === index ? false : f)
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
            router.push('/child/training/cardresult'); // 모든 카드가 매칭되었을 때 이동
        }
    }, [matched]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackClick}>
                <Text style={styles.backText}>뒤로가기</Text>
            </TouchableOpacity>
            <Text style={styles.title}>카드 뒤집기 게임</Text>
            <Text style={styles.subtitle}>즐겁게 게임을 시작해 보세요!</Text>

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
                            <Image source={require('../../../assets/card.png')} style={styles.cardImage} />
                        )}
                    </TouchableOpacity>
                ))}
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
        marginTop: 20, 
    },
    card: {
        width: cardSize,
        height: cardSize * 1.2, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 8,
        margin: 5,
        backgroundColor: '#fff',
    },
    cardFlipped: {
        backgroundColor: '#eee',
    },
    cardText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    backButton: {
        position: 'absolute', 
        top: 60, 
        left: 36, 
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1, 
    },
    backText: {
        fontSize: 18,
        color: '#808080',
        fontWeight: '400',
    },
    title: {
        position: 'absolute',
        top: 100, 
        left: 36,
        fontSize: 26, 
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        position: 'absolute',
        top: 140, 
        left: 36, 
        fontSize: 16,
        color: '#808080', 
    },
});

export default CardGame;
