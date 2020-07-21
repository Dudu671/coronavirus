import React from 'react'
import { BackHandler, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Sair({ style }) {
    return (
        <TouchableOpacity style={style} onPress={() => BackHandler.exitApp()}>
            <MaterialCommunityIcons name="exit-to-app" size={30} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnClose: {
        justifyContent: "center",
        alignItems: "center"
    }
})