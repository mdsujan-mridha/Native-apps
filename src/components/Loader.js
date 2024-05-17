
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Grid } from 'react-native-animated-spinkit'
import { colors } from '../utils/styles'

const Loader = () => {
    return (
        <View style={{ width: "100%", height: "600", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Grid size={60} color={colors.color1} />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({})