import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const cards = [1, 2, 1, 2, 3, 3]; // 카드 예시 (목록 생성)

const CardGame = () => {
    const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
    const [firstCard, setFirstCard] = useState(null);

    const handleCardPress = (index) => {
        if (flipped[index]) return;

        const newFlipped = [...flipped];
        newFlipped[index] = true;
        setFlipped(newFlipped);

        if (firstCard === null) {
            // setFirstCard(index);
        } else {
            // 두 번째 카드가 눌렸을 때
            // if (cards[firstCard] !== cards[index]) {
            //     setTimeout(() => {
            //         const resetFlipped = flipped.map((f, i) => (i === firstCard || i === index ? false : f));
            //         setFlipped(resetFlipped);
            //     }, 1000);
            // }
            // setFirstCard(null);
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
                    <View style={styles.card}>
                    <TouchableOpacity key={index} onPress={() => handleCardPress(index)} style={styles.frontcard}>
                        <Text style={styles.cardText}>{flipped[index] ? card : '?'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity key={index} onPress={() => handleCardPress(index)} style={styles.backcard}>
                        <Text style={styles.cardText}>{flipped[index] ? card : '?'}</Text>
                    </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: 80,
    },
    timer: {
        fontSize: 18,
        fontWeight: '700',
        color: 'blue'
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    frontcard: {
        width: 160,
        height: 220,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        transition: 0.3,
    },
    backcard: {
        width: 160,
        height: 220,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        transition: 0.3,
    },
    card: {
        transition: 0.3, /* 추가 */
        transform: [{ rotate: '0deg' }], // 45도 회전
    },
    cardHovered: {
        transform: [{ rotate: '0deg' }], // 45도 회전
    },
    cardText: {
        fontSize: 24,
    },
    header: {
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingTop: 60,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
    },
    headerSubtitle: {
        color: '#898989',
        fontSize: 14,
        margin: 8,
        fontWeight: '200',
    },
});

export default CardGame;
