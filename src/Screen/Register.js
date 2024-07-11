import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import registrationImg from "../../Assets/registration.png";
import { colors, defaultImg, defaultStyle } from '../utils/styles';
import { Button, PaperProvider } from 'react-native-paper';
import { Toast } from 'toastify-react-native';
import IonIcon from "react-native-vector-icons/Ionicons";
import Entypo from 'react-native-vector-icons/Entypo';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, registerUser } from '../redux/action/userAction';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector((state) => state.user);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState(defaultImg);
    
    // Function to open camera
    const openCameraLib = async () => {
        const result = await launchCamera();
        setImageUrl(result.assets[0]?.uri);
    };

    // Function to open image gallery
    const openGalleryLib = async () => {
        const result = await launchImageLibrary();
        setImageUrl(result.assets[0]?.uri);
    };

    const submitHandler = async () => {
        if (!email || !password || !name || !phoneNumber || !location) {
            Toast.error("Please fill in all input fields");
            return;
        }
        const formData = new FormData();
        if (imageUrl) {
            formData.append('file', {
                name: 'profile_image.png',
                type: 'image/png',
                uri: imageUrl,
            });
        }
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phoneNumber', phoneNumber);
        formData.append('location', location);
        dispatch(registerUser(formData));
    };

    useEffect(() => {
        if (error) {
            Toast.error(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            Toast.success("Registration Successful");
            // navigation.navigate('Login');
        }
    }, [error, isAuthenticated, dispatch]);

    return (
        <PaperProvider>
            <SafeAreaView style={{ backgroundColor: colors.color1, flex: 1 }}>
                <View style={styles.container}>
                    <Image source={registrationImg} style={{ width: "100%", height: 300 }} />
                    <View style={{ ...styles.profileContainer, marginTop: 10 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.color3, paddingTop: 10, textAlign: 'center' }}>
                                Create New Account!
                            </Text>
                        </View>
                        <View style={styles.imgContainer}>
                            <Image source={{ uri: imageUrl }} style={styles.image} />
                            <TouchableOpacity style={{ alignItems: "flex-end", top: -20 }} onPress={openCameraLib}>
                                <Entypo name="pencil" size={24} color={colors.color8} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, gap: 10, paddingLeft: 5, paddingRight: 5 }}>
                        <View style={styles.contentView}>
                            <IonIcon name="person-outline" size={30} color={colors.color3} style={styles.iconStyle} />
                            <TextInput placeholder="Name" placeholderTextColor={colors.color3} style={{ ...defaultStyle.inputStyle, width: "100%", paddingLeft: 40 }} value={name} onChangeText={setName} />
                        </View>
                        <View style={styles.contentView}>
                            <IonIcon name="call-outline" size={30} color={colors.color3} style={styles.iconStyle} />
                            <TextInput
                                placeholder="PhoneNumber"
                                placeholderTextColor={colors.color3}
                                style={{ ...defaultStyle.inputStyle, width: "100%", paddingLeft: 40 }}
                                value={phoneNumber}
                                keyboardType='numeric'
                                onChangeText={setPhoneNumber}
                            />
                        </View>
                        <View style={styles.contentView}>
                            <IonIcon name="location-outline" size={30} color={colors.color3} style={styles.iconStyle} />
                            <TextInput placeholder="Location" placeholderTextColor={colors.color3} style={{ ...defaultStyle.inputStyle, width: "100%", paddingLeft: 40 }} value={location} onChangeText={setLocation} />
                        </View>
                        <View style={styles.contentView}>
                            <IonIcon name="mail-outline" size={30} color={colors.color3} style={styles.iconStyle} />
                            <TextInput placeholder="Email" placeholderTextColor={colors.color3} style={{ ...defaultStyle.inputStyle, width: "100%", paddingLeft: 40 }} value={email} onChangeText={setEmail} />
                        </View>
                        <View style={styles.contentView}>
                            <IonIcon name="lock-closed-outline" size={30} color={colors.color3} style={styles.iconStyle} />
                            <TextInput placeholder="Password" placeholderTextColor={colors.color3} style={{ ...defaultStyle.inputStyle, width: "100%", paddingLeft: 40 }} value={password} onChangeText={setPassword} secureTextEntry />
                        </View>
                        <Button style={styles.btn} onPress={submitHandler}>
                            <Text style={{ color: colors.color3, fontSize: 11 }}>Sign Up</Text>
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    contentView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        position: 'relative'
    },
    profileContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        position: 'absolute',
        left: 5
    },
    txt: {
        color: 'black',
        fontSize: 18,
        fontWeight: "bold",
    },
    btn: {
        backgroundColor: colors.color2,
        marginTop: 5,
        borderRadius: 100,
    },
    imgContainer: {},
    textContainer: {
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: colors.color4,
        borderWidth: 3,
    },
});
