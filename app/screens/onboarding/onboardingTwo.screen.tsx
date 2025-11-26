import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import Button from '../../components/button/component';
import {navigate} from '../../navigators/navigation-utilities';
import {createStyles} from './onboarding.styles';
import assets from '../../assets';

const OnBoardingScreenTwo = () => {
  const styles = createStyles();
  const {logo, overlayBg, carBg} = assets;
  return (
    <ImageBackground resizeMode="cover" source={carBg} style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={overlayBg}
        style={styles.overLay}>
        <View>
          <View style={styles.logoContainer}>
            <Image resizeMode="contain" source={logo} style={styles.carLogo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, styles.title2]}>Lets Start</Text>
            <Text style={[styles.title, styles.title2]}>A New Experience</Text>
            <Text style={[styles.title, styles.title2]}>With Car rental.</Text>
          </View>
        </View>
        <View>
          <View style={styles.infoTextContainer}>
            <Text style={[styles.infoText]}>
              Discover your next adventure with Qent. we’re here to
            </Text>
            <Text style={[styles.infoText]}>
              provide you with a seamless car rental experience.
            </Text>
            <Text style={[styles.infoText]}>
              Let’s get started on your journey.
            </Text>
          </View>
          <Button
            onPress={() => navigate('SignInScreen')}
            text="Get Started"
            buttonStyles={styles.buttonStyle}
            textStyles={styles.buttonText}
          />
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default OnBoardingScreenTwo;
