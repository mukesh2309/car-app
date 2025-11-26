import {StyleSheet} from 'react-native';
import {scale} from '../../theme/scale';
import {colors} from '../../theme/colors';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      columnGap: scale(12),
    },
    input: {
      width: scale(55),
      height: scale(55),
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.btnBorder,
      textAlign: 'center',
      fontSize: FontSize.FONT_20Px,
      borderRadius: scale(4),
      marginHorizontal: scale(4),
      fontFamily: typography.regular,
    },
  });
