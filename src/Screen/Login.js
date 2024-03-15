

import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = () => {

        console.log({ email, password })

    }

    return (
        <SafeAreaView>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Text style={styles.txt}> Login </Text>
                    <IonIcon name="log-in-outline" size={30} color="black" />
                </View>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Enter your email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Enter your password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                    />
                    <Button onPress={submitHandler} style={styles.btn}> <Text style={styles.txtBtn}> Login </Text> </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
    txt: {
        color: 'black',
        fontSize: 18,
        fontWeight: "bold",
    },
    btn: {
        marginTop: 10,
        backgroundColor: 'black',
        width: '80%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    txtBtn: {
        color: "white",
        fontSize: 18,
        textAlign: 'center',
    }




})