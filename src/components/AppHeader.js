import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
const IconSize = 24;
const AppHeader = ({ navigation, menu, back, title, right, rightFunction, optionalIcon, optionalFunction, headerBg, iconColor }) => {
    return (
        <Surface style={[styles.header, { backgroundColor: headerBg }]}>
            <View style={styles.view}>
                {menu && <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={IconSize} color={iconColor} />
                </TouchableOpacity>}
                {back && <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={IconSize} color={iconColor} />
                </TouchableOpacity>}
            </View>
            <View style={styles.view}>
                <Title style={{ color: "white" }}> {title} </Title>
            </View>
            <View style={[styles.view, styles.rightView]}>
                {
                    optionalFunction &&
                    <TouchableOpacity onPress={optionalFunction} style={styles.rowView}>
                        <Feather name={optionalIcon} size={IconSize} color={iconColor} />
                        <Badge style={{ position: 'absolute', top: -5, right: -10 }}> 4 </Badge>
                    </TouchableOpacity>
                }
                {
                    rightFunction &&
                    <TouchableOpacity onPress={rightFunction}>
                        <Feather name={right} size={IconSize} color={iconColor} />
                    </TouchableOpacity>
                }
            </View>
        </Surface>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        height: 50,
        elevation: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "black",
    },
    view: {
        marginHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleView: {
        flex: 1,
    },
    rightView: {
        justifyContent: 'flex-end',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    }
})