import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const cards = [1, 2, 1, 2, 3, 3]; 

const CardGame = () => {
    const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
    const [matched, setMatched] = useState(Array(cards.length).fill(false)); // 매칭된 카드 상태 추가
    const [firstCard, setFirstCard] = useState(null);

    const handleCardPress = (index) => {
        if (flipped[index] || matched[index]) return; // 이미 뒤집히거나 매칭된 카드 클릭 방지

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

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>카드 뒤집기</Text>
                <Text style={styles.timer}>30sec</Text>
            </View>
            <View style={styles.board}>
                {cards.map((card, index) => (
                    <TouchableOpacity 
                        key={index} 
                        onPress={() => handleCardPress(index)} 
                        style={styles.card}
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
    header: {
        width: 200, 
        marginLeft: 46, 
        marginTop: 60,
    },
    timer: {
        fontSize: 18,
        fontWeight: '700',
        color: 'blue',
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        width: 160,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        margin: 5,
        transition: '0.3s',
    },
    cardText: {
        fontSize: 24,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain', 
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
        flexShrink: 1,
        whiteSpace: 'nowrap',
    },
});

export default CardGame;
