import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {FontSize} from '../../../theme/font-size';
import {typography} from '../../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    main: {
      flex: 1,
      paddingHorizontal: scale(18),
    },
    inputContainer: {
      paddingVertical: scale(12),
    },
    lableText: {
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
    },
  });
