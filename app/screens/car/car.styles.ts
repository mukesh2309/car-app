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
    },
    flex: {
      flex: 1,
    },
    main: {
      flex: 1,
      backgroundColor: colors.white,
      borderTopRightRadius: scale(30),
      borderTopLeftRadius: scale(30),
      paddingHorizontal: scale(18),
      paddingVertical: scale(18),
      justifyContent: 'space-between',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: scale(12),
    },
    title: {
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
    },

    textBox: {
      backgroundColor: 'green',
    },
    text: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    textBold: {
      fontFamily: typography.bold,
      fontSize: FontSize.FONT_14Px,
    },
    f12: {
      fontSize: FontSize.FONT_12Px,
    },
    reviewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(4),
    },
    person: {
      height: scale(42),
      width: scale(42),
    },
    ownerName: {
      fontSize: FontSize.FONT_14Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
    profile: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
      justifyContent: 'space-between',
    },
    cg14: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(14),
    },
    iconBorder: {
      borderWidth: 1,
      borderColor: colors.btnBorder,
      borderRadius: scale(100),
      height: scale(40),
      width: scale(40),
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
      marginHorizontal: scale(18),
    },
  });
