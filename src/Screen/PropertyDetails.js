import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import propertyImg from "../../Assets/property.png";
import AppHeader from '../components/AppHeader';
import { colors } from '../utils/styles';


const PropertyDetails = ({ navigation }) => {

  const property = {
    _id: 1,
    img: propertyImg,
    title: "আগামি ১লা জানুয়ারি মাস থেকে ধানমন্ডিতে ফ্লাট ভাড়া দেওয়া হবে।",
    bedRoom: "২ বেড রুম",
    washRoom: "২ বাথরুম",
    diningRoom: "ডাইনিং",
    balcony: "২ ব্যলকুনি",
    price: "20000",
    location: "ধানমন্ডি ঢাকা-১২০৫,বাংলাদশে"
  }

  return (
    <View>
      <AppHeader
        title={"Property Details"}
        headerBg={colors.color1}
        back={true}
        iconColor={"#fff"}
        navigation={navigation}
        right="more-vertical"
        rightFunction={() => console.log("right")}
      />
      <ScrollView>
        <View style={styles.container}>
          <Image source={propertyImg} style={styles.propertyImage} />
          <View style={styles.content}>
            <Text> {property.title} </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default PropertyDetails
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  content: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  propertyImage: {
    
  }

});