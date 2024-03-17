

import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import { colors } from '../utils/styles'
import IonIcon from "react-native-vector-icons/Ionicons";
import { Button } from 'react-native-paper';
import { demoData } from '../components/NewPost';

const categories = [
    "Bachelor",
    "Family House",
    "seat rent",
    "sublet",
    "Female",
    "Flat Rent",
    "Others"
]

const Properties = ({ navigation }) => {

    const [category, setCategory] = useState("");

    return (
        <>
            <AppHeader
                title={"Properties List"}
                headerBg={colors.color1}
                iconColor={"#fff"}
                menu={true}
                optionalBadge={5}
                right="more-vertical"
                rightFunction={() => console.log("right")}
                optionalIcon="bell"
                navigation={navigation}
                optionalFunction={() => console.log("optionalBtnPress")}
            />

            <View>
                <View style={{ backgroundColor: colors.color1, height: 70, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        placeholder='Search properties...'
                        style={{
                            backgroundColor: colors.color3,
                            color: colors.color3,
                            padding: 10,
                            borderRadius: 10,
                            height: 50,
                            margin: 10,
                            width: '93%',
                        }}
                    />
                    <IonIcon name="search-outline" size={25} color={colors.color1} style={{ marginLeft: -50 }} />
                </View>
                <View style={{ backgroundColor: colors.color7, height: 120 }}>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            alignItems: "center",
                            gap: 10,
                            backgroundColor: colors.color7,
                            paddingBottom: 5
                        }}
                        showsHorizontalScrollIndicator={false}
                    >

                        {
                            categories &&
                            categories?.map((item, index) => (
                                <Button
                                    key={index}
                                    style={{
                                        backgroundColor: colors.color3,
                                        borderRadius: 100,
                                        margin: 5,
                                        height: 40,

                                    }}
                                    onPress={() => setCategory(item)}
                                >
                                    <Text> {item} </Text>
                                </Button>
                            ))

                        }
                        <Button
                            style={{
                                backgroundColor: colors.color3,
                                borderRadius: 100,
                                margin: 5,
                                height: 40,
                            }}
                        >
                            <Text> Clear All </Text>
                        </Button>

                    </ScrollView>

                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: colors.color7,
                            paddingBottom: 5,

                        }}
                        showsHorizontalScrollIndicator={false}
                    >

                        <Text style={{ ...styles.txt, paddingLeft: 10 }}> সর্বোচ্চ টাকা: </Text>
                        <TextInput
                            placeholder='50000'
                            style={styles.input}
                        />
                        <Text style={styles.txt}> সর্বোনিম্ন টাকা: </Text>
                        <TextInput
                            placeholder='5000'
                            style={styles.input}
                        />
                        <Text style={styles.txt}> এলাকা: </Text>
                        <TextInput
                            placeholder='ধানমন্ডি'
                            style={styles.input}
                        />
                        <Button
                            style={{
                                backgroundColor: colors.color3,
                                borderRadius: 100,
                                margin: 5,
                                height: 40,
                            }}
                        >
                            <Text> Clear All </Text>
                        </Button>
                    </ScrollView>

                </View>
            </View>
            <ScrollView contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center",gap:15 }} showsVerticalScrollIndicator={false}>
                {
                    demoData &&
                    demoData.map((item) => (
                        <View key={item?._id} style={{backgroundColor:colors.color3,borderRadius:5}}>
                            <Image source={item?.img} style={{marginTop:5}}/>
                            <View style={{marginTop:5}}>
                                <Text style={{ color: colors.color1, fontWeight: 'bold', fontSize: 16 }}> {item?.title} </Text>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10 }}>
                                    <View style={{ display: 'flex', width: "50%" }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <IonIcon name="bed-outline" size={25} color={colors.color1} />
                                            <Text style={{ color: colors.color1, fontWeight: 'bold', fontSize: 16 }}> {item?.bedRoom} </Text>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <IonIcon name="file-tray-outline" size={25} color={colors.color1} />
                                            <Text style={{ color: colors.color1, fontWeight: 'bold', fontSize: 16 }}> {item?.washRoom} </Text>
                                        </View>
                                    </View>
                                    <View style={{ display: 'flex', width: "30%" }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <IonIcon name="checkmark-circle-outline" size={25} color={colors.color1} />
                                            <Text style={{ color: colors.color1, fontWeight: 'bold', fontSize: 16 }}> {item?.diningRoom} </Text>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <IonIcon name="checkmark-circle-outline" size={25} color={colors.color1} />
                                            <Text style={{ color: colors.color1, fontWeight: 'bold', fontSize: 16 }}> {item?.balcony} </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',paddingVertical: 10,gap:5 }}>
                                    <IonIcon name="location-outline" size={25} color={colors.color1} />
                                    <Text style={{ color: colors.color1, fontWeight: 'bold', fontSize: 16 }}> {item?.location} </Text>
                                    <Text style={{ color:colors.color1,fontWeight:"bold",fontSize:16 }}> ভাড়া:$ {item?.price}  </Text>
                                </View>
                               
                            </View>
                        </View>
                    ))
                }
            </ScrollView>

        </>
    )
}

export default Properties

const styles = StyleSheet.create({

    input: {
        backgroundColor: colors.color3,
        borderRadius: 10,
        height: 36,
        paddingTop: 5,
        paddingLeft: 10,
        width: '15%',
    },
    txt: {
        color: colors.color1,
        fontSize: 16,
        fontWeight: 'bold',

    }

})