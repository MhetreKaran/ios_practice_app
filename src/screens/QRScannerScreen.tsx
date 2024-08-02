import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeadingText from '../components/atoms/HeadingText';
import {colors} from '../assets/color';
import Icon from '../components/atoms/Icon';
import {iconConstants} from '../assets/svgIcon';
import {useNavigation} from '@react-navigation/native';
import LongButton from '../components/atoms/LongButton';

const QRScannerScreen = () => {
  const navigation = useNavigation();
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const [latestScannedData, setLatestScannedData] = useState(null);

  React.useEffect(() => {
    requestPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: any) => {
      // Update the state with the latest scanned data
      setLatestScannedData(codes[0].value);
      console.log(codes[0].value);
    },
  });

  if (device == null) {
    return (
      <SafeAreaView style={styles.screenStyle}>
        <View style={{flexDirection: 'row', width: '100%', marginVertical: 18}}>
          <Icon
            iconName={iconConstants.backArrow}
            size={30}
            color={'white'}
            viewBox="2 4 26 20"
            containerStyle={{
              height: 45,
              width: 45,
              borderRadius: 25,
              backgroundColor: colors.darkBGColor,
            }}
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              width: '70%',
              justifyContent: 'center',
            }}>
            <HeadingText
              text={'Scanner'}
              textStyle={{
                color: colors.whiteTextColor,
                fontSize: 22,
                lineHeight: 25.78,
                fontWeight: '700',
              }}
            />
          </View>
        </View>
        <Text style={{color: 'white'}}>Device Not Found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenStyle}>
      <View style={{flexDirection: 'row', width: '100%', marginVertical: 18}}>
        <Icon
          iconName={iconConstants.backArrow}
          size={30}
          color={'white'}
          viewBox="2 4 26 20"
          containerStyle={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: colors.darkBGColor,
          }}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
          }}>
          <HeadingText
            text={'Scan QR code'}
            textStyle={{
              color: colors.whiteTextColor,
              fontSize: 22,
              lineHeight: 25.78,
              fontWeight: '700',
            }}
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          paddingHorizontal: 45,
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 16.41,
          color: '#C0C9EA',
        }}>
        Place QR code inside the frame to scan please avoid shake to get results
        quickly
      </Text>
      <View style={styles.container}>
        <View
          style={{
            width: 260,
            height: 260,
            borderRadius: 12,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Camera
            style={styles.cameraStyle}
            codeScanner={codeScanner}
            device={device}
            isActive={true}
          />
        </View>
        {latestScannedData && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Latest Scanned Code:</Text>
            <Text style={styles.resultText} >{latestScannedData}</Text>
          </View>
        )}
        
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: '#F8F8FB',
          fontWeight: '700',
          fontSize: 20,
          lineHeight: 23,
        }}>
        70%
      </Text>
      <View style={styles.loadingBar}></View>
      <Text
        style={{
          textAlign: 'center',
          color: '#F8F8FB',
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 16,
          marginBottom: 16,
        }}>
        Scanning ...
      </Text>
      <LongButton text={'Place Code'} onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: colors.cardBackgroundColor,
    paddingHorizontal: 16,
  },
  cameraStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  container: {
    // flex: 1,
    marginVertical:24
  },
  resultContainer: {
    // position: 'absolute',
    bottom: 40, // Adjust the position to provide space between the camera view and the result container
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  resultText: {
    fontSize: 14,
    color: 'white',
  },

  loadingBar: {
    borderWidth: 1,
    padding: 3,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: '70%',
    marginVertical: 20,
  },
});

export default QRScannerScreen;
