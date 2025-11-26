import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {createStyles} from './checkbox.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../theme/scale';
import {colors} from '../../theme/colors';
import {ICheckBoxProps} from './ICheckbox.props';

const CheckBoxComponent = ({
  onPress = () => {},
  isChecked = false,
}: ICheckBoxProps) => {
  const styles = createStyles();
  const [checked, setChecked] = useState(isChecked);
  return (
    <Pressable
      onPress={() => {
        setChecked(!checked);
        onPress(!checked);
      }}
      style={styles.container}>
      {checked && (
        <MaterialIcons name="check" size={scale(20)} color={colors.white} />
      )}
    </Pressable>
  );
};

export default CheckBoxComponent;
