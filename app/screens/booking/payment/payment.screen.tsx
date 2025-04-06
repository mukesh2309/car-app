import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import HeaderComponent from '../../../components/header/component';
import {createStyles} from './payment.styles';
import StepperComponent from '../../../components/stepper/component';
import VisaCard from '../../../components/visaCard/component';
import {renderMarginBottom} from '../../../utils/ui-utils';
import InputComponent from '../../../components/input/component';

const BookingPaymentScreen = () => {
  const styles = createStyles();
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
          <InputComponent placeholder="Cash Payment" />
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingPaymentScreen;
