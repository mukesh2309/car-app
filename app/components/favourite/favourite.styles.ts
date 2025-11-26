import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';

export const createStyles = () =>
  StyleSheet.create({
    favContainer: {
      borderWidth: 1,
      borderColor: colors.gray,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 999,
      right: scale(4),
      top: scale(4),
      borderRadius: 100,
      height: scale(30),
      width: scale(30),
    },
  });
