import React from 'react';
import {Image, Text, View} from 'react-native';
import assets from '../../assets';
import {createStyles} from './reset.styles';
import {renderMarginBottom, renderMarginTop} from '../../utils/ui-utils';
import InputComponent from '../../components/input/component';
import Button from '../../components/button/component';
import {goBack, navigate} from '../../navigators/navigation-utilities';

const ResetScreen = () => {
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
              Reset your password
            </Text>
            {renderMarginTop(12)}
            <Text style={styles.infoText}>
              Enter the email address associated with your account and
            </Text>
            <Text style={styles.infoText}>
              we'll send you a link to reset your password.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              onChangeText={e => console.log(e)}
              placeholder={'Email'}
            />
          </View>
          {renderMarginTop(28)}
          <Button
            onPress={() => navigate('VerifyScreen')}
            text="Continue"
            textStyles={styles.buttonText}
          />
          {renderMarginTop(28)}
          <Text
            onPress={() => navigate('SignInScreen')}
            style={[styles.dontHaveText, styles.textCenter]}>
            Return to sign in
          </Text>
        </View>
      </View>
      <Text onPress={goBack} style={[styles.dontHaveText, styles.textCenter]}>
        Create a New account{' '}
      </Text>
      {renderMarginBottom(32)}
    </View>
  );
};

export default ResetScreen;
