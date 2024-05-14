import {
    ALL_PROPERTY_FAIL,
    ALL_PROPERTY_REQUEST,
    ALL_PROPERTY_SUCCESS,
    CLEAR_ERRORS,
    NEW_PROPERTY_REQUEST,
    NEW_PROPERTY_RESET,
    NEW_PROPERTY_SUCCESS,
    PROPERTY_DETAILS_FAIL,
    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS
} from "../constant/propertyConstant"

export const propertyReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
        case ALL_PROPERTY_REQUEST:
            return {
                loading: true,
                properties: []
            }
        case ALL_PROPERTY_SUCCESS:
            return {
                loading: false,
                properties: action.payload.properties,
                propertyCount: action.payload.propertyCount,
                filteredProperty: action.payload.filteredProperty,
            }
        case ALL_PROPERTY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

// get property details 
export const propertyDetailsReducer = (state = { property: {} }, action) => {
    switch (action.type) {
        case PROPERTY_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case PROPERTY_DETAILS_SUCCESS:
            return {
                loading: false,
                property: action.payload,
            }
        case PROPERTY_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

// create new property 
export const newPropertyReducer = (state = { property: {} }, action) => {
    switch (action.type) {
        case NEW_PROPERTY_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case NEW_PROPERTY_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                property: action.payload,
            }
        case NEW_PROPERTY_RESET:
            return {
                ...state,
                loading: false,

            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}