
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/styles';
import { AuthContext } from '../utils/AuthContext';


const CustomDrawer = (props) => {

    const { userData, setUserData } = useContext(AuthContext);
    // console.log("user from drawer",userData);
    const handleLogout = () => {
        setUserData(null);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: colors.color1 }}
            >
                <ImageBackground
                    source={require("../../Assets/menu-bg.jpeg")}
                    style={{ padding: 20, marginTop: -10 }}
                >
                    <Image
                        source={{ uri: userData?.photo }}
                        style={{ height: 80, width: 80, borderRadius: 40, marginTop: 10 }}
                    />

                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            fontFamily: 'Roboto-Medium',
                            marginBottom: 5,
                        }}>
                        {userData?.name}
                    </Text>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 15,
                            fontFamily: 'Roboto-Medium',
                            marginBottom: 5,
                        }}>
                        {userData?.email}
                    </Text>

                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
                    <DrawerItemList  {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CustomDrawer

