
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import { colors, defaultStyle } from '../utils/styles'
import { colorList, lookingFor, propertyType } from '../utils/fakeData'
import { Button, Provider } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'
import IonIcon from 'react-native-vector-icons/Ionicons';

const LandLordForm = ({ navigation }) => {

    const [looking, setLooking] = useState("");
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);

    // console.log(looking);

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
            <Provider>
                <View style={defaultStyle.basicView}>
                    <Text style={{ color: 'red', fontSize: 20, fontWeight: 700 }}> ভাড়ার ধরন </Text>
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
                        <View style={{ marginTop: 10 }}>
                            <DropDown
                                // label={"আপনি কাদের ভাড়া দিতে চান?"}
                                mode={"outlined"}
                                visible={showMultiSelectDropDown}
                                showDropDown={() => setShowMultiSelectDropDown(true)}
                                onDismiss={() => setShowMultiSelectDropDown(false)}
                                value={looking}
                                setValue={setLooking}
                                list={lookingFor}
                                multiSelect
                                placeholder='Bachelor'
                            />
                        </View>
                        <View style={{ ...styles.topMargin, ...defaultStyle.rowView, justifyContent: 'space-between' }}>
                            <Text style={defaultStyle.fontStyle}> বেড রুম: </Text>
                            <View style={{...defaultStyle.rowView,gap:20}}>
                                <TouchableOpacity style={defaultStyle.tinyButton}>
                                    <IonIcon name="remove-outline" size={25} color={colors.color3} />
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.input}
                                    placeholder='1'
                                />

                                <TouchableOpacity style={defaultStyle.tinyButton}>
                                    <IonIcon name="add-outline" size={25} color={colors.color3} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Provider>
        </>
    )
}

export default LandLordForm

const styles = StyleSheet.create({
    topMargin: {
        marginTop: 10
    },
    input: {
        width: 90,
        height: 40,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: colors.color1,
        color: colors.color1,
        fontSize: 17,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },


})