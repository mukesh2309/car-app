import {View, Text} from 'react-native';
import React from 'react';
import {createStyles} from './stepper.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from '../../theme/scale';
import {colors} from '../../theme/colors';

interface IStepper {
  active: number;
}

const StepperComponent = ({active = 1}: IStepper) => {
  const styles = createStyles();
  return (
    <View style={styles.checkMarkContainer}>
      <View style={styles.line} />
      <View style={styles.checkMark}>
        <View style={styles.check}>
          {active > 1 && (
            <MaterialCommunityIcons
              name="check"
              color={colors.white}
              size={scale(16)}
            />
          )}
          {active === 1 && <View style={styles.active} />}
        </View>
        <Text
          style={[styles.checkMarkText, active !== 1 && styles.inActiveText]}>
          Booking details
        </Text>
      </View>
      <View style={styles.checkMark}>
        <View style={styles.check}>
          {active > 2 && (
            <MaterialCommunityIcons
              name="check"
              color={colors.white}
              size={scale(16)}
            />
          )}
          {active === 2 && <View style={styles.active} />}
        </View>
        <Text
          style={[styles.checkMarkText, active !== 2 && styles.inActiveText]}>
          Payment methods
        </Text>
      </View>
      <View style={styles.checkMark}>
        <View style={styles.check}>
          {active > 3 && (
            <MaterialCommunityIcons
              name="check"
              color={colors.white}
              size={scale(16)}
            />
          )}
          {active === 3 && <View style={styles.active} />}
        </View>
        <Text
          style={[styles.checkMarkText, active !== 3 && styles.inActiveText]}>
          confirmation
        </Text>
      </View>
    </View>
  );
};

export default StepperComponent;
