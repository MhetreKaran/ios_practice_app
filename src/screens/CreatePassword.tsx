import {
  Image,
  
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { colors } from "../assets/color";
import HeadingText from "../components/atoms/HeadingText";
import DescriptionText from "../components/atoms/DescriptionText";
import SmallButton from "../components/atoms/SmallButton";
import { iconConstants } from "../assets/svgIcon";
import RevIcon from "../components/atoms/Icon";
import CommonHeader from "../components/atoms/CommonHeader";
import InputText from "../components/atoms/InputText";
import LongButton from "../components/atoms/LongButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../components/atoms/Icon";

const CreatePassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar backgroundColor={colors.screenBackgroundColor} />
      <CommonHeader
        goBackFunction={() => {navigation.goBack()}}
        headingText="Create password"
        imagesrc={require("../assets/images/Illustration4.png")}
        descText="Choose a secure password that will be easy for you to remember."
      />

<View
          style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            backgroundColor: colors.cardBackgroundColor,
            borderRadius: 50,
            paddingHorizontal: 25,
            paddingVertical: 14,
            marginVertical: 20,
          }}>
            <View>
         <Text style={{color:'#8A8D9F',fontSize:13,fontWeight:'500'}}>Password</Text>
          <TextInput
            placeholder="*********************"
            placeholderTextColor={colors.whiteTextColor}
            style={{
              flex: 1,
              marginTop:8,
              fontWeight: '400',
              fontSize: 14,
              color: colors.whiteTextColor,
            }}
          />
          </View>
           <Icon
            iconName={iconConstants.eye}
            viewBox="0 0 22 14"
            size={25}
            noStroke={'none'}
          />
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon
        color="#4DE0D9"
            iconName={iconConstants.checkTick}
            viewBox="0 0 20 20"
            size={20}
            
          />
          <Text style={{color:'#4DE0D9',fontWeight:'500',fontSize:14,marginLeft:6}}>Has at least 8 characters</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon
        color="#4DE0D9"
            iconName={iconConstants.checkTick}
            viewBox="0 0 20 20"
            size={20}
           
          />
          <Text style={{color:'#4DE0D9',fontWeight:'500',fontSize:14,marginLeft:6}}>Has an uppercase letter or symbol</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:30}}>
        <Icon
        color="#5C616F"
            iconName={iconConstants.checkTick}
            viewBox="0 0 20 20"
            size={20}
            
          />
          <Text style={{color:'#5C616F',fontWeight:'500',fontSize:14,marginLeft:6}}>Has a number</Text>
        </View>
      <LongButton textStyle={{}} text='Continue' onPress={()=>navigation.navigate('SelectLocation')}/>
    </SafeAreaView>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingHorizontal: 16,
  },
  imageStyle: { height: 206, width: 206 },
});
