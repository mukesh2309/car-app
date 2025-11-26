import {StyleSheet} from 'react-native';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {colors} from '../../theme/colors';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    checkMarkContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
      justifyContent: 'space-between',
      paddingVertical: scale(12),
    },
    checkMark: {
      height: scale(50),
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkMarkText: {
      marginTop: scale(6),
      fontSize: FontSize.FONT_12Px,
      fontFamily: typography.semiBold,
    },
    inActiveText: {
      color: colors.placeholder,
    },
    check: {
      height: scale(20),
      width: scale(20),
      backgroundColor: colors.black,
      borderRadius: scale(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
    line: {
      height: scale(1),
      width: '80%',
      backgroundColor: colors.black,
      top: '50%',
      left: '10%',
      position: 'absolute',
    },
    active: {
      height: scale(10),
      width: scale(10),
      backgroundColor: colors.background,
      borderRadius: scale(100),
    },
  });
