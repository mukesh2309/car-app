import React, {useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import {createStyles} from './otp.styles';

interface IOtpComponentProps {
  onOTPChange?: (otp: string) => void;
}

const OtpComponent = ({onOTPChange}: IOtpComponentProps) => {
  const length = 4;
  const styles = createStyles();
  const inputRef = useRef<Array<TextInput | null>>([]);
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));

  const handleChange = (text: string, index: number) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      onOTPChange?.(newOtp.join(''));

      if (text && index < length - 1) {
        inputRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);

      onOTPChange?.(newOtp.join(''));

      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((_, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRef.current[index] = ref)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={otp[index]}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={event => handleKeyPress(event, index)}
          blurOnSubmit={false}
          autoFocus={index === 0}
          importantForAutofill="no"
        />
      ))}
    </View>
  );
};

export default OtpComponent;
