import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DescriptionText from './DescriptionText'
import { colors } from '../../assets/color'

const ListRenderItem = ({ item }) => {
    return (
        <View style={{ backgroundColor: item.bgColor, borderWidth: 1, height: 170, width: 300, borderRadius: 12, padding: 20 }}>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                <DescriptionText text='Total Wallet Balance' textStyle={{ color: colors.whiteTextColor, }} />
                <DescriptionText text='USD' textStyle={{ color: colors.whiteTextColor, }} />
            </View>
            <View>
                <Text style={{ color: colors.whiteTextColor, fontWeight: "700", fontSize: 28, lineHeight: 32, marginVertical: 15 }}>{item.walletPrze}</Text>
            </View>
            <View>
                <Text style={{ color: colors.whiteTextColor, fontWeight: "400", fontSize: 14, lineHeight: 16 }}>Weekly Profit</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={{ color: colors.whiteTextColor, fontWeight: "700", fontSize: 16, lineHeight: 18, marginVertical: 10 }}>{item.weeklyPrze}</Text>
                <Text style={{ color: colors.whiteTextColor, fontWeight: "700", fontSize: 16, lineHeight: 18 }}>{item.percentage}</Text>
            </View>

        </View>
    )
}

export default ListRenderItem

const styles = StyleSheet.create({})