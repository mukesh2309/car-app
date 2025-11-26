import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = (isSelf: boolean) =>
  StyleSheet.create({
    container: {
      marginBottom: scale(18),
    },
    card: {
      backgroundColor: colors.white,
      paddingVertical: scale(12),
      paddingHorizontal: scale(12),
      borderRadius: scale(10),
      borderBottomRightRadius: isSelf ? 0 : scale(10),
      borderBottomLeftRadius: !isSelf ? 0 : scale(10),
    },
    text: {
      color: colors.black,
      fontSize: FontSize.FONT_12Px,
      fontFamily: typography.regular,
    },
    timeStamp: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
      textAlign: isSelf ? 'left' : 'right',
    },
  });
