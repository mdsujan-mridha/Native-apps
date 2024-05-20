import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IonIcon from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/styles';
import { loadWishlist, removeFromWishlist } from '../redux/action/wishlistAction';

const Wishlist = () => {
    const dispatch = useDispatch();
    const { wishlistItems } = useSelector(state => state.wishlist);

    useEffect(() => {
        dispatch(loadWishlist());
    }, [dispatch]);

    const handleRemoveFromWishlist = (itemId) => {
        dispatch(removeFromWishlist(itemId));
    };

    console.log(wishlistItems);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Wishlist</Text>
            <FlatList
                data={wishlistItems}
                keyExtractor={(item) => item?._id?.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.details}>Rent Price: ${item.rentPrice}</Text>
                        {/* Add other item details here */}
                        <TouchableOpacity
                            style={styles.wishlistButton}
                            onPress={() => handleRemoveFromWishlist(item._id)}
                        >
                            <IonIcon name="heart-dislike-outline" size={24} color={colors.color1} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
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
        backgroundColor: colors.color3,
        borderRadius: 20,
        padding: 5,
    },
});
