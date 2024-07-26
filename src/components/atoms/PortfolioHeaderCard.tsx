import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/color'
import SmallButton from './SmallButton'

const PortfolioHeaderCard = () => {
    return (
        <View style={styles.cardContainer}>
            <SmallButton text={'BTC/USD'} containerStyle={{flex:1,backgroundColor:colors.blueLongButtonColor}} onPress={()=>{}}/>
            <Text style={styles.priceText}>$ 5,781.00</Text>
            <View style={styles.cardBottomContainer}>
                <Text style={styles.textStyle}>+ $248.23 (+0.35)</Text>
                <SmallButton text={'Add Balance'} containerStyle={{flex:1,marginHorizontal:16}} onPress={()=>{}} />
            </View>
        </View>
    )
}

export default PortfolioHeaderCard

const styles = StyleSheet.create({
    cardContainer:{
        width:'100%',
        backgroundColor:colors.darkBGColor,
        padding:16,
        borderRadius:14
    },
    priceText: {
        color: colors.whiteTextColor,
        fontWeight: '700',
        fontSize:20
    },
    textStyle:{
        color:colors.whiteTextColor,

    },
    cardBottomContainer:{
        flexDirection:'row',
        // justifyContent:'space-between',
        alignContent:'space-between'
    }
})