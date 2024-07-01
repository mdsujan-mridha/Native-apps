import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../components/AppHeader'
import Entypo from 'react-native-vector-icons/Entypo'

import { colors, defaultImg } from '../utils/styles';
import { Caption, Title } from 'react-native-paper';

import IonIcon from "react-native-vector-icons/Ionicons";

import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/action/userAction';
import Loader from '../components/Loader';



const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState(user.avatar.url)

  useEffect(() => {

    if (isAuthenticated === false) {
      navigation.navigate("Login");
    }

  }, [dispatch])

  useEffect(() => {
    if (user && user.avatar && user.avatar.url) {
      // console.log('User Avatar URL:', user.avatar.url);
      setProfileImage(user.avatar.url);
    }
  }, [user])
  console.log(profileImage);
  return (
    <>
      {
        loading ?
          (<Loader />)
          :
          (<>
            <View style={styles.container}>
              <AppHeader
                title={"Profile"}
                headerBg={colors.color1}
                iconColor={"#fff"}
                menu={true}
                optionalBadge={5}
                right="more-vertical"
                rightFunction={() => console.log("right")}
                optionalIcon="bell"
                navigation={navigation}
                optionalFunction={() => console.log("optionalBtnPress")}
              />

              <ScrollView>
                <View style={{ ...styles.profileContainer, paddingTop: 10 }}>

                  <View style={styles.imgContainer}>

                    <Image
                      source={{ uri: profileImage }}
                      style={styles.image} />

                    <TouchableOpacity
                      style={{ alignItems: "flex-end", top: -20 }}
                    >
                      <Entypo name="pencil" size={24} color={colors.color8} />

                    </TouchableOpacity>

                  </View>
                  <View style={styles.textContainer}>
                    <Title style={styles.name}> sujan </Title>
                    <Caption> Active since Aug,2024 </Caption>
                  </View>

                </View>
                <View style={{ style: 'flex', justifyContent: "space-between", flexDirection: "row", paddingRight: 5, paddingLeft: 5, }}>
                  <Title style={{ fontFamily: 'Cochin', fontSize: 11, fontWeight: 900 }}> Personal Information </Title>
                  <TouchableOpacity>
                    <Title style={{ fontFamily: 'Cochin', fontSize: 11, fontWeight: 900 }}> Edit </Title>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingRight: 5, paddingLeft: 5, marginTop: 10, gap: 5 }}>
                  <View style={styles.bioContainer}>
                    <View style={styles.bioContent}>
                      <IonIcon name="mail-outline" size={30} color={colors.color8} />
                      <Text style={styles.bioTxt}> Email: </Text>
                    </View>
                    <Text style={styles.bioTxt}>  {user?.email} </Text>
                  </View>
                  <View style={styles.bioContainer}>
                    <View style={styles.bioContent}>
                      <IonIcon name="call-outline" size={30} color={colors.color8} />
                      <Text style={styles.bioTxt}> Phone: </Text>
                    </View>
                    <Text style={styles.bioTxt}> {user?.phoneNumber} </Text>
                  </View>
                  <View style={styles.bioContainer}>

                    <View style={styles.bioContent}>
                      <IonIcon name="location-outline" size={30} color={colors.color8} />
                      <Text style={styles.bioTxt}> Location: </Text>
                    </View>
                    <Text style={styles.bioTxt}> {user?.location} </Text>
                  </View>
                </View>

                <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                  <View style={{ style: 'flex', justifyContent: "space-between", flexDirection: "row", marginTop: 15 }}>
                    <Title style={{ fontFamily: 'Cochin', fontSize: 11, fontWeight: 900 }}> Utilities </Title>
                  </View>
                  <View>

                    <TouchableOpacity style={{ ...styles.bioContainer, marginTop: 10 }}>
                      <View style={styles.bioContent}>
                        <IonIcon name="cloud-download-outline" size={30} color={colors.color8} />
                        <Text style={styles.bioTxt}> Download </Text>
                      </View>
                      <IonIcon name="chevron-forward-outline" size={30} color={colors.color8} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.bioContainer, marginTop: 5 }}>
                      <View style={styles.bioContent}>
                        <IonIcon name="help-outline" size={30} color={colors.color8} />
                        <Text style={styles.bioTxt}> Helps </Text>
                      </View>
                      <IonIcon name="chevron-forward-outline" size={30} color={colors.color8} />
                    </TouchableOpacity>

                  </View>
                </View>
              </ScrollView>

            </View>
          </>)
      }


    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  profileContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer: {},
  textContainer: {
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: colors.color4,
    borderWidth: 3,
  },
  userInfo: {
    flex: 1,
  },
  bioContainer: {
    backgroundColor: colors.color7,
    height: 60,
    borderRadius: 10,
    style: 'flex',
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5
  },
  bioContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  bioTxt: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.color1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.color1,
  }
})