import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import registrationImg from "../../Assets/registration.png";
import { colors, defaultStyle } from '../utils/styles';
import { Button } from 'react-native-paper';
import { Toast } from 'toastify-react-native';
import IonIcon from "react-native-vector-icons/Ionicons";
import auth from '@react-native-firebase/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = () => {
        if (email == "" || password == "" || name == "") {
            Toast.error("Please enter email and password");
            return;
        }

        auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                userCredential.user.updateProfile({
                    displayName: name,
                    photoURL: "https://www.pngkey.com/png/detail/230-2301779_user-profile-default-avatar-png-white.png"
                })
                // console.log(userCredential)

            })
            .catch(err => {
                console.log(err)
                Toast.error(err.message);
            })

    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.color1, flex: 1 }}>
            <View style={styles.container}>
                <Image source={registrationImg} style={{ width: "100%", height: 300 }} />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.color3, paddingTop: 10, textAlign: 'center' }}> Create New Account! </Text>
                </View>
                <View style={{ marginTop: 20, gap: 10, paddingLeft: 5, paddingRight: 5 }}>
                    <View style={styles.contentView}>
                        <IonIcon name="person-outline" size={30} color={colors.color3} style={styles.iconStyle} />
                        <TextInput placeholder="Name" placeholderTextColor={colors.color3} style={{ ...defaultStyle.inputStyle, width: "100%", paddingLeft: 40 }} value={name} onChangeText={setName} />
                    </View>
                    <View style={styles.contentView}>
                        <IonIcon name="mail-outline" size={30} color={colors.color3} style={styles.iconStyle} />
                        <TextInput placeholder="Email" placeholderTextColor={colors.color3} style={{ ...defaultStyle.inputStyle, width: "100%", paddingLeft: 40 }} value={email} onChangeText={setEmail} />
                    </View>
                    <View style={styles.contentView}>
                        <IonIcon name="lock-closed-outline" size={30} color={colors.color3} style={styles.iconStyle} />
                        <TextInput placeholder="Password" placeholderTextColor={colors.color3} style={{ ...defaultStyle.inputStyle, width: "100%", paddingLeft: 40 }} value={password} onChangeText={setPassword} />
                    </View>
                    <Button style={styles.btn}> <Text style={{ color: colors.color3, fontSize: 11 }} onPress={submitHandler}> sign up </Text> </Button>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Register

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
    }
})