import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { userDetailsReducer, userReducer } from "./src/redux/Reducer/userReducer";
import { newPropertyReducer, propertyDetailsReducer, propertyReducer } from "./src/redux/Reducer/PropertyReducer";
import { wishlistReducer } from "./src/redux/Reducer/WishlistReducer";


const reducer = combineReducers({
    user: userReducer,
    properties: propertyReducer,
    propertyDetails: propertyDetailsReducer,
    newProperty: newPropertyReducer,
    userDetails: userDetailsReducer,
    wishlist: wishlistReducer,
});

const initialState = {};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)

);

export default store;