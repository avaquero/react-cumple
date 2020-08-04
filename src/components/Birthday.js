import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Birthday(props) {
    const { birthday } = props;
    return (
        <View>
            <Text>{birthday.name} {birthday.lastname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
