import { Dimensions, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import bannerImg01 from "../../Assets/banner-1.png";
import bannerImg02 from "../../Assets/banner-2.png";
import bannerImg03 from "../../Assets/banner-3.png";
import bannerImg04 from "../../Assets/banner-4.png";
import bannerImg05 from "../../Assets/banner-5.png";


const width = Dimensions.get('window').width;

const Banner = () => {

    const bannerItem = [
        bannerImg01,
        bannerImg02,
        bannerImg03,
        bannerImg04,
        bannerImg05,

    ];

    return (
        <View style={{ flex: 1}}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={bannerItem}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={item}
                            style={{ width: '100%', height: '100%', resizeMode: 'cover',paddingLeft:20,paddingRight:10 }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

export default Banner;

const styles = StyleSheet.create({

});
