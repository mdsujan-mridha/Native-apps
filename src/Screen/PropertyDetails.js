import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import propertyImg from "../../Assets/property.png";
import AppHeader from '../components/AppHeader';
import { colors } from '../utils/styles';
import IonIcon from "react-native-vector-icons/Ionicons";

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
    location: "ধানমন্ডি ঢাকা-১২০৫,বাংলাদশে",
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
      <ScrollView style={{ marginBottom: 20 }}>
        <View style={styles.container}>
          <Image source={propertyImg} style={styles.propertyImage} />
          <View style={styles.content}>
            <Text style={{ color: colors.color1, fontSize: 17, fontWeight: 900 }}> {property.title} </Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <IonIcon name="location-outline" size={20} color={colors.color1} />
              <Text style={{ color: colors.color1 }}> {property.location} </Text>
            </View>
            <View style={styles.details}>
              <View>
                <View style={styles.detailsContent}>
                  <IonIcon name="checkmark-circle-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}>{property.bedRoom} </Text>
                </View>
                <View style={styles.detailsContent}>
                  <IonIcon name="checkmark-circle-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}>{property.washRoom} </Text>
                </View>
                <View style={styles.detailsContent}>
                  <IonIcon name="pricetags-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}> ভাড়া: {property.price} প্রতি মাস </Text>
                </View>
              </View>
              <View>
                <View style={styles.detailsContent}>
                  <IonIcon name="checkmark-circle-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}>{property.balcony} </Text>
                </View>
                <View style={styles.detailsContent}>
                  <IonIcon name="checkmark-circle-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}>{property.diningRoom} </Text>
                </View>
              </View>
            </View>
            <Text style={{ color: colors.color1, marginTop: 10, fontWeight: 900 }}> অন্যান্য চার্জ সমূহ </Text>
            <View style={styles.details}>
              <View>
                <View style={styles.detailsContent}>
                  <IonIcon name="flash-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}> ৮০ টাকা বিদ্যুৎ বিল </Text>
                </View>
                <View style={styles.detailsContent}>
                  <IonIcon name="flame-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}> ১২০ টাকা গ্যাস বিল </Text>
                </View>
              </View>
              <View>
                <View style={styles.detailsContent}>
                  <IonIcon name="water-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}> ০ টাকা পানি বিল </Text>
                </View>
                <View style={styles.detailsContent}>
                  <IonIcon name="browsers-outline" size={15} color={colors.color1} />
                  <Text style={{ color: colors.color1 }}> ০ টাকা সার্ভিস চার্জ </Text>
                </View>
              </View>
            </View>
            <Text style={{ color: colors.color1, fontWeight: 900, marginTop: 10 }}> অন্যান্য সুবিধা সমূহ </Text>

            <ScrollView
              horizontal
              contentContainerStyle={{
                paddingTop: 20,
                gap: 10,
                marginBottom: 20,

              }}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.otherServiceDetails}>
                <IonIcon name="cube-outline" size={30} color={colors.color1} />
                <Text style={{ color: colors.color1, fontSize: 18, fontWeight: 900 }}> লিফট </Text>
                <Text style={{ color: 'red' }}> আছে </Text>
              </View>
              <View style={styles.otherServiceDetails}>
                <IonIcon name="cog-outline" size={30} color={colors.color1} />
                <Text style={{ color: colors.color1, fontSize: 18, fontWeight: 900 }}> জেনারেটর </Text>
                <Text style={{ color: 'red' }}> আছে </Text>
              </View>
              <View style={styles.otherServiceDetails}>
                <IonIcon name="car-outline" size={30} color={colors.color1} />
                <Text style={{ color: colors.color1, fontSize: 18, fontWeight: 900 }}> পার্কিং সুবিধা </Text>
                <Text style={{ color: 'red' }}> আছে </Text>
              </View>
              <View style={styles.otherServiceDetails}>
                <IonIcon name="shield-checkmark-outline" size={30} color={colors.color1} />
                <Text style={{ color: colors.color1, fontSize: 18, fontWeight: 900 }}> সিকিউরিটি </Text>
                <Text style={{ color: 'red' }}> আছে </Text>
              </View>
              <View style={styles.otherServiceDetails}>
                <IonIcon name="flame-outline" size={30} color={colors.color1} />
                <Text style={{ color: colors.color1, fontSize: 18, fontWeight: 900 }}> গ্যাস </Text>
                <Text style={{ color: 'red' }}> আছে </Text>
              </View>
            </ScrollView>
            <View>
              <Text style={{color:colors.color1,fontWeight:900}}> Contact for booking: </Text>
            </View>
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
    marginBottom: 20,
  },
  content: {
    marginTop: 15,
    width: '90%',
    display: 'flex',
    gap: 10,
    marginBottom:20

  },
  details: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  otherServiceDetails: {
    width: 130,
    height: 100,
    backgroundColor: colors.color3,
    borderRadius: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  propertyImage: {

  }

});