import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/color'
import { iconConstants } from '../../assets/svgIcon'
import DescriptionText from './DescriptionText'
import HeadingText from './HeadingText'
import Icon from './Icon'

interface commonHeaderProps {
  descText?: string;
  imagesrc: string;
  headingText: string;
  goBackFunction?: Function;
}
const CommonHeader = (props: commonHeaderProps) => {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
      }}
    >
      <View
        style={{ position: "relative", flexDirection: "row", width: "100%", height: 60, alignItems: "center", marginBottom: 25 }}
      >
        <Icon
          iconName={iconConstants.backArrow}
          size={30}
          color={"white"}
          viewBox="2 4 26 20"
          containerStyle={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: colors.cardBackgroundColor,
          }}
          onPress={props.goBackFunction}
        />
        <View
          style={{
            position: "absolute",
            width: "100%"
            , height: "100%",
            justifyContent: "center"
          }}
        >
          <HeadingText
            text={props?.headingText}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: "700",
            }}
          />
        </View>
      </View>
      <Image
        source={props?.imagesrc}
        style={styles.imageStyle}
      />
      {props.descText && <DescriptionText
        textStyle={{ marginTop: 15 }}
        text={
          `${props?.descText}`
        }
      />}
    </View>
  )
}

export default CommonHeader

const styles = StyleSheet.create({
  imageStyle: { height: 220, width: 206 },
})