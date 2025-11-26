import {useState} from 'react';
import {ISignUpProps} from './signup.props';

export const useSignup = (): ISignUpProps => {
  const [isSecure, setIsSecure] = useState(false);
  return {
    isSecure,
    setIsSecure,
  };
};
