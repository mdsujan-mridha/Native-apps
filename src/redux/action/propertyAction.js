import axios from "axios";
import {
    ALL_PROPERTY_FAIL,
    ALL_PROPERTY_REQUEST,
    ALL_PROPERTY_SUCCESS,
    CLEAR_ERRORS,
    NEW_PROPERTY_FAIL,
    NEW_PROPERTY_REQUEST,
    NEW_PROPERTY_SUCCESS,
    PROPERTY_DETAILS_FAIL,
    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS,
} from "../constant/propertyConstant"

// get Property 
export const getAllProperty = (category, price = [5000, 5000], keyword) => async (dispatch) => {
    try {

        dispatch({ type: ALL_PROPERTY_REQUEST });

        let link = `https://rental-property-mobile-apps.vercel.app/api/v1/properties?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        if (category) {
            link = `https://rental-property-mobile-apps.vercel.app/api/v1/properties?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
        }
        const { data } = await axios.get(link);

        dispatch({
            type: ALL_PROPERTY_SUCCESS,
            payload: data.properties
        });
        // console.log("Console from Action", data);

    } catch (error) {
        dispatch({
            type: ALL_PROPERTY_FAIL,
            payload: error?.error?.response?.data?.message
        })
    }

}

// create new property 
export const createProperty = (propertyData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PROPERTY_REQUEST })

        const data = await axios.post(`https://rental-property-mobile-apps.vercel.app/api/v1/property/new`, propertyData);
        dispatch({
            type: NEW_PROPERTY_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: NEW_PROPERTY_FAIL,
            error: error.response?.data.message
        })
    }
}

// get Property details 

export const getPropertyDetails = (id) => async (dispatch) => {

    try {
        dispatch({ type: PROPERTY_DETAILS_REQUEST })

        const { data } = await axios.get(`https://rental-property-mobile-apps.vercel.app/api/v1/property/${id}`);
        dispatch({
            type: PROPERTY_DETAILS_SUCCESS,
            payload: data.property,
        })
        // console.log(data);
    } catch (error) {
        dispatch({
            type: PROPERTY_DETAILS_FAIL,
            payload: error.error.response?.data.message
        })
    }

}

// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}
