import { SafeAreaView, ScrollView, Text } from "react-native";
import AppHeader from "../components/AppHeader";
import { colors } from "../utils/styles";


const Home = ({ navigation }) => {
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

            </ScrollView>
        </>


    )
}

export default Home;