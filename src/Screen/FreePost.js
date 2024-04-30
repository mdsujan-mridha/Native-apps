import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppHeader from '../components/AppHeader'
import { colors, defaultStyle } from '../utils/styles'
import { freePostData } from '../utils/fakeData'
import IonIcon from "react-native-vector-icons/Ionicons";
const FreePost = ({ navigation }) => {
    return (
        <>
            <AppHeader
                title={"একটি অপশন সিলেক্ট করুন"}
                headerBg={colors.color1}
                back={true}
                iconColor={"#fff"}
                navigation={navigation}
                right="more-vertical"
                rightFunction={() => console.log("right")}
            />
            <ScrollView>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 10, marginBottom: 10 }}>
                    {
                        freePostData &&
                        freePostData.map((item) => (
                            <TouchableOpacity
                                key={item._id}
                                style={{ ...defaultStyle.rowView, justifyContent: 'space-between', width: '100%', height: 100, backgroundColor: colors.color3, borderRadius: 10, padding: 10 }}
                                onPress={() => navigation.navigate(item.link)}
                            >
                                <View style={{ width: 50 }}>
                                    <Image source={item.icon} style={styles.image} />
                                </View>
                                <View style={{ width: 200 }}>
                                    <Text style={{ color: colors.color1, fontSize: 17, fontWeight: 900 }}>{item.title}</Text>
                                    <Text style={{ color: 'red' }}> {item?.subTitle} </Text>
                                </View>
                                <View style={{ width: 30 }}>
                                    <IonIcon name="arrow-forward-circle-outline" size={30} color={colors.color1} />
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>

        </>
    )
}

export default FreePost

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,


    }
})