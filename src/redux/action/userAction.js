import axios from "axios"
import {
    CLEAR_ERRORS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
} from "../constant/userConstant"

// create new user 
export const registerUser = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_REQUEST })
        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            }
        }
        const data = await axios.post(`https://rental-property-mobile-apps.vercel.app/api/v1/user/new`, userData);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data.user
        })
        // console.log(data.user)

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message
        })
    }

}

// load logged in user 

export const loadUser = (uid) => async (dispatch) => {

    try {

        dispatch({ type: LOAD_USER_REQUEST })
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        const data = await axios.get(`https://rental-property-mobile-apps.vercel.app/api/v1/user/me`, uid);
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
        console.log(data)

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
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
