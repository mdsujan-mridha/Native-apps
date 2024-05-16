
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/styles'
import IonIcon from "react-native-vector-icons/Ionicons";

const PropertyCard = ({ navigate, item, id }) => {

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigate.navigate('propertyDetails', { id })}
            style={{ width: '90%' }}
        >
            <View style={{ backgroundColor: colors.color3, borderRadius: 10 }}>
                <View style={{ width: '100%' }}>
                    <Image source={{ uri: item?.image }} style={styles.img} />
                </View>
                <View style={{ marginTop: 5, width: '100%' }}>
                    <Text style={styles.title}> {item?.title} </Text>
                    <View style={{ ...styles.content, justifyContent: "space-between", paddingHorizontal: 5, paddingVertical: 10 }}>
                        <View style={{ display: 'flex', width: "50%" }}>
                            <View style={styles.content}>
                                <IonIcon name="bed-outline" size={20} color={colors.color1} />
                                <Text style={styles.textUtils}>বেডরুম: {item?.bedRoom} </Text>
                            </View>
                            <View style={styles.content}>
                                <IonIcon name="file-tray-outline" size={20} color={colors.color1} />
                                <Text style={styles.textUtils}>বাথরুম: {item?.washRoom} </Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', width: "30%" }}>
                            <View style={styles.content}>
                                <IonIcon name="checkmark-circle-outline" size={20} color={colors.color1} />
                                <Text style={styles.textUtils}>ডাইনিং স্পেস: {item?.diningRoom} </Text>
                            </View>
                            <View style={styles.content}>
                                <IonIcon name="checkmark-circle-outline" size={20} color={colors.color1} />
                                <Text style={styles.textUtils}>বারান্দা: {item?.barandha} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.content, paddingVertical: 10, gap: 5 }}>
                        <IonIcon name="location-outline" size={20} color={colors.color1} />
                        <Text style={styles.textUtils}> {item?.location} </Text>
                        <Text style={styles.textUtils}> ভাড়া:$ {item?.rentPrice}  </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PropertyCard

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    input: {
        backgroundColor: colors.color3,
        borderRadius: 10,
        height: 36,
        paddingTop: 5,
        paddingLeft: 10,
        width: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10
    },
    txt: {
        color: colors.color1,
        fontSize: 11,
        fontWeight: 'bold',
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        color: colors.color1,
        fontWeight: 'bold',
        fontSize: 11,
        textAlign: 'justify',
        paddingHorizontal: 2
    },
    textUtils: {
        color: colors.color1,
        fontWeight: 'bold',
        fontSize: 10
    },
})