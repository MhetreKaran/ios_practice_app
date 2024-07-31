import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/color'
import Icon from './Icon'
import { iconConstants } from '../../assets/svgIcon'

const CoinCard = () => {
  return (
    <View style={styles.container}>
      <Icon iconName={iconConstants.bitcoinCash} size={50} viewBox="0 0 50 50" noStroke={true}/>
        <View style={{marginLeft:18,gap:4}}>
            <Text style={{color:colors.whiteTextColor,fontWeight:'700',fontSize:22,lineHeight:25.78}}>$40,900.64</Text>
            <Text style={{color:'#4DE0D9',fontWeight:'400',fontSize:14,lineHeight:16.41}}>+ $508.20 (+0.31)</Text>
        </View>
    </View>
  )
}

export default CoinCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:colors.mainColor,
        padding:20,
        borderRadius:12
    }
})