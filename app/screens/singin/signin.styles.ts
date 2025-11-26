import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: scale(18),
      paddingTop: scale(28),
    },
    carLogo: {
      height: scale(38),
      width: scale(38),
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
      paddingVertical: scale(12),
    },
    titleStyle: {
      fontSize: FontSize.FONT_24Px,
      color: colors.black,
      flex: 1,
      fontFamily: typography.bold,
    },
    textContainer: {
      paddingTop: scale(38),
      marginBottom: scale(12),
    },
    textStyle: {
      color: colors.black,
      fontSize: FontSize.FONT_26Px,
      fontFamily: typography.semiBold,
    },
    textRemember: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    inputContainer: {
      rowGap: scale(6),
    },
    colG2: {
      columnGap: scale(2),
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scale(16),
    },
    forgotContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'red',
    },
    outlineButton: {
      backgroundColor: colors.outlineButtonBg,
      borderWidth: 1,
      borderColor: colors.button,
    },
    outlineButtonSignUpText: {
      color: colors.black,
      fontFamily: typography.bold,
      fontSize: FontSize.FONT_18Px,
    },
    outlineButtonText: {
      color: colors.black,
      fontFamily: typography.bold,
      fontSize: FontSize.FONT_14Px,
    },
    buttonText: {
      fontFamily: typography.bold,
      fontSize: FontSize.FONT_18Px,
    },
    buttonContainer: {
      rowGap: scale(14),
      marginTop: scale(12),
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
      width: scale(15),
      fontFamily: typography.regular,
      color: colors.placeholder,
    },
    orBorder: {
      height: 1,
      flex: 1,
      backgroundColor: colors.divider,
      marginVertical: scale(18),
    },
    buttonStyle: {
      flexDirection: 'row',
      columnGap: scale(12),
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
    mt14: {
      marginTop: scale(14),
    },
    haveAccountContainer: {
      alignItems: 'center',
      marginTop: scale(28),
      paddingBottom: scale(28),
    },
    dontHaveText: {
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
  });
