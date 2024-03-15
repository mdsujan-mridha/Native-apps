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


const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
