

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/styles'
import propertyImg from "../../Assets/property.png";
import { Title } from 'react-native-paper';

import IonIcon from "react-native-vector-icons/Ionicons";

export const demoData = [
    {
        _id: 1,
        img: propertyImg,
        title: "আগামি ১লা জানুয়ারি মাস থেকে ধানমন্ডিতে ফ্লাট ভাড়া দেওয়া হবে।",
        bedRoom: "২ বেড রুম",
        washRoom: "২ বাথরুম",
        diningRoom: "ডাইনিং",
        balcony: "২ ব্যলকুনি",
        price: "20000",
        location: "ধানমন্ডি ঢাকা-১২০৫,বাংলাদশে"
    },
    {
        _id: 2,
        img: propertyImg,
        title: "আগামি ১লা জানুয়ারি মাস থেকে ধানমন্ডিতে ফ্লাট ভাড়া দেওয়া হবে।",
        bedRoom: "২ বেড রুম",
        washRoom: "২ বাথরুম",
        diningRoom: "ডাইনিং",
        balcony: "২ ব্যলকুনি",
        price: "20000",
        location: "ধানমন্ডি ঢাকা-১২০৫,বাংলাদশে"
    },
    {
        _id: 3,
        img: propertyImg,
        title: "আগামি ১লা জানুয়ারি মাস থেকে ধানমন্ডিতে ফ্লাট ভাড়া দেওয়া হবে।",
        bedRoom: "২ বেড রুম",
        washRoom: "২ বাথরুম",
        diningRoom: "ডাইনিং",
        balcony: "২ ব্যলকুনি",
        price: "20000",
        location: "ধানমন্ডি ঢাকা-১২০৫,বাংলাদশে"
    }

]


const NewPost = () => {
    return (
        <View>
            <Text style={styles.txt}>নতুন পোস্ট সমূহ</Text>
            <View>
                <View style={{ marginTop: 10, gap: 5 }}>
                    {
                        demoData &&
                        demoData.map((item) => (
                            <ScrollView horizontal key={item?._id}
                                contentContainerStyle={{
                                    alignItems: "center",
                                    gap: 10,
                                    backgroundColor: colors.color3,
                                    padding: 10,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    height: 120,
                                    width: 'auto'
                                }}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Image source={item.img} style={{ width: 150, height: 100, borderRadius: 10 }} />
                                <View>
                                    <Title style={{ fontSize: 11 }}> {item?.title} </Title>
                                    <View style={{ display: "flex", alignItems: "center", gap: 5, flexDirection: "row" }}>
                                        <IonIcon name="storefront-outline" size={15} color={colors.color1} />
                                        <Text style={{ fontSize: 10, color: colors.color1 }}> {item.bedRoom} ,{item?.diningRoom} ,{item?.washRoom} , {item?.balcony} </Text>
                                    </View>
                                    <View style={{ display: "flex", alignItems: "center", gap: 5, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 11, color: colors.color1 }}>ভাড়া: ${item.price} </Text>
                                        <IonIcon name="location-outline" size={15} color={colors.color1} />
                                        <Text style={{ fontSize: 11, color: colors.color1 }}> {item?.location} </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default NewPost

const styles = StyleSheet.create({
    txt: {
        color: colors.color1,
        fontSize: 11,
        fontWeight: "bold",
    },
    content: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    }
})