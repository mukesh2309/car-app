import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import HeaderComponent from '../../../components/header/component';
import {createStyles} from './status.styles';
import assets from '../../../assets';
import {renderBoderBottom, renderMarginBottom} from '../../../utils/ui-utils';
import Button from '../../../components/button/component';
import {navigate} from '../../../navigators/navigation-utilities';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {scale} from '../../../theme/scale';
import {colors} from '../../../theme/colors';

const BookingStatusScreen = () => {
  const styles = createStyles();
  const {success} = assets;
  return (
    <View style={styles.container}>
      <HeaderComponent title="Payment Status" hasBack />
      <ScrollView style={styles.main}>
        <View style={styles.successContainer}>
          <Image
            resizeMode="contain"
            source={success}
            style={styles.successImage}
          />
          {renderBoderBottom(18)}
          <Text style={styles.title}>Payment Successful</Text>
          {renderBoderBottom(4)}
          <Text style={styles.infoText}>
            Your car rent Booking has been successfully
          </Text>
        </View>
        {renderMarginBottom(18)}
        <View style={styles.bookingInfo}>
          <Text style={[styles.title, styles.f14]}>Booking Information</Text>
          {renderMarginBottom(12)}
          {renderBoderBottom(1)}
          {renderMarginBottom(12)}
          <View style={styles.horizontalContainer}>
            <Text style={[styles.value]}>Car Model</Text>
            <Text style={[styles.value, styles.bl]}>Tesla Model 3</Text>
          </View>
          <View style={styles.horizontalContainer}>
            <Text style={[styles.value]}>Rental Date</Text>
            <Text style={[styles.value, styles.bl]}>19 Jan24 - 22 Jan 24</Text>
          </View>
          <View style={styles.horizontalContainer}>
            <Text style={[styles.value]}>Name</Text>
            <Text style={[styles.value, styles.bl]}>John Doe</Text>
          </View>
        </View>
        {renderMarginBottom(18)}
        {renderBoderBottom(1)}
        {renderMarginBottom(18)}
        <Text style={[styles.title, styles.f14]}>Booking Information</Text>
        {renderMarginBottom(8)}
        <View style={styles.horizontalContainer}>
          <Text style={[styles.value]}>Transaction ID</Text>
          <Text style={[styles.value, styles.bl]}>#T000123B0J1</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={[styles.value]}>Transaction Date</Text>
          <Text style={[styles.value, styles.bl]}>19 Jan24 - 22 Jan 24</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={[styles.value]}>Payment Method</Text>
          <Text style={[styles.value, styles.bl]}>Cash</Text>
        </View>
        {renderMarginBottom(4)}
        {renderBoderBottom(1)}
        {renderMarginBottom(18)}
        <View style={styles.horizontalContainer}>
          <Text style={[styles.value, styles.bold, styles.bl]}>
            Total Amount
          </Text>
          <Text style={[styles.value, styles.bold, styles.bl]}>$1415</Text>
        </View>
        {renderMarginBottom(8)}
        <Button
          text="Download Receipt"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.downloadBtn}
          component={
            <Feather name="download" size={scale(20)} color={colors.gray} />
          }
        />
        {renderMarginBottom(14)}
        <Button
          text="Share Your Receipt"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.shareBtn}
          component={
            <EvilIcons
              name="share-google"
              size={scale(30)}
              color={colors.gray}
            />
          }
        />
        {renderMarginBottom(14)}
      </ScrollView>
      <Button
        onPress={() => navigate('BookingStatusScreen')}
        text="Confirm"
        buttonStyles={styles.btn}
      />
    </View>
  );
};

export default BookingStatusScreen;
