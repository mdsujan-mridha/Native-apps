
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppHeader from '../components/AppHeader'
import { colors, defaultImg, defaultStyle } from '../utils/styles'
import { lookingFor, propertyType } from '../utils/fakeData'
import { Checkbox, Provider, Button as PaperBtn } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'
import IonIcon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'
import Modal from "react-native-modal";
import { Dimensions } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import mime from "mime";
import { AuthContext } from '../utils/AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, createProperty } from '../redux/action/propertyAction'
import { Toast } from 'toastify-react-native'
import { NEW_PROPERTY_RESET } from '../redux/constant/propertyConstant'
import axios from 'axios'

const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
    Platform.OS === "ios"
        ? Dimensions.get("window").height
        : require("react-native-extra-dimensions-android").get(
            "REAL_WINDOW_HEIGHT"
        );


const LandLordForm = ({ navigation }) => {
    const { userData, setUserData } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { error, success } = useSelector((state) => state.newProperty)
    const [title, setTitle] = useState("আগামি ১লা জুন থেকে ২ রুমে ফ্লাট বাসা ভাড়া দেওয়া  হইবে")
    const [phoneNumber, setPhoneNumber] = useState("01788888888");
    const [looking, setLooking] = useState("");
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    const data = ['Wifi', 'Lift', 'Gas', 'Parking'];
    const [selectedItems, setSelectedItems] = useState([]);
    const [rentPrice, setRentPrice] = useState("");
    const [bedRoom, setBedRoom] = useState(1); // Initialize as a number
    const [washRoom, setWashRoom] = useState(1);
    const [barandha, setBarandha] = useState(1);
    const [florNo, setFlorNo] = useState(1);
    const [category, setCategory] = useState("");
    const [flatSize, setFlatSize] = useState(1200)
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [location, setLocation] = useState("Dhanmondhi");
    const [gasBill, setGasBill] = useState("0");
    const [electricityBill, setElectricityBill] = useState("0");
    const [waterBill, setWaterBill] = useState("0");
    const [serviceCharge, setServiceCharge] = useState("0");
    const [isModalVisible, setModalVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState(defaultImg);
    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    // console.log(imageUrl);

    // function for handle terms and condition 
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    //  handle modal for image 
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    //   function for handle date 
    const handleDateChange = (selectedDate) => {
        setShowDatePicker(false);
        setDate(selectedDate);
    };

    //   function for red checkbox selected item 
    const handleCheckBox = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    // function for increment input value 
    const incrementField = (field, setter) => {
        setter(prevState => prevState + 1);
    };
    // function for decrement input value 
    const decrementField = (field, setter) => {
        setter(prevState => Math.max(prevState - 1, 0)); // Ensure the value doesn't go below 0
    };
    // function for increment flor No input value 
    const incrementFlorNo = () => {
        setFlorNo(florNo + 1); // Update directly as a number
    };
    // function for decrement flor No input value 
    const decrementFlorNo = () => {
        setFlorNo(Math.max(florNo - 1, 0)); // Ensure the value doesn't go below 0
    }
    //   function for property type selection 
    // const toggleItemSelection = (item) => {
    //     if (selectedPropertyType.includes(item)) {
    //         setSelectedPropertyType(selectedPropertyType.filter((selectedItem) => selectedItem !== item));
    //     } else {
    //         setSelectedPropertyType([...selectedPropertyType, item]);
    //     }
    // };

    // function for open camera 
    const openCameraLib = async () => {

        const result = await launchCamera();
        setImageUrl(result.assets[0]?.uri);
    }

    const openGalleryLib = async () => {
        const result = await launchImageLibrary();
        setImageUrl(result.assets[0]?.uri);
    }

    useEffect(() => {
        // Check the validity of input fields and update the state of the submit button accordingly
        const isValid =
            phoneNumber.trim() !== "" &&
            rentPrice.trim() !== "" &&
            flatSize !== 0 &&
            location.trim() !== "" &&
            imageUrl.trim() !== "" &&
            isChecked;
        setIsSubmitDisabled(!isValid);
    }, [phoneNumber, rentPrice, flatSize, location, imageUrl, isChecked]);

    const handleSubmit = async () => {
        const requestData = {
            title,
            rentPrice,
            location,
            bedRoom,
            washRoom,
            barandha,
            category,
            phoneNumber,
            image: imageUrl,
            flatSize,
            date,
            looking,
            gasBill,
            electricityBill,
            waterBill,
            serviceCharge,
            others: selectedItems,
            florNo,
            user: userData.uid,
        };

        try {
            fetch(`https://rental-property-mobile-apps.vercel.app/api/v1/property/new`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            })
                .then(res => res.json())
                .then(data => console.log(data))

        } catch (error) {
            console.error(error);
        }
    };





    useEffect(() => {

        if (error) {
            Toast.error(error);
            console.log(error);
            dispatch(clearErrors());
        }
        if (success) {
            Toast.success("You have post new Property")
        }
        dispatch({ type: NEW_PROPERTY_RESET });

    }, [error, success, dispatch])

    // console.log(category);
    // console.log(selectedItems);
    // console.log(typeof(selectedItems));
    // console.log(typeof (looking));
    // console.log(userData.uid);
    console.log(imageUrl);
    
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
                                    <PaperBtn
                                        key={index}
                                        style={{
                                            backgroundColor: colors.color7,
                                            borderRadius: 100,
                                            marginTop: 5
                                        }}
                                        onPress={() => setCategory(item)}
                                    >
                                        {item}

                                    </PaperBtn>
                                ))}
                        </View>

                        <View>
                            <Text style={styles.rentDetailsTxt}> হেডলাইন যুক্ত করুন * </Text>
                            <TextInput
                                style={{ ...styles.rentDetailsInput, padding: 10 }}
                                value={title}
                                onChangeText={setTitle}
                            />
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
                                    value={electricityBill}
                                    onChangeText={setElectricityBill}
                                />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.rentDetailsTxt}>গ্যাস বিল</Text>
                                <TextInput
                                    style={{ ...styles.rentDetailsInput }}
                                    value={gasBill}
                                    onChangeText={setGasBill}
                                />
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.rentDetailsTxt}>পানি  বিল</Text>
                                <TextInput
                                    style={{ ...styles.rentDetailsInput }}
                                    value={waterBill}
                                    onChangeText={setWaterBill}
                                />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={styles.rentDetailsTxt}>সার্ভিস চার্জ</Text>
                                <TextInput
                                    style={{ ...styles.rentDetailsInput }}
                                    value={serviceCharge}
                                    onChangeText={setServiceCharge}
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
                        <Text style={styles.rentDetailsTxt}> আপনার ফোন নাম্বার দিন * </Text>
                        <TextInput
                            style={styles.rentDetailsInput}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                        <View style={{ marginTop: 10 }} >
                            <TouchableOpacity onPress={toggleModal} style={{ ...defaultStyle.rowView, justifyContent: 'center', height: 40, backgroundColor: colors.color1, borderRadius: 100 }}>
                                <Text style={{ color: colors.color3 }}> বাসার ছবি আপলোড করুন* </Text>
                            </TouchableOpacity>
                            <Modal
                                isVisible={isModalVisible}
                                deviceHeight={deviceHeight}
                                deviceWidth={deviceWidth}
                                style={{ backgroundColor: 'white', borderRadius: 10 }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text style={{ textAlign: 'center', paddingTop: 20, fontSize: 18, color: 'red' }}> বাসায় ছবি আপলোড করুন* </Text>
                                    <Text style={{ padding: 20, fontSize: 14, color: colors.color1 }}> বাসার ছবি ব্যাতীত কোন বিজ্ঞাপন আমাদের Application -এ রাখা হবে না। </Text>
                                    <View style={{ width: '100%', height: 100 }}>
                                        <Image
                                            resizeMode='contain'
                                            source={{
                                                uri: imageUrl
                                            }}
                                            style={{ width: '100%', height: 400 }}
                                        />
                                    </View>
                                    <View style={{ ...defaultStyle.rowView, justifyContent: 'center', marginTop: 10, position: 'absolute', bottom: 10, top: 'auto', right: 0, left: 0 }}>
                                        <TouchableOpacity onPress={openCameraLib} style={{ ...defaultStyle.rowView, justifyContent: 'center', width: 120, height: 40, borderRadius: 100, backgroundColor: colors.color1 }}>
                                            <Text style={{ color: colors.color3, textAlign: 'center' }}> Open camera </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={openGalleryLib} style={{ ...defaultStyle.rowView, justifyContent: 'center', width: 120, height: 40, borderRadius: 100, backgroundColor: colors.color1 }}>
                                            <Text style={{ color: colors.color3, textAlign: 'center' }}> Open Gallery </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Button title="Ok" onPress={toggleModal} />
                            </Modal>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ marginTop: 10 }}>I agree to the terms and conditions</Text>
                            <Checkbox.Android
                                status={isChecked ? 'checked' : 'unchecked'}
                                onPress={handleCheckboxChange}
                            />
                            <PaperBtn
                                mode="contained"
                                disabled={!isChecked || isSubmitDisabled}
                                onPress={
                                    handleSubmit
                                }
                            >
                                Submit
                            </PaperBtn>
                        </View>
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