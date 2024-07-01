/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppStack from './Navigation/AppStack';
// import AuthStack from './Navigation/AuthStack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Screen/Login';
import Footer from './components/Footer';
import ToastManager from 'toastify-react-native';
import Register from './Screen/Register';
import PropertyDetails from './Screen/PropertyDetails';
import FreePost from './Screen/FreePost';
import LandLordForm from './Screen/LandLordForm';

import Wishlist from './Screen/Wishlist';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/action/userAction';



const Stack = createNativeStackNavigator();

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {

    dispatch(loadUser())

  }, [dispatch])

  // console.log("From app screen", user);

  return (
    <>

      <NavigationContainer>

        {
          isAuthenticated ? (
            <>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />
                <Stack.Screen name='propertyDetails' component={PropertyDetails} options={{ headerShown: false }} />
                <Stack.Screen name='freepost' component={FreePost} options={{ headerShadowVisible: false }} />
                <Stack.Screen name='Landlord' component={LandLordForm} options={{ headerShown: false }} />
                <Stack.Screen name='Wishlist' component={Wishlist} options={{ headerShown: false }} />
              </Stack.Navigator>

              <Footer />
            </>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
              <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />

            </Stack.Navigator>
          )
        }

      </NavigationContainer>
      <ToastManager />

    </>
  );
}



export default App;
