import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppHeader from "../components/AppHeader";
import { colors } from "../utils/styles";
import Banner from "../components/Banner";

import categoryImg01 from "../../Assets/building1.png";
import categoryImg02 from "../../Assets/family1.png";
import categoryImg03 from "../../Assets/happy1.png";
import categoryImg04 from "../../Assets/man(1)1.png";
import categoryImg05 from "../../Assets/woman1.png";
import categoryImg06 from "../../Assets/bed1.png";
import NewPost from "../components/NewPost";


const Home = ({ navigation }) => {

    const categories = [
        {
            _id: 1,
            title: "ফ্লাট ভাড়া হবে",
            img: categoryImg01,
        },
        {
            _id: 2,
            title: "ফ্যামিলি",
            img: categoryImg02,
        },
        {
            _id: 3,
            title: "সাবলেট",
            img: categoryImg03,
        },
        {
            _id: 4,
            title: "ব্যাচেলর",
            img: categoryImg04,
        },
        {
            _id: 5,
            title: "ছাত্রী/মহিলা",
            img: categoryImg05,
        },
        {
            _id: 6,
            title: "সিট ভাড়া",
            img: categoryImg06,
        },
    ]

    return (
        <>
            <AppHeader
                title={"Home"}
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
                <Banner />
                <View style={{ marginBottom: 10, padding: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, }}>
                        <Text style={styles.txt}> জনপ্রিয় ক্যাটাগরি </Text>
                        <TouchableOpacity>
                            <Text style={styles.txt}> আরো দেখুন </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            alignItems: "center",
                            paddingBottom: 20,
                            paddingTop: 20,
                            gap: 10,
                        }}
                        showsHorizontalScrollIndicator={false}
                    >

                        {
                            categories &&
                            categories.map((item) => (
                                <TouchableOpacity style={styles.categoryContent} key={item._id}>
                                    <Image source={item.img} style={styles.img} />
                                    <Text style={styles.categoryTitle}>{item.title}</Text>
                                </TouchableOpacity>
                            ))
                        }

                    </ScrollView>

                </View>
                <View style={{ marginRight: 10, paddingHorizontal: 10 }}>
                    <NewPost />
                </View>

            </ScrollView>
        </>


    )
}

export default Home;

const styles = StyleSheet.create({
    txt: {
        color: colors.color1,
        fontSize: 16,
        fontWeight: "bold",
    },
    categoryTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.color3,
    },
    categoryContent: {
        flexDirection: "row",
        backgroundColor: colors.color1,
        width: 130,
        height: 60,
        gap: 5,
        alignItems: "center",
        borderRadius: 7,
        paddingHorizontal: 5
    },
    img: {
        width: 30,
        height: 30,
    }
})