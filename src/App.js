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
import Home from './Screen/Home';
import Properties from './Screen/Properties';
import PropertyDetails from './Screen/PropertyDetails';
import FreePost from './Screen/FreePost';
import LandLordForm from './Screen/LandLordForm';
import Services from './utils/Services';
import { AuthContext } from './utils/AuthContext';



const Stack = createNativeStackNavigator();

function App() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {

    Services.getUserAuth().then(res => {
      console.log("User data from storage:", res);
      if (res) {
        setUserData(res);
      } else {
        // Handle case when user data is not available in storage
        setUserData(null)
      }
    })

  }, [])


  return (
    <>
      <AuthContext.Provider value={{ userData, setUserData }}>
        <NavigationContainer>

          {
            userData ? (
              <>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />

                  <Stack.Screen name='propertyDetails' component={PropertyDetails} options={{ headerShown: false }} />
                  <Stack.Screen name='freepost' component={FreePost} options={{ headerShadowVisible: false }} />
                  <Stack.Screen name='Landlord' component={LandLordForm} options={{ headerShown: false }} />
                </Stack.Navigator>
                <ToastManager />
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

      </AuthContext.Provider>
    </>
  );
}



export default App;
