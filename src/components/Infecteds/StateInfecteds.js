import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NumberFormat from 'react-number-format'

export default function StateInfecteds({ data }) {
    return (
        <View style={styles.state}>
            <View style={styles.stateInfo}>
                <Text style={styles.textInfo}>{data.state}</Text>
                <NumberFormat
                    value={data.cases}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={""}
                    renderText={formattedValue =>
                        <Text style={styles.textInfoRight}>{formattedValue}</Text>
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    state: {
        alignItems: "center",
        margin: 10
    },

    stateInfo: {
        flexDirection: "row",
        width: "100%",
    },

    textInfo: {
        color: "black",
        fontWeight: "bold"
    },

    textInfoRight: {
        position: "absolute",
        right: 10,
        color: "#fc6428"
    }
})