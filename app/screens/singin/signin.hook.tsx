import {useState} from 'react';
import {ISiginInProps} from './signin.props';

export const useSignin = (): ISiginInProps => {
  const [isSecure, setIsSecure] = useState(false);
  return {
    isSecure,
    setIsSecure,
  };
};
