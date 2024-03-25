
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import loginImg from "../../Assets/login.png";
import { colors, defaultStyle } from '../utils/styles';
import { Toast } from 'toastify-react-native';


const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = () => {
        if (email == "" || password == "") {
            Toast.error("Please enter email and password");
            return;
        }
        console.log({ email, password })
        Toast.success("Logged in")

    }

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
                    <Button style={styles.btn}> <Text style={{ color: colors.color3, fontSize: 11 }} onPress={submitHandler}> Login </Text> </Button>
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