
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../Screen/Home';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../Screen/Profile';
import Messages from '../Screen/Messages';
import { colors } from '../utils/styles';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: colors.color1,
                drawerActiveTintColor: "#fff",
                drawerLabelStyle: {
                    fontFamily: "Roboto-Medium",
                    fontSize: 15,

                }
            }}
        >
            <Drawer.Screen name='Home' component={Home}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Drawer.Screen name='Profile' component={Profile}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={22} color={color} />
                    ),
                    headerShown: false,

                }}
            />
            <Drawer.Screen name='Message' component={Messages}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppStack

