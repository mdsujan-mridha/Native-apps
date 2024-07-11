import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        if (!email) {
            Alert.alert('Error', 'Please enter your email address.');
            return;
        }

        try {
            // Replace with your API endpoint
            const response = await axios.post(`${SERVER_URL}/api/v1/password/forgot`, { email });
            Alert.alert('Success', 'A password reset link has been sent to your email address.');
            console.log(response);
            navigation.goBack(); // Navigate back or to a different screen
        } catch (error) {
            // Log error details for debugging
            console.error('Error:', error.response ? error.response.data : error.message);
            Alert.alert('Error', 'Failed to send password reset email. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.label}>Enter your email address to reset your password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Email address"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default ForgotPassword;
