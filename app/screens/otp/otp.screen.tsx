import React from 'react';
import {Image, Text, View} from 'react-native';
import assets from '../../assets';
import Button from '../../components/button/component';
import InputComponent from '../../components/input/component';
import OtpComponent from '../../components/otp/component';
import {navigate} from '../../navigators/navigation-utilities';
import {renderMarginTop} from '../../utils/ui-utils';
import {createStyles} from './otp.styles';

const OtpScreen = () => {
  const styles = createStyles();
  const {logo_black} = assets;

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.flexRow}>
          <Image source={logo_black} style={styles.carLogo} />
          <Text style={styles.titleStyle}>Qent</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, styles.textCenter]}>
              Enter verification code
            </Text>
            {renderMarginTop(12)}
            <Text style={styles.infoText}>
              We have send a Code to : +100******00
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <OtpComponent onOTPChange={e => console.log(e)} />
          </View>
          {renderMarginTop(28)}
          <Button
            onPress={() => navigate('OtpScreen')}
            text="Continue"
            textStyles={styles.buttonText}
          />
          {renderMarginTop(28)}
          <Text
            onPress={() => navigate('SignInScreen')}
            style={[styles.dontHaveText, styles.textCenter]}>
            Didn’t receive the OTP ? <Text>Resend</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
