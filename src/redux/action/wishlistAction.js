import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    ADD_TO_WISHLIST,
    LOAD_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "../constant/WishlistConstant";
import { Toast } from "toastify-react-native";

// Add to wishlist action
export const addToWishlist = (item) => async (dispatch) => {
    try {
        const wishlist = await AsyncStorage.getItem('wishlist');
        let wishlistItems = [];

        if (wishlist) {
            try {
                wishlistItems = JSON.parse(wishlist);
                if (!Array.isArray(wishlistItems)) {
                    wishlistItems = [];
                }
            } catch (parseError) {
                console.error("Failed to parse wishlist JSON", parseError);
                wishlistItems = [];
            }
        }

        // console.log('Current wishlist items:', wishlistItems);

        // Check if the item already exists in the wishlist
        const itemExists = wishlistItems.some(wishlistItem => wishlistItem?._id === item?._id);

        if (!itemExists) {
            let newWishlist = [...wishlistItems, item];
            await AsyncStorage.setItem('wishlist', JSON.stringify(newWishlist));

            // console.log('Updated wishlist items:', newWishlist);

            dispatch({ type: ADD_TO_WISHLIST, payload: item });
            Toast.success("Item added");
        } else {
            Toast.warn('Item already exists in wishlist');
        }
    } catch (error) {
        Toast.error("Failed to add wishlist", error);
    }
};

// Remove from wishlist action
export const removeFromWishlist = (itemId) => async (dispatch) => {
    try {
        const wishlist = await AsyncStorage.getItem('wishlist');
        const wishlistItems = wishlist ? JSON.parse(wishlist) : [];
        // Filter out the item with the specific itemId
        const newWishlist = wishlistItems.filter(item => item._id !== itemId);
        // Log new wishlist after removal
        await AsyncStorage.setItem('wishlist', JSON.stringify(newWishlist));

        dispatch({ type: REMOVE_FROM_WISHLIST, payload: itemId });
    } catch (error) {
        console.error('Failed to remove from wishlist', error);
    }
}


// Load wishlist action
export const loadWishlist = () => async (dispatch) => {
    try {
        const wishlist = await AsyncStorage.getItem('wishlist');
        const wishlistItems = wishlist ? JSON.parse(wishlist) : [];

        dispatch({ type: LOAD_WISHLIST, payload: wishlistItems });
    } catch (error) {
        console.error('Failed to load wishlist', error);
    }
};
