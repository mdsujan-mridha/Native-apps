
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../components/AppHeader'
import { colors, defaultStyle } from '../utils/styles'
import { propertyType } from '../utils/fakeData'
import { Button } from 'react-native-paper'

const LandLordForm = ({ navigation }) => {
    return (
        <>
            <AppHeader
                title={"পোস্টে এর ধাপ"}
                headerBg={colors.color1}
                back={true}
                iconColor={"#fff"}
                navigation={navigation}
                right="more-vertical"

            />
            <View style={defaultStyle.basicView}>
                <Text style={{ color: 'red', fontSize: 17, fontWeight: 700 }}> ভাড়ার ধরন </Text>
                <Text style={{ color: colors.color1, fontSize: 17, paddingTop: 20 }}> আপনি কি ভাড়া দিতে চান? </Text>
                <View style={defaultStyle.rowView}>
                    {
                        propertyType &&
                        propertyType.map((item, index) => (
                            <Button key={index} style={{ width: 100, backgroundColor: colors.color3 }}>{item}</Button>
                        ))
                    }
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: colors.color1, fontSize: 17 }}> আপনি কাদের ভাড়া দিতে চান? </Text>
                    <FlatList
                    
                    >

                    </FlatList>
                </View>
            </View>
        </>
    )
}

export default LandLordForm

const styles = StyleSheet.create({})