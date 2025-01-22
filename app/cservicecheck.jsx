import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

const ServiceCheck = () => {
    const router = useRouter();
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

    const openPdf = (pdfName) => {
        if (Platform.OS === 'web') {
            window.open(`/assets/${pdfName}`, '_blank');
        } else {
            console.log('Native PDF viewer will be implemented');
        }
    };

    const handleNext = () => {
        if (!checked[1] || !checked[2]) {
            Alert.alert(
                "알림",
                "필수 약관을 선택해주세요.",
                [{ text: "확인" }]
            );
            return;
        }
        router.push('/child/signup');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo2.svg')} style={styles.logo} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>학습자님</Text>
                <Text style={styles.title}>아래 약관을 확인해주세요.</Text>
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

                <View style={styles.divider} />

                <View style={styles.checkboxItem}>
                    <TouchableOpacity
                        style={[styles.radio, checked[1] && styles.radioChecked]}
                        onPress={() => toggleCheck(1)}
                    >
                        {checked[1] && <View style={styles.radioInner} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openPdf('terms.pdf')}>
                        <Text style={[styles.checkboxText, styles.linkText]}>
                            이용약관 동의(필수)
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.checkboxItem}>
                    <TouchableOpacity
                        style={[styles.radio, checked[2] && styles.radioChecked]}
                        onPress={() => toggleCheck(2)}
                    >
                        {checked[2] && <View style={styles.radioInner} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openPdf('privacy.pdf')}>
                        <Text style={[styles.checkboxText, styles.linkText]}>
                            개인정보 수집 및 이용동의(필수)
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Button title="다음으로" onPress={handleNext} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
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
        marginTop: 80,
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
        color: '#757575',
    },
    linkText: {
        textDecorationLine: 'underline',
        color: '#5772FF',
    },
    divider: {
        height: 1,
        backgroundColor: '#D4D4D4',
        width: '90%',
        marginVertical: 6,
    },
});

export default ServiceCheck;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
// import Button from '../components/Button';
// import Pdf from 'react-native-pdf'; 

// const ServiceCheck = () => {
//     const [checked, setChecked] = useState([false, false, false]);
//     const [pdfVisible, setPdfVisible] = useState(false); 

//     const toggleCheck = (index) => {
//         const newChecked = [...checked];
//         newChecked[index] = !newChecked[index];
//         setChecked(newChecked);
//     };

//     useEffect(() => {
//         const allChecked = checked.slice(1).every((value) => value);
//         setChecked((prev) => [allChecked, ...prev.slice(1)]);
//     }, [checked[1], checked[2]]);

//     const toggleAllCheck = () => {
//         const allChecked = checked[0];
//         setChecked(checked.map(() => !allChecked));
//     };

//     const openPdf = (pdfName) => {
//         if (Platform.OS === 'web') {
//             window.open(`/assets/${pdfName}`, '_blank');
//         } else if (Platform.OS === 'android' || Platform.OS === 'ios') {
//             setPdfVisible(true); 
//         }
//     };

//     const closePdfViewer = () => {
//         setPdfVisible(false); 
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <View style={styles.logoContainer}>
//                 <Image source={require('../assets/logo2.svg')} style={styles.logo} />
//             </View>
//             <View style={styles.titleContainer}>
//                 <Text style={styles.title}>고객님</Text>
//                 <Text style={styles.title}>환영합니다!</Text>
//             </View>
//             <View style={styles.checkboxContainer}>
//                 <View style={styles.checkboxItem}>
//                     <TouchableOpacity
//                         style={[styles.radio, checked[0] && styles.radioChecked]}
//                         onPress={toggleAllCheck}
//                     >
//                         {checked[0] && <View style={styles.radioInner} />}
//                     </TouchableOpacity>
//                     <Text style={styles.checkboxText}>약관 전체동의</Text>
//                 </View>

//                 <View style={styles.divider} />

//                 <View style={styles.checkboxItem}>
//                     <TouchableOpacity
//                         style={[styles.radio, checked[1] && styles.radioChecked]}
//                         onPress={() => toggleCheck(1)}
//                     >
//                         {checked[1] && <View style={styles.radioInner} />}
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => openPdf('terms.pdf')}>
//                         <Text style={[styles.checkboxText, styles.linkText]}>
//                             이용약관 동의(필수)
//                         </Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.checkboxItem}>
//                     <TouchableOpacity
//                         style={[styles.radio, checked[2] && styles.radioChecked]}
//                         onPress={() => toggleCheck(2)}
//                     >
//                         {checked[2] && <View style={styles.radioInner} />}
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => openPdf('privacy.pdf')}>
//                         <Text style={[styles.checkboxText, styles.linkText]}>
//                             개인정보 수집 및 이용동의(필수)
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             {pdfVisible && (
//                 <View style={styles.pdfContainer}>
//                     <Pdf
//                         source={{uri: '/assets/terms.pdf', cache: true}} 
//                         onError={(error) => console.log(error)}
//                         onPressLink={(uri) => console.log(`Clicked link: ${uri}`)}
//                     />
//                     <TouchableOpacity onPress={closePdfViewer} style={styles.closeButton}>
//                         <Text style={styles.closeButtonText}>닫기</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}

//             <Button title="다음으로" onPress={() => { /* 다음 단계로 이동하는 로직 구현 필요*/ }} />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         paddingBottom: 20,
//         backgroundColor: '#F3F4F6',
//     },
//     logoContainer: {
//         width: '100%',
//         alignItems: 'flex-start',
//         marginBottom: 20,
//     },
//     logo: {
//         width: 60,
//         height: 64,
//         marginLeft: 20,
//     },
//     titleContainer: {
//         marginBottom: 20,
//         alignItems: 'flex-start',
//         width: '100%',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'left',
//         fontFamily: 'Pretendard',
//         marginLeft: 20,
//     },
//     checkboxContainer: {
//         marginTop: 80,
//         width: '100%',
//         marginBottom: 40,
//         marginLeft: 40,
//     },
//     checkboxItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 10,
//     },
//     radio: {
//         width: 20,
//         height: 20,
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: '#B4B4B4',
//         marginRight: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     radioChecked: {
//         borderColor: 'transparent',
//         backgroundColor: '#5772FF',
//     },
//     radioInner: {
//         width: 10,
//         height: 10,
//         borderRadius: 5,
//         backgroundColor: '#FFF',
//     },
//     checkboxText: {
//         fontSize: 16,
//         fontFamily: 'Pretendard',
//         color: '#757575',
//     },
//     linkText: {
//         textDecorationLine: 'underline',
//         color: '#5772FF',
//     },
//     divider: {
//         height: 1,
//         backgroundColor: '#D4D4D4',
//         width: '90%',
//         marginVertical: 6,
//     },
//     pdfContainer: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     closeButton: {
//         position: 'absolute',
//         top: 20,
//         right: 20,
//         backgroundColor: '#fff',
//         padding: 10,
//         borderRadius: 5,
//     },
//     closeButtonText: {
//         color: '#000',
//         fontWeight: 'bold',
//     },
// });

// export default ServiceCheck;

