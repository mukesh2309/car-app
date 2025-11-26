import React, {useState} from 'react';
import {Pressable, ScrollView, Switch, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateComponent from '../../../components/date/component';
import HeaderComponent from '../../../components/header/component';
import InputComponent from '../../../components/input/component';
import StepperComponent from '../../../components/stepper/component';
import TabSwitcher from '../../../components/tabSwitcher/component';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {renderMarginBottom} from '../../../utils/ui-utils';
import {genderData, rentalData} from '../../search/view/filter.data';
import {createStyles} from './booking.styles';
import Button from '../../../components/button/component';
import {navigate} from '../../../navigators/navigation-utilities';

const BookingDetailsScreen = () => {
  const styles = createStyles();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderComponent title="Booking Details" hasBack />
      <ScrollView style={styles.main}>
        <StepperComponent active={1} />
        {renderMarginBottom(6)}
        <View style={styles.switchContainer}>
          <View>
            <Text style={styles.bookTitle}>Book with driver</Text>
            <Text style={styles.bookText}>
              Don't have a driver? book with driver.
            </Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={setIsSwitchOn}
            thumbColor={colors.black}
            trackColor={{
              false: colors.placeholder,
              true: colors.gray,
            }}
          />
        </View>
        {renderMarginBottom(12)}
        <InputComponent
          leftAction={
            <MaterialIcons
              name="person-outline"
              size={scale(22)}
              color={colors.placeholder}
            />
          }
          containerStyle={styles.inputContainer}
          placeholder="Full Name*"
          onChangeText={e => console.log(e)}
        />
        <InputComponent
          leftAction={
            <MaterialCommunityIcons
              name="email-outline"
              size={scale(22)}
              color={colors.placeholder}
            />
          }
          containerStyle={styles.inputContainer}
          placeholder="Email Address*"
          onChangeText={e => console.log(e)}
        />
        <InputComponent
          leftAction={
            <MaterialCommunityIcons
              name="phone-outline"
              size={scale(22)}
              color={colors.placeholder}
            />
          }
          containerStyle={styles.inputContainer}
          placeholder="Contact*"
          onChangeText={e => console.log(e)}
        />
        {renderMarginBottom(12)}
        <TabSwitcher
          title="Gender"
          data={genderData}
          onPress={e => console.log(e)}
          tabContainerStyle={styles.tabContainerStyle}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
        />
        {renderMarginBottom(12)}
        <TabSwitcher
          title="Rental Date & Time"
          data={rentalData}
          onPress={e => console.log(e)}
          tabContainerStyle={styles.tabContainerStyle}
          tabStyle={[styles.tabStyle, styles.ph]}
          tabTextStyle={styles.tabTextStyle}
        />
        {renderMarginBottom(12)}
        <Pressable
          onPress={() => setShowDatePicker(true)}
          style={styles.dateContainer}>
          <View>
            <Text style={styles.dateText}>Pick up Date</Text>
            <Text style={styles.date}>19/Jan/2024</Text>
          </View>
          <View>
            <Text style={styles.dateText}>Return Date</Text>
            <Text style={styles.date}>19/Jan/2024</Text>
          </View>
        </Pressable>
        {renderMarginBottom(12)}
        <Text style={styles.locationText}>Car Location</Text>
        <InputComponent
          onChangeText={() => console.log('')}
          placeholder="Enter Location"
        />
        {renderMarginBottom(12)}
      </ScrollView>
      <Button
        onPress={() => navigate('BookingPaymentScreen')}
        text="Pay Now"
        buttonStyles={styles.buttonStyle}
      />
      <DateComponent visible={showDatePicker} setVisible={setShowDatePicker} />
    </View>
  );
};

export default BookingDetailsScreen;
