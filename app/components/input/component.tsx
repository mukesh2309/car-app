import React from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import {createStyles} from './input.styles';
import {colors} from '../../theme/colors';
import assets from '../../assets';
import {IInputProps} from './input.props';

const InputComponent = ({
  onChangeText,
  secureTextEntry,
  placeholder,
  isSecure,
  onSecurePress,
  keyboardType,
  leftAction,
  containerStyle,
}: IInputProps) => {
  const styles = createStyles();
  const {eye} = assets;

  return (
    <View style={[styles.container, containerStyle]}>
      {leftAction}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {isSecure && (
        <Pressable onPress={onSecurePress}>
          <Image source={eye} style={styles.eye} resizeMode="contain" />
        </Pressable>
      )}
    </View>
  );
};

export default InputComponent;
