import axios from "axios";
import {
    ALL_PROPERTY_FAIL,
    ALL_PROPERTY_REQUEST,
    ALL_PROPERTY_SUCCESS,
    CLEAR_ERRORS,
} from "../constant/propertyConstant"

// get Property 
export const getAllProperty = (category, price = [5000, 5000], keyword) => async (dispatch) => {
    try {

        dispatch({ type: ALL_PROPERTY_REQUEST });

        let link = `https://rental-property-mobile-apps.vercel.app/api/v1/properties?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        if (category) {
            link = `https://rental-property-mobile-apps.vercel.app/api/v1/properties?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
        }
        const { data } = axios.get(`https://rental-property-mobile-apps.vercel.app/api/v1/properties`);

        dispatch({
            type: ALL_PROPERTY_SUCCESS,
            payload: data.properties
        });
        console.log(data);

    } catch (error) {
        dispatch({
            type: ALL_PROPERTY_FAIL,
            payload: error?.error?.response?.data?.message
        })
    }

}

// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}
