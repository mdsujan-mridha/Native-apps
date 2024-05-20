
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../components/AppHeader'
import { colors } from '../utils/styles'
import IonIcon from "react-native-vector-icons/Ionicons";
import { Button } from 'react-native-paper';
import { demoData } from '../components/NewPost';
import PropertyCard from '../components/PropertyCard';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllProperty } from '../redux/action/propertyAction';
import { Toast } from 'toastify-react-native';
import Loader from '../components/Loader';

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
    const dispatch = useDispatch();
    const { properties, loading, error } = useSelector((state) => state.properties)
    const [category, setCategory] = useState("");
    const navigate = useNavigation();
    const [keyword, setKeyword] = useState("");
    const [price, setPrice] = useState(50000);


    // handle Price function 
    const handlePrice = (value) => {
        // console.log(value);
        const inputPrice = parseInt(value);
        setPrice(inputPrice);
        // console.log(inputPrice);
    }
    // console.log(price);

    useEffect(() => {
        if (error) {
            Toast.error(error);
            console.log(error);
            dispatch(clearErrors())
        }
        dispatch(getAllProperty(category, price, keyword))

    }, [dispatch, error, category, price, keyword])
    // console.log(properties);
    // console.log(category);
    // console.log(price);
    // console.log(keyword);
    const clearFilters = () => {
        setCategory("");
        setPrice(50000);
        setKeyword("");

    }

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

            {
                loading ?
                    (<Loader />)
                    :
                    (<>
                        <View style={{ backgroundColor: colors.color1, height: 70, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                placeholder='Search properties...'
                                style={{
                                    backgroundColor: colors.color3,
                                    color: colors.color1,
                                    padding: 10,
                                    borderRadius: 10,
                                    height: 50,
                                    margin: 10,
                                    width: '93%',
                                }}
                                value={keyword}
                                onChangeText={setKeyword}
                            />
                            <IonIcon name="search-outline" size={25} color={colors.color1} style={{ marginLeft: -50 }} />
                        </View >
                        <View style={{ backgroundColor: colors.color7, paddingBottom: 10 }}>
                            <ScrollView
                                horizontal
                                contentContainerStyle={{
                                    paddingTop: 10,
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
                                            <Text style={styles.txt}> {item} </Text>
                                        </Button>
                                    ))
                                }
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: colors.color3,
                                        borderRadius: 100,
                                        margin: 5,
                                        height: 40,
                                    }}
                                    onPress={clearFilters}
                                >
                                    <Text style={styles.txt}> Clear All </Text>
                                </TouchableOpacity>

                            </ScrollView>

                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    backgroundColor: colors.color7,
                                    width: '90%',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >

                                <Slider
                                    style={{ width: 300, height: 40 }}
                                    minimumValue={5000}
                                    maximumValue={50000}
                                    minimumTrackTintColor="#000"
                                    maximumTrackTintColor="#000000"
                                    onValueChange={handlePrice}
                                    step={1000}
                                    value={price}
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
                            </View>
                        </View>

                        <ScrollView contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 15 }} showsVerticalScrollIndicator={false}>
                            {
                                properties &&
                                properties.map((item) => (
                                    <PropertyCard
                                        key={item?._id}
                                        item={item}
                                        id={item?._id}
                                        navigate={navigate}
                                    />
                                ))
                            }
                        </ScrollView>
                    </>)
            }

        </>
    )
}

export default Properties

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
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