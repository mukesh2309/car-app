import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import HeaderComponent from '../../../components/header/component';
import {createStyles} from './payment.styles';
import StepperComponent from '../../../components/stepper/component';
import VisaCard from '../../../components/visaCard/component';
import {renderMarginBottom} from '../../../utils/ui-utils';
import Button from '../../../components/button/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {BottomSheet} from '../../../components/bottomSheet/BottomSheet';
import InputComponent from '../../../components/input/component';
import CountryComponent from '../../../components/countrypicker/component';
import CheckBoxComponent from '../../../components/checkbox/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate} from '../../../navigators/navigation-utilities';

const BookingPaymentScreen = () => {
  const styles = createStyles();
  const [showPayment, setShowPayment] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderComponent title="Payment Methods" hasBack />
      <ScrollView style={styles.main}>
        <StepperComponent active={2} />
        {renderMarginBottom(6)}
        <VisaCard />
        {renderMarginBottom(6)}
        <View style={styles.inputContainer}>
          <Text style={styles.lableText}>select payment method</Text>
          <Pressable style={styles.selectPayment}>
            <View style={styles.rg}>
              <FontAwesome name="money" size={scale(18)} color={colors.gray} />
              <Text style={styles.selectPaymentText}>Credit Card</Text>
            </View>
            <Button
              text="DEFAULT"
              buttonStyles={styles.butonStyles}
              textStyles={styles.buttonText}
              onPress={() => setShowPayment(true)}
            />
          </Pressable>
          {renderMarginBottom(22)}
          <Text style={styles.lableText}>Card information</Text>
          <InputComponent
            onChangeText={e => console.log(e)}
            placeholder="Full Name"
          />
          <InputComponent
            onChangeText={e => console.log(e)}
            placeholder="Email Address"
          />
          <InputComponent
            onChangeText={e => console.log(e)}
            placeholder="Number"
          />
          <View style={styles.rg}>
            <InputComponent
              containerStyle={styles.inputStyle}
              onChangeText={e => console.log(e)}
              placeholder="MM/YY"
            />
            <InputComponent
              containerStyle={styles.inputStyle}
              onChangeText={e => console.log(e)}
              placeholder="CVV"
            />
          </View>
          {renderMarginBottom(22)}
          <Text style={styles.lableText}>Country or region</Text>
          <CountryComponent onPress={e => console.log(e)} />
          <InputComponent
            onChangeText={e => console.log(e)}
            placeholder="ZIP"
          />
          {renderMarginBottom(12)}
          <View style={styles.flexRow}>
            <CheckBoxComponent
              onPress={e => {
                console.log('item', e);
              }}
              isChecked={false}
            />
            <Text style={styles.checkBoxText}>Terms & Continue</Text>
          </View>
          <View style={styles.borderContainer}>
            <View style={styles.orBorder} />
            <Text style={styles.orText}>Pay with card Or</Text>
            <View style={styles.orBorder} />
          </View>
          {renderMarginBottom(12)}
          <Button
            text="Apple Pay"
            textStyles={styles.outlineButtonText}
            buttonStyles={styles.iconButtonStyle}
            component={<MaterialIcons name="apple" size={scale(26)} />}
          />
          {renderMarginBottom(14)}
          <Button
            text="Google Pay"
            textStyles={styles.outlineButtonText}
            buttonStyles={styles.iconButtonStyle}
            component={<AntDesign name="google" size={scale(20)} />}
          />
          {renderMarginBottom(24)}
          <Button
            onPress={() => navigate('BookingConfirmationScreen')}
            text="Pay Now"
          />
        </View>
        <BottomSheet visible={showPayment} setVisible={setShowPayment}>
          <View style={styles.paymentContainer}>
            <Text
              onPress={() => setShowPayment(false)}
              style={styles.paymentText}>
              Credit Card
            </Text>
            <Text
              onPress={() => setShowPayment(false)}
              style={styles.paymentText}>
              Cash Payment
            </Text>
          </View>
        </BottomSheet>
      </ScrollView>
    </View>
  );
};

export default BookingPaymentScreen;
