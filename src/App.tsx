/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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



const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {


  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='propertyDetails' component={PropertyDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
      <ToastManager />
      <Footer />
    </NavigationContainer>
  );
}



export default App;
