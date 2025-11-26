import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: scale(8),
    },
    frcg: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
    },
    iconContainer: {
      height: scale(40),
      width: scale(40),
      borderRadius: scale(100),
      borderWidth: 1,
      borderColor: colors.btnBorder,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: FontSize.FONT_14Px,
      color: colors.primary,
      fontFamily: typography.regular,
    },
  });
