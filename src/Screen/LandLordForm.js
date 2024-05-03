
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import { colors, defaultStyle } from '../utils/styles'
import { lookingFor, propertyType } from '../utils/fakeData'
import { Checkbox, Provider } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'
import IonIcon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'


const LandLordForm = ({ navigation }) => {

    const [looking, setLooking] = useState("");
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    const data = ['Wifi', 'Lift', 'Gas', 'Parking'];
    const [selectedItems, setSelectedItems] = useState([]);
    const [rentPrice, setRentPrice] = useState("");
    const [bedRoom, setBedRoom] = useState(1); // Initialize as a number
    const [washRoom, setWashRoom] = useState(1);
    const [barandha, setBarandha] = useState(1);
    const [florNo, setFlorNo] = useState(1);
    const [selectedPropertyType, setSelectedPropertyType] = useState([]);
    const [flatSize, setFlatSize] = useState(1200)
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [location, setLocation] = useState("Dhanmondhi");

    const handleDateChange = (selectedDate) => {
        setShowDatePicker(false);
        setDate(selectedDate);
    };


    const handleCheckBox = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };



    const incrementField = (field, setter) => {
        setter(prevState => prevState + 1);
    };

    const decrementField = (field, setter) => {
        setter(prevState => Math.max(prevState - 1, 0)); // Ensure the value doesn't go below 0
    };

    const incrementFlorNo = () => {
        setFlorNo(florNo + 1); // Update directly as a number
    };
    const decrementFlorNo = () => {
        setFlorNo(Math.max(florNo - 1, 0)); // Ensure the value doesn't go below 0
    }

    const toggleItemSelection = (item) => {
        if (selectedPropertyType.includes(item)) {
            setSelectedPropertyType(selectedPropertyType.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedPropertyType([...selectedPropertyType, item]);
        }
    };

    // console.log("Property Type:", selectedPropertyType);

    console.log(date);
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
                <ScrollView style={defaultStyle.basicView}>
                    <View style={{ marginBottom: 50 }}>

                        <Text style={{ color: 'red', fontSize: 20, fontWeight: 700 }}> ভাড়ার ধরন </Text>
                        <Text style={{ color: colors.color1, fontSize: 17, paddingTop: 20, fontWeight: 900 }}> আপনি কি ভাড়া দিতে চান? </Text>
                        <View style={defaultStyle.rowView}>
                            {propertyType &&
                                propertyType.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            styles.touchableOpacity,
                                            {
                                                backgroundColor: selectedItems.includes(item) ? 'lightblue' : 'white',
                                            },
                                        ]}
                                        onPress={() => toggleItemSelection(item)}
                                    >
                                        <Text
                                            style={[
                                                styles.text,
                                                {
                                                    color: selectedItems.includes(item) ? 'blue' : 'black',
                                                },
                                            ]}
                                        >
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: colors.color1, fontSize: 17, fontWeight: 900 }}> আপনি কাদের ভাড়া দিতে চান? </Text>
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
                                <View style={{ ...defaultStyle.rowView, gap: 20 }}>
                                    <TouchableOpacity style={defaultStyle.tinyButton} onPress={() => decrementField(bedRoom, setBedRoom)}>
                                        <IonIcon name="remove-outline" size={25} color={colors.color3} />
                                    </TouchableOpacity>
                                    <TextInput
                                        style={styles.input}
                                        value={bedRoom.toString()} // Convert number to string for TextInput
                                        keyboardType="numeric"
                                        onChangeText={(text) => setBedRoom(parseInt(text) || 0)} // Ensure only numeric input
                                    />
                                    <TouchableOpacity style={defaultStyle.tinyButton} onPress={() => incrementField(bedRoom, setBedRoom)}>
                                        <IonIcon name="add-outline" size={25} color={colors.color3} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ ...styles.topMargin, ...defaultStyle.rowView, justifyContent: 'space-between' }}>
                                <Text style={defaultStyle.fontStyle}> ওয়াশ রুম: </Text>
                                <View style={{ ...defaultStyle.rowView, gap: 20 }}>
                                    <TouchableOpacity style={defaultStyle.tinyButton} onPress={() => decrementField(washRoom, setWashRoom)}>
                                        <IonIcon name="remove-outline" size={25} color={colors.color3} />
                                    </TouchableOpacity>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        value={washRoom.toString()}
                                        onChangeText={(text) => setWashRoom(parseInt(text) || 0)}
                                    />
                                    <TouchableOpacity style={defaultStyle.tinyButton} onPress={() => incrementField(washRoom, setWashRoom)}>
                                        <IonIcon name="add-outline" size={25} color={colors.color3} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ ...styles.topMargin, ...defaultStyle.rowView, justifyContent: 'space-between' }}>
                                <Text style={defaultStyle.fontStyle}> বারিন্দা সংখ্যা: </Text>
                                <View style={{ ...defaultStyle.rowView, gap: 20 }}>
                                    <TouchableOpacity style={defaultStyle.tinyButton} onPress={() => decrementField(barandha, setBarandha)}>
                                        <IonIcon name="remove-outline" size={25} color={colors.color3} />
                                    </TouchableOpacity>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        value={barandha.toString()}
                                        onChangeText={(text) => setBarandha(parseInt(text) || 0)}
                                    />
                                    <TouchableOpacity style={defaultStyle.tinyButton} onPress={() => incrementField(barandha, setBarandha)}>
                                        <IonIcon name="add-outline" size={25} color={colors.color3} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ ...styles.topMargin, ...defaultStyle.rowView, justifyContent: 'space-between' }}>
                                <Text style={defaultStyle.fontStyle}> ফ্লাটটি কত তলাতে: </Text>
                                <View style={{ ...defaultStyle.rowView, gap: 20 }}>
                                    <TouchableOpacity style={defaultStyle.tinyButton} onPress={decrementFlorNo}>
                                        <IonIcon name="remove-outline" size={25} color={colors.color3} />
                                    </TouchableOpacity>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        value={florNo.toString()}
                                        onChangeText={(text) => setFlorNo(parseInt(text) || 0)}
                                    />
                                    <TouchableOpacity style={defaultStyle.tinyButton} onPress={incrementFlorNo}>
                                        <IonIcon name="add-outline" size={25} color={colors.color3} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 900, color: 'red', marginTop: 10 }}> অসন্যান্য সুবিধা </Text>
                                <View>
                                    {data.map((item, index) => (
                                        <View key={index} style={styles.checkboxContainer}>
                                            <View>
                                                <Checkbox.Item
                                                    label=""
                                                    status={selectedItems.includes(item) ? 'checked' : 'unchecked'}
                                                    onPress={() => handleCheckBox(item)}
                                                    style={styles.checkbox}
                                                />

                                            </View>
                                            <Text style={{ fontSize: 17, fontWeight: 900, color: colors.color1 }}>{item}</Text>
                                        </View>
                                    ))}

                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700, color: 'red', marginTop: 10 }}> ভাড়ার বিবরণ </Text>
                                <Text style={styles.rentDetailsTxt}> ভাড়ার পরিমাণ </Text>
                                <TextInput
                                    placeholder='1000'
                                    value={rentPrice}
                                    onChangeText={setRentPrice}
                                    style={styles.rentDetailsInput}
                                />
                                <Text style={styles.rentDetailsTxt}> স্কোয়ার ফিট </Text>
                                <TextInput
                                    style={styles.rentDetailsInput}
                                    value={flatSize.toString()}
                                    onChangeText={(text) => setFlatSize(parseInt(text) || 0)}
                                    keyboardType='numeric'

                                />
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.rentDetailsTxt}>বিদ্যুৎ বিল</Text>
                                <TextInput
                                    style={{ ...styles.rentDetailsInput }}
                                />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.rentDetailsTxt}>গ্যাস বিল</Text>
                                <TextInput
                                    style={{ ...styles.rentDetailsInput }}
                                />
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.rentDetailsTxt}>বিদ্যুৎ বিল</Text>
                                <TextInput
                                    style={{ ...styles.rentDetailsInput }}
                                />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.rentDetailsTxt}>গ্যাস বিল</Text>
                                <TextInput
                                    style={{ ...styles.rentDetailsInput }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.rentDetailsTxt}>কোন তারিখ থেকে ভাড়া হবে</Text>
                            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                                <TextInput
                                    style={{ width: '100%', height: 40, borderRadius: 10, borderWidth: 1, borderColor: colors.color1, padding: 10 }}
                                    value={date.toLocaleDateString()} // Convert date to string
                                    editable={false} // Prevent manual editing of the date
                                />
                            </TouchableOpacity>
                            {showDatePicker && (
                                <DatePicker
                                    modal
                                    open={showDatePicker}
                                    date={date}
                                    onDateChange={handleDateChange}
                                    mode="date"
                                    textColor="#000" // Customize text color
                                    style={styles.datePicker}
                                    onCancel={() => {
                                        setShowDatePicker(false)
                                    }}
                                    onConfirm={(date) => {
                                        setDate(date)
                                        setShowDatePicker(false)
                                    }
                                    }
                                />
                            )}
                        </View>
                        <Text style={styles.rentDetailsTxt}> এলাকা * </Text>
                        <TextInput
                            style={styles.rentDetailsInput}
                            value={location}
                            onChangeText={setLocation}
                        />
                    </View>
                </ScrollView>
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
        textAlign: 'center',

    },

    checkboxContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    touchableOpacity: {
        width: 100,
        height: 40,
        borderRadius: 100,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rentDetailsTxt: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.color1,
        marginTop: 10,
        marginBottom: 5
    },
    rentDetailsInput: {

        height: 60,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: colors.color1,
        color: colors.color1,
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5,
        padding: 10
    },
    datePicker: {
        marginTop: 10,
    },

})