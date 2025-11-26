import React from 'react';
import {Pressable, Text} from 'react-native';
import {createStyles} from './button.styles';
import {IButtonProps} from './IButton.props';

const Button = ({
  text,
  textStyles,
  buttonStyles,
  onPress,
  component,
}: IButtonProps) => {
  const styles = createStyles();
  return (
    <Pressable onPress={onPress} style={[styles.container, buttonStyles]}>
      {component}
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
