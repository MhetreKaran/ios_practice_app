import React, { useState } from 'react';
import {
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgicon, { svgIconNoStroke, svgWithCustomHeightWidth } from './SVGIcon';
import { icon, iconConstants } from '../../assets/svgIcon';

export interface RevIconProp {
	iconName?: string;
	color?: string;
	size?: number;
	testId?: string;
	containerStyle?: ViewStyle;
	viewBox?: string;
	height?: number;
	width?: number;
	noStroke?: boolean;
	fillColor?: string;
	onPress?: () => void;
	strokeWidth?: string;
	text?: string;
}

/**
 * To render Icons
 * @param props: IconProps
 * @returns renders component
 * <RevIcon size={14} color="red" iconName="bed" />
 */

const Icon = (props: RevIconProp) => {
	let iconString = '';
	if (props.height && props.width) {
		iconString = svgWithCustomHeightWidth(
			props.height,
			props.width,
			props.color,
			props.iconName,
			props.viewBox,
			props.fillColor,
			props.strokeWidth
		);
	}
	if (props.noStroke) {
		iconString = svgIconNoStroke(
			props.size,
			props.color,
			props.iconName,
			props.viewBox,
			props.fillColor
		);
	} else {
		iconString = svgicon(
			props.size,
			props.color,
			props.iconName,
			props.viewBox,
			props.fillColor
		);
	}
	if (props.iconName === iconConstants.bed) {
		// ;
	}
	return (
		<>
			{typeof props.onPress === 'function' && (
				<TouchableOpacity
					style={props.containerStyle}
					onPress={props.onPress}
				>
					{typeof props.iconName === 'string' &&
						Object.keys(icon()).indexOf(props.iconName) > -1 && (
							<SvgXml xml={iconString} />
						)}
				</TouchableOpacity>
			)}
			{typeof props.onPress !== 'function' && (
				<View style={props.containerStyle} testID={props.testId}>
					{typeof props.iconName === 'string' &&
						Object.keys(icon()).indexOf(props.iconName) > -1 && (
							<SvgXml xml={iconString} />
						)}
				</View>
			)}
		</>
	);
};

export default Icon;
