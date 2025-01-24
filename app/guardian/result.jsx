import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { globalStyles } from '../../styles/global';
import { BarButton } from '../../components/Guardian_choice';

const App = () => {
    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, styles.text]}>학습 결과</Text>
                <Text style={[globalStyles.description]}>최근 학습 결과를 확인해보세요.</Text>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    style={{
                        maxHeight: Dimensions.get('window').height - 200, 
                    }}
                >
                    <BarButton
                        title="선택지 1"
                        explain="이 선택지를 클릭하세요."
                        toLink="/guardian/resolve"
                    />
                    <BarButton
                        title="선택지 2"
                        explain="이 선택지를 클릭하세요."
                        toLink="/guardian/resolve"
                    />
                    <BarButton  
                        title="선택지 3"
                        explain="이 선택지를 클릭하세요."
                        toLink="/guardian/resolve"
                    />
                    <BarButton
                        title="선택지 4"
                        explain="이 선택지를 클릭하세요."
                        toLink="/guardian/resolve"
                    />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 20,
    },
    description: {
        color: '#565656',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '300',
        marginBottom: -10,
        marginTop: 30,
        fontFamily: 'Pretendard',
    },
    text: {
        fontFamily: 'Pretendard',
    },
});

export default App;
