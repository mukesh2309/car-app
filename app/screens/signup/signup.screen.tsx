import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import assets from '../../assets';
import Button from '../../components/button/component';
import InputComponent from '../../components/input/component';
import {goBack, navigate} from '../../navigators/navigation-utilities';
import {scale} from '../../theme/scale';
import {renderMarginTop} from '../../utils/ui-utils';
import {useSignup} from './signup.hook';
import {createStyles} from './signup.styles';

const SignUpScreen = () => {
  const styles = createStyles();
  const {isSecure, setIsSecure} = useSignup();
  const {logo_black} = assets;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={logo_black} style={styles.carLogo} />
        <Text style={styles.titleStyle}>Qent</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, styles.textCenter]}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Full Name'}
        />
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Email Address'}
        />
        <InputComponent
          isSecure
          secureTextEntry={isSecure}
          onChangeText={e => console.log(e)}
          placeholder={'Password'}
          onSecurePress={() => setIsSecure(!isSecure)}
        />
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Country'}
        />
      </View>
      {renderMarginTop(12)}
      <View style={styles.buttonContainer}>
        <Button text="Login" textStyles={styles.buttonText} />
        <Button
          onPress={() => navigate('ResetScreen')}
          text="Sign Up"
          textStyles={styles.outlineButtonSignUpText}
          buttonStyles={styles.outlineButton}
        />
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.orBorder} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.orBorder} />
      </View>
      <View style={[styles.buttonContainer, styles.mt14]}>
        <Button
          text="Apple Pay"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.iconButtonStyle}
          component={<MaterialIcons name="apple" size={scale(26)} />}
        />
        <Button
          text="Google Pay"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.iconButtonStyle}
          component={<AntDesign name="google" size={scale(20)} />}
        />
      </View>
      <View style={styles.haveAccountContainer}>
        <Text style={styles.dontHaveText}>
          Already have an account? {'\t'}
          <Text onPress={goBack} style={styles.dontHaveText}>
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
