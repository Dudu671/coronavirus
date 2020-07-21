import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList, SafeAreaView } from 'react-native'
import NumberFormat from 'react-number-format'

import StateInfecteds from './Infecteds/StateInfecteds'
import Exit from './Exit'

export default function StatesRed() {
    const [data, setData] = useState([])
    const [totalInfecteds, setTotalInfecteds] = useState(0)

    const getData = () => {
        fetch("https://covid19-brazil-api.now.sh/api/report/v1")
            .then(res => res.json())
            .then(res => setData(res.data || []))
    }

    const countInfecteds = () => {
        var start = 0
        data.forEach(item => {
            var totalInfecteds = item.cases
            setTotalInfecteds(start += parseFloat(totalInfecteds))
        })
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        countInfecteds()
    }, [data])

    return (
        <View style={styles.container}>
            <View style={styles.total}>
                <NumberFormat
                    value={totalInfecteds}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={""}
                    renderText={formattedValue =>
                        <Text style={styles.totalText}>Total de infectados: {formattedValue}</Text>
                    }
                />

                <Exit style={{ position: "absolute", right: 20 }} />
            </View>

            <View style={styles.body}>
                <SafeAreaView style={styles.states}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <StateInfecteds data={item} />
                        )}
                        keyExtractor={item => String(item.uid)}
                    />
                </SafeAreaView>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fc6428',
    },

    total: {
        height: 50,
        alignItems: "center",
        flexDirection: "row"
    },

    totalText: {
        fontSize: 18,
        color: "white",
        fontWeight: "600",
        marginLeft: 15
    },

    body: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10
    },

    states: {
        flex: 1,
        marginTop: 20
    }
});
