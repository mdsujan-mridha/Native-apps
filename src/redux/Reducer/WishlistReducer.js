import {
    ADD_TO_WISHLIST,
    LOAD_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "../constant/WishlistConstant"

const initialState = {
    items: [],
}

export const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlistItems: [...state.wishlistItems, action.payload],
            };
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter(item => item._id !== action.payload),
            };
        case LOAD_WISHLIST:
            return {
                ...state,
                wishlistItems: action.payload,
            };
        default:
            return state;
    }
};