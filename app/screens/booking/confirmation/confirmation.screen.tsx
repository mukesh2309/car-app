import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import HeaderComponent from '../../../components/header/component';
import StepperComponent from '../../../components/stepper/component';
import {createStyles} from './confirmation.styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {scale} from '../../../theme/scale';
import {colors} from '../../../theme/colors';
import {renderBoderBottom, renderMarginBottom} from '../../../utils/ui-utils';
import Button from '../../../components/button/component';
import {navigate} from '../../../navigators/navigation-utilities';

const BookingConfirmationScreen = () => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <HeaderComponent title="Confirmation" hasBack />
      <ScrollView style={styles.main}>
        <StepperComponent active={3} />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          resizeMode="cover"
          style={styles.image}
        />
        {renderMarginBottom(12)}
        <View style={styles.titleContainer}>
          <View style={styles.flex}>
            <Text style={styles.title}>Tesla Model S</Text>
            {renderMarginBottom(4)}
            <Text style={styles.text}>
              A car with high specs that are rented ot an affordable price
            </Text>
          </View>
          <View>
            <View style={styles.reviewContainer}>
              <Text style={styles.textBold}>5.0</Text>
              <FontAwesome name="star" size={scale(18)} color={colors.star} />
            </View>
            <Text style={[styles.text]}>(100+ Reviews)</Text>
          </View>
        </View>
        {renderMarginBottom(12)}
        {renderBoderBottom(1)}
        {renderMarginBottom(12)}
        <Text style={styles.title}>Booking Information</Text>
        {renderMarginBottom(12)}
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Booking ID</Text>
          <Text style={styles.value}>Booking ID</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Name</Text>
          <Text style={styles.value}>John Doe</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Pickup Date</Text>
          <Text style={styles.value}>19 Jan 2024 10:00am</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Return Date</Text>
          <Text style={styles.value}>21 Jan 2024 12:00pm</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Location</Text>
          <Text style={styles.value}>Shore Dr, Chicago 0062 Usa</Text>
        </View>
        {renderBoderBottom(1)}
        {renderMarginBottom(12)}

        <Text style={styles.title}>Payment</Text>
        {renderMarginBottom(12)}
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Txt ID</Text>
          <Text style={[styles.value, styles.bold]}>#141mtslv5854d58</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Amount</Text>
          <Text style={[styles.value, styles.bold]}>$1400</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Service Fee</Text>
          <Text style={[styles.value, styles.bold]}>15$</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Return Date</Text>
          <Text style={[styles.value, styles.bold]}>21 Jan 2024 12:00pm</Text>
        </View>
        {renderBoderBottom(1)}
        {renderMarginBottom(12)}
        <View style={styles.horizontalContainer}>
          <Text style={[styles.value, styles.bold]}>Total Amount</Text>
          <Text style={[styles.value, styles.bold]}>$1415</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.key}>Payment With</Text>
          <Text style={styles.value}>Cash</Text>
        </View>
      </ScrollView>
      <Button
        onPress={() => navigate('BookingStatusScreen')}
        text="Confirm"
        buttonStyles={styles.btn}
      />
    </View>
  );
};

export default BookingConfirmationScreen;
