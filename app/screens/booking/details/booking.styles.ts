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
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      paddingVertical: scale(12),
      paddingHorizontal: scale(12),
      elevation: 10,
      overflow: 'hidden',
      borderRadius: scale(10),
    },
    bookTitle: {
      fontFamily: typography.semiBold,
      color: colors.black,
    },
    bookText: {
      color: colors.placeholder,
    },
    inputContainer: {
      columnGap: scale(4),
    },
    tabContainerStyle: {
      borderWidth: 0,
    },
    tabStyle: {
      borderWidth: 1,
      borderColor: colors.btnBorder,
      flexDirection: 'row',
      paddingRight: scale(16),
      paddingLeft: scale(12),
      columnGap: scale(4),
    },
    ph: {
      paddingRight: scale(18),
      paddingLeft: scale(18),
    },
    tabTextStyle: {
      color: colors.placeholder,
      fontFamily: typography.regular,
      fontSize: FontSize.FONT_12Px,
    },
    dateContainer: {
      backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: scale(34),
      paddingVertical: scale(12),
      borderRadius: scale(30),
      borderWidth: 1,
      borderColor: colors.btnBorder,
    },
    locationText: {
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
    },
    dateText: {
      fontFamily: typography.regular,
      color: colors.black,
    },
    date: {
      color: colors.placeholder,
    },
    buttonStyle: {
      marginHorizontal: scale(18),
    },
  });
