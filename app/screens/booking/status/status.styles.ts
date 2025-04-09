import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { scale } from '../../../theme/scale';
import { FontSize } from '../../../theme/font-size';
import { typography } from '../../../theme/typography';

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
    successImage: {
      height: scale(125),
      width: scale(125),
    },
    title: {
      fontSize: FontSize.FONT_16Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
    f14: {
      fontSize: FontSize.FONT_14Px,
    },
    infoText: {
      fontSize: FontSize.FONT_14Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    successContainer: {
      alignItems: 'center',
      paddingTop: scale(12),
    },
    bookingInfo: {
      backgroundColor: colors.white,
      paddingVertical: scale(12),
      paddingHorizontal: scale(12),
      borderRadius: scale(8),
      borderWidth: 1,
      borderColor: colors.btnBorder,
    },
    key: {
      fontSize: FontSize.FONT_14Px,
      color: colors.placeholder,
      fontFamily: typography.semiBold,
    },
    value: {
      fontSize: FontSize.FONT_14Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    horizontalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: scale(12),
    },
    bold: {
      fontFamily: typography.semiBold,
    },
    bl: {
      color: colors.black,
    },
    btn: {
      marginHorizontal: scale(18),
    },
    downloadBtn: {
      backgroundColor: colors.btnBorder,
      borderWidth: 1,
      borderColor: colors.btnBorder,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(8),
      paddingVertical: scale(10),
    },
    shareBtn: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.btnBorder,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(8),
      paddingVertical: scale(10),
    },
    outlineButtonText: {
      color: colors.placeholder,
      fontFamily: typography.regular,
      fontSize: FontSize.FONT_14Px,
    },
  });
