import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { colors } from '../../assets/color'
import { iconConstants } from '../../assets/svgIcon'

const MarketCard = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

     <Icon 
      iconName={iconConstants.coin}
      size={60}
      containerStyle={{
        width: 50,
        height: 50,
        marginVertical:10
      }}
      viewBox="0 0 50 50"
      noStroke={true}
     />
     <View style={{justifyContent:'center',alignContent:'center',marginLeft:20}}>
        <Text style={{color:'#4DE0D9',fontWeight:'500',fontSize:18,lineHeight:22}}>Achain</Text>
        <Text style={{color:colors.whiteTextColor,fontWeight:'500',fontSize:14,lineHeight:17}}>ACH</Text>
     </View>
     </View>
     <View style={{justifyContent:'center',alignContent:'center'}}>
     <Text style={{color:colors.whiteTextColor,fontWeight:'500',fontSize:18,lineHeight:22}}>$15,813.20</Text>
     <Text style={{color:'#FF73AA',textAlign:'right',fontSize:14,fontWeight:'500'}}>-3.84%</Text>
     </View>
     
    </View>
  )
}

export default MarketCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.darkBGColor,
        borderRadius:12,
        paddingHorizontal:20,
        paddingBottom:12,
        marginHorizontal:12   ,flexDirection:'row',justifyContent:'space-between'


    }
})