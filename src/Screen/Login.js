
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons';

import loginImg from "../../Assets/login.png";
import { colors, defaultStyle } from '../utils/styles';
import { Toast } from 'toastify-react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../utils/AuthContext';
import Services from '../utils/Services';


GoogleSignin.configure({
    webClientId: '910527659496-es54rlvaa02fd08f15j7ougmrfghj2tu.apps.googleusercontent.com',
});

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const { userData, setUserData } = useContext(AuthContext);

    //   sign in using email and password 
    const submitHandler = async () => {
        if (email == "" || password == "") {
            Toast.error("Please enter email and password");
            return;
        }

        auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                // console.log(res)
                setUser(res.user);
                setUserData(res.user);
                Toast.success("Login Success");
                Services.setUserAuth(res.user);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            }
            )
    }
    // sign in using google 
    async function onGoogleButtonPress() {
        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const userInfo = await GoogleSignin.signIn();
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
            setUserData(userInfo?.user);
            setUser(userInfo?.user);
            await Services.setUserAuth(userInfo?.user);
            Toast.success("Logged in");
        } catch (error) {
            Toast.error(error)
        }
    }

    // console.log(user)
    return (
        <SafeAreaView style={{ backgroundColor: colors.color1, flex: 1 }}>
            <View style={styles.container}>
                <Image source={loginImg} style={{ width: "100%", height: 250 }} />
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.color3, paddingTop: 10, textAlign: 'center' }}> Welcome back </Text>
                    <Text style={{ color: colors.color3, textAlign: 'center' }}> Login to continue </Text>
                </View>
                <View style={{ marginTop: 20, gap: 10 }}>
                    <View>
                        <TextInput placeholder="Email" placeholderTextColor={colors.color3} style={defaultStyle.inputStyle} value={email} onChangeText={setEmail} />
                    </View>
                    <View>
                        <TextInput placeholder="Password" placeholderTextColor={colors.color3} style={defaultStyle.inputStyle} value={password} onChangeText={setPassword} />
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: colors.color3, textAlign: 'right', fontSize: 12 }}> Forgot your password? </Text>
                    </TouchableOpacity>
                    <Button style={styles.btn} onPress={submitHandler}> <Text style={{ color: colors.color3, fontSize: 11 }}> Login </Text> </Button>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: colors.color2, borderRadius: 100, marginTop: 10, gap: 10 }}
                        onPress={onGoogleButtonPress}
                    >
                        <IonIcon name="logo-google" size={20} style={{ color: colors.color3 }} />
                        <Text style={{ color: colors.color3, fontSize: 13 }} > Login With google </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: colors.color3, fontSize: 12, textAlign: 'center', fontWeight: 900 }}> Don’t have an account? </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
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