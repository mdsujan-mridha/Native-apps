import axios from "axios"
import {
    CLEAR_ERRORS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
} from "../constant/userConstant"
import AsyncStorage from "@react-native-async-storage/async-storage"

// create new user 
export const registerUser = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST })
        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            }
        }
        // console.log("user data on action:", userData);
        const data = await axios.post(`https://rental-property-mobile-apps.vercel.app/api/v1/user/new`, userData, config);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
        // console.log(data.user)

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }

}

// load logged in user 

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const token = await AsyncStorage.getItem('userToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const { data } = await axios.get("https://rental-property-mobile-apps.vercel.app/api/v1/user/me", config);

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};
//login
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST })

        const data = await axios.post(`http://192.168.31.41:5000/api/v1/user/login`, { email, password });
        // console.log(data.data.token);
        await AsyncStorage.setItem('userToken', data.data.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
        // console.log(data.user)

    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error?.response?.data?.message });
    }
}



export const getSingleUser = (id) => async (dispatch) => {

    try {
        dispatch({ type: LOAD_USER_REQUEST })

        const data = await axios.get(`https://rental-property-mobile-apps.vercel.app/api/v1/user/${id}`);
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data
        })
        // console.log(data.user)
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }

}

// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}
