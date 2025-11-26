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
    selectPayment: {
      borderRadius: scale(10),
      padding: scale(12),
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.white,
      paddingVertical: scale(2),
      marginTop: scale(12),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: scale(10),
      height: scale(50),
      paddingHorizontal: scale(14),
    },
    selectPaymentText: {
      fontSize: FontSize.FONT_13Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
      paddingVertical: scale(12),
    },
    butonStyles: {
      backgroundColor: colors.btnBorder,
      borderRadius: scale(8),
      paddingHorizontal: scale(12),
      paddingVertical: scale(8),
      borderWidth: 1,
      borderColor: colors.btnBorder,
    },
    buttonText: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
    },
    rg: {
      flexDirection: 'row',
      columnGap: scale(8),
      alignItems: 'center',
    },
    paymentContainer: {
      flex: 0.3,
      backgroundColor: colors.white,
      borderTopRightRadius: scale(10),
      borderTopLeftRadius: scale(10),
      paddingHorizontal: scale(12),
      paddingVertical: scale(12),
    },
    paymentText: {
      fontSize: FontSize.FONT_15Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
      paddingVertical: scale(12),
      textAlign: 'center',
    },
    inputStyle: {
      flex: 1,
    },
    checkBoxText: {
      fontSize: FontSize.FONT_14Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(10),
    },
    borderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: scale(12),
      marginTop: scale(18),
    },
    orText: {
      fontSize: FontSize.FONT_12Px,
      fontFamily: typography.regular,
      color: colors.placeholder,
    },
    orBorder: {
      height: 1,
      flex: 1,
      backgroundColor: colors.divider,
      marginVertical: scale(18),
    },
    outlineButtonText: {
      color: colors.black,
      fontFamily: typography.bold,
      fontSize: FontSize.FONT_14Px,
    },
    iconButtonStyle: {
      backgroundColor: colors.outlineButtonBg,
      borderWidth: 1,
      borderColor: colors.btnBorder,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(8),
      paddingVertical: scale(10),
    },
  });
