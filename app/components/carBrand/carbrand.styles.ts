import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = (
  isHorizontal: boolean | undefined,
  isSelected: boolean | undefined,
) =>
  StyleSheet.create({
    brandContainer: {
      marginRight: isHorizontal ? scale(12) : scale(30),
      alignItems: 'center',
      flexDirection: isHorizontal ? 'row' : 'column',
      columnGap: isHorizontal ? scale(4) : 0,
      backgroundColor: isSelected ? colors.bgTab : colors.background,
      paddingHorizontal: scale(4),
      paddingVertical: scale(4),
      borderRadius: scale(30),
    },
    brand: {
      backgroundColor: colors.black,
      borderRadius: scale(100),
      height: isHorizontal ? scale(32) : scale(50),
      width: isHorizontal ? scale(32) : scale(50),
      alignItems: 'center',
      justifyContent: 'center',
    },
    brandText: {
      color: isSelected ? colors.white : colors.placeholder,
      fontSize: FontSize.FONT_12Px,
      fontFamily: isHorizontal ? typography.semiBold : typography.regular,
      marginRight: isHorizontal ? scale(6) : 0,
    },
    brandImage: {
      height: isHorizontal ? scale(18) : scale(28),
      width: isHorizontal ? scale(18) : scale(28),
      textAlign: 'center',
    },
  });
