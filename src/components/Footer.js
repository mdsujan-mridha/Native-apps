import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/styles'
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const Footer = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }} style={styles.content}>
                <IonIcon name="home-outline" size={25} color={colors.color3} />
                <Text style={styles.txt}> Home </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Properties") }} style={styles.content}>
                <IonIcon name="list-outline" size={25} color={colors.color3} />
                <Text style={styles.txt}> All Adds </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Wishlist") }} style={styles.content}>
                <IonIcon name="heart-outline" size={25} color={colors.color3} />
                <Text style={styles.txt}> Wishlist </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Profile") }} style={styles.content}>
                <IonIcon name="person-outline" size={25} color={colors.color3} />
                <Text style={styles.txt}> Profile </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        height: 60,
        elevation: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    content: {

        display: 'flex',
        justifyContent: "center",
        alignItems: "center",

    },
    txt: {
        color: colors.color3,
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
    }
})