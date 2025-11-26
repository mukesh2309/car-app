import React, {useState} from 'react';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import {BottomSheet} from '../bottomSheet/BottomSheet';
import {View} from 'react-native';
import {createStyles} from './date.styles';
import Button from '../button/component';

interface IDateComponentProps {
  visible: boolean;
  setVisible: (e: boolean) => void;
}
const DateComponent = ({visible, setVisible}: IDateComponentProps) => {
  const defaultStyles = useDefaultStyles();
  const [startDate, setStartDate] = useState<DateType>();
  const [endDate, setEndDate] = useState<DateType>();
  const styles = createStyles();
  return (
    <BottomSheet visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <DateTimePicker
          mode="range"
          startDate={startDate}
          endDate={endDate}
          styles={defaultStyles}
          onChange={({startDate: s, endDate: e}) => {
            setStartDate(s);
            setEndDate(e);
          }}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => setVisible(false)}
            text="Cancel"
            buttonStyles={styles.outlineBtn}
            textStyles={styles.outlineText}
          />
          <Button
            onPress={() => setVisible(false)}
            text="Done"
            buttonStyles={styles.btn}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default DateComponent;
