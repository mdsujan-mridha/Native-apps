

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../utils/styles'
import propertyImg from "../../Assets/property.png";
import { Title } from 'react-native-paper';

import IonIcon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'toastify-react-native';
import { clearErrors, getAllProperty } from '../redux/action/propertyAction';
import Loader from './Loader';



const NewPost = () => {
    const dispatch = useDispatch();
    const { properties, loading, error } = useSelector((state) => state.properties);

    properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const newProperty = properties?.slice(3, 7);
    // console.log(newProperty);

    useEffect(() => {
        if (error) {
            Toast.error(error);
            console.log(error);
            dispatch(clearErrors())
        }
        dispatch(getAllProperty())

    }, [dispatch, error]);
    // console.log(properties);
    return (
        <View>
            <Text style={styles.txt}>নতুন পোস্ট সমূহ</Text>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <View style={{ marginTop: 10, gap: 5 }}>
                            {
                                newProperty &&
                                newProperty.map((item) => (
                                    <ScrollView horizontal key={item?._id}
                                        contentContainerStyle={{
                                            alignItems: "center",
                                            gap: 10,
                                            backgroundColor: colors.color3,
                                            padding: 10,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                            height: 120,
                                            width: '100%'
                                        }}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <Image source={{ uri: item?.images[0]?.url }} style={{ width: 150, height: 100, borderRadius: 10 }} />
                                        <View>
                                            <Title style={{ fontSize: 11 }}> {item?.title} </Title>
                                            <View style={{ display: "flex", alignItems: "center", gap: 5, flexDirection: "row" }}>
                                                <IonIcon name="storefront-outline" size={15} color={colors.color1} />
                                                <Text style={{ fontSize: 10, color: colors.color1 }}> {item?.bedRoom}বেডরুম,{item?.washRoom} বাথরুম , {item?.barandha}বারান্দা </Text>
                                            </View>
                                            <View style={{ display: "flex", alignItems: "center", gap: 5, flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, color: colors.color1 }}>ভাড়া: ${item?.rentPrice} </Text>
                                                <IonIcon name="location-outline" size={15} color={colors.color1} />
                                                <Text style={{ fontSize: 11, color: colors.color1 }}> {item?.location} </Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                ))
                            }
                        </View>
                    )
            }
        </View >
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