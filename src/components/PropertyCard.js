import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/styles';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/action/wishlistAction';



const PropertyCard = ({ navigate, item, id }) => {
    const dispatch = useDispatch();

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(item));
        // console.log(result);
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigate.navigate('propertyDetails', { id })}
            style={{ width: '90%', marginVertical: 10 }}
        >
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item?.images[0].url }} style={styles.img} />
                    <TouchableOpacity style={styles.wishlistButton} onPress={handleAddToWishlist}>
                        <IonIcon name="heart-outline" size={25} color={colors.color3} />
                    </TouchableOpacity>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}> {item?.title} </Text>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoSection}>
                            <View style={styles.content}>
                                <IonIcon name="bed-outline" size={20} color={colors.color1} />
                                <Text style={styles.textUtils}>বেডরুম: {item?.bedRoom} </Text>
                            </View>
                            <View style={styles.content}>
                                <IonIcon name="file-tray-outline" size={20} color={colors.color1} />
                                <Text style={styles.textUtils}>বাথরুম: {item?.washRoom} </Text>
                            </View>
                        </View>
                        <View style={styles.infoSection}>
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
                    <View style={styles.locationContainer}>
                        <IonIcon name="location-outline" size={20} color={colors.color1} />
                        <Text style={styles.textUtils}> {item?.location} </Text>
                        <Text style={styles.textUtils}> ভাড়া: $ {item?.rentPrice} </Text>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ backgroundColor: colors.color1, width: 150, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => navigate.navigate('Message', { propertyId: id, landlordId: item?.user })}
                        >
                            <Text style={{ color: colors.color5, fontSize: 15 }}> send Message </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: colors.color1, width: 160, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigate.navigate('propertyDetails', { id })}>
                            <Text style={{ color: colors.color5, fontSize: 15 }}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PropertyCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.color3,
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
    },
    img: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        marginTop: 5,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        color: colors.color1,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'justify',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    infoSection: {
        display: 'flex',
        width: '50%',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    textUtils: {
        color: colors.color1,
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        gap: 5,
    },
    wishlistButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: colors.color1,
        borderRadius: 20,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
