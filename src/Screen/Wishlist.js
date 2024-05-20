import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IonIcon from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/styles';
import { loadWishlist, removeFromWishlist } from '../redux/action/wishlistAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';

const Wishlist = () => {
    const navigate = useNavigation();

    const dispatch = useDispatch();
    const { wishlistItems } = useSelector(state => state.wishlist);

    useEffect(() => {
        dispatch(loadWishlist());
    }, [dispatch]);

    const handleRemoveFromWishlist = (itemId) => {
        dispatch(removeFromWishlist(itemId));
    };

    // console.log(wishlistItems);
    const clearAllData = async () => {
        try {
            await AsyncStorage.clear();
            console.log('All data cleared from AsyncStorage');
        } catch (error) {
            console.error('Failed to clear AsyncStorage', error);
        }
    };

    return (
        <>
            <AppHeader
                title={"Wishlist Item"}
                headerBg={colors.color1}
                iconColor={"#fff"}
                back={true}
                navigation={navigate}
            />
            <View style={styles.container}>
                <Text style={styles.header}>Wishlist</Text>
                <FlatList
                    data={wishlistItems}
                    keyExtractor={(item) => item?._id?.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item?.title}</Text>
                            <Text style={styles.details}>Rent Price: ${item?.rentPrice}</Text>
                            {/* Add other item details here */}
                            <TouchableOpacity
                                style={styles.wishlistButton}
                                onPress={() => handleRemoveFromWishlist(item?._id)}
                            >
                                <IonIcon name="heart-dislike-outline" size={24} color={colors.color5} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </>
    );
}

export default Wishlist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        position: 'relative',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 16,
        color: '#555',
    },
    wishlistButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: colors.color1,
        borderRadius: 20,
        padding: 5,
        color:colors.color4
    },
});
