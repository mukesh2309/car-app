import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: scale(16),
      maxWidth: '50%',
      paddingBottom: scale(10),
    },
    carImage: {
      height: scale(100),
      width: scale(160),
    },
    title: {fontFamily: typography.semiBold, fontSize: FontSize.FONT_14Px},
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(2),
    },
    textBold: {
      fontFamily: typography.semiBold,
    },
    textContainer: {
      paddingHorizontal: scale(8),
    },
    text: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    dollarContainer: {
      borderColor: colors.gray,
      borderWidth: scale(1),
      height: scale(14),
      width: scale(14),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    priceContainer: {
      paddingVertical: scale(4),
      alignItems: 'center',
      columnGap: scale(8),
    },
    price: {
      fontSize: FontSize.FONT_11Px,
      color: colors.black,
    },
    carBackground: {
      borderTopRightRadius: scale(16),
      borderTopLeftRadius: scale(16),
      backgroundColor: colors.carBg,
    },
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
