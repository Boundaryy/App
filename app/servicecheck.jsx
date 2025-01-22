    import React, { useState, useEffect } from 'react';
    import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
    import Button from '../components/Button';

    const ServiceCheck = () => {
        const [checked, setChecked] = useState([false, false, false]);
        const toggleCheck = (index) => {
            const newChecked = [...checked];
            newChecked[index] = !newChecked[index];
            setChecked(newChecked);
        };

        useEffect(() => {
            const allChecked = checked.slice(1).every((value) => value);
            setChecked((prev) => [allChecked, ...prev.slice(1)]);
        }, [checked[1], checked[2]]); 


        const toggleAllCheck = () => {
            const allChecked = checked[0]; 
            setChecked(checked.map(() => !allChecked)); 
        };

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo2.svg')} style={styles.logo} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>고객님</Text>
                    <Text style={styles.title}>환영합니다!</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxItem}>
                        <TouchableOpacity
                            style={[styles.radio, checked[0] && styles.radioChecked]}
                            onPress={toggleAllCheck}
                        >
                            {checked[0] && <View style={styles.radioInner} />}
                        </TouchableOpacity>
                        <Text style={styles.checkboxText}>약관 전체동의</Text>
                    </View>

                    {["이용약관 동의(필수)", "개인정보 수집 및 이용동의(필수)"].map((item, index) => (
                        <View key={index} style={styles.checkboxItem}>
                            <TouchableOpacity
                                style={[styles.radio, checked[index + 1] && styles.radioChecked]}
                                onPress={() => toggleCheck(index + 1)}
                            >
                                {checked[index + 1] && <View style={styles.radioInner} />}
                            </TouchableOpacity>
                            <Text style={styles.checkboxText}>{item}</Text>
                        </View>
                    ))}
                </View>
                <Button title="다음으로" onPress={() => { /* 다음 단계로 이동하는 로직 구현 필요*/ }} />
            </ScrollView>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#F3F4F6',
        },
        logoContainer: {
            width: '100%',
            alignItems: 'flex-start',
            marginBottom: 20,
        },
        logo: {
            width: 60,
            height: 64,
            marginLeft: 20,
        },
        titleContainer: {
            marginBottom: 20,
            alignItems: 'flex-start',
            width: '100%',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'left',
            fontFamily: 'Pretendard',
            marginLeft: 20,
        },
        checkboxContainer: {
            width: '100%',
            marginBottom: 40,
            marginLeft: 40,
        },
        checkboxItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
        },
        radio: {
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B4B4B4',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        radioChecked: {
            borderColor: 'transparent',
            backgroundColor: '#5772FF',
        },
        radioInner: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#FFF',
        },
        checkboxText: {
            fontSize: 16,
            fontFamily: 'Pretendard',
        },
    });

    export default ServiceCheck;
