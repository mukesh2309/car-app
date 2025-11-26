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
    main: {
      flex: 1,
    },
    p18: {
      paddingHorizontal: scale(18),
    },
    carLogo: {
      height: scale(38),
      width: scale(38),
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(14),
      paddingVertical: scale(12),
    },
    titleStyle: {
      fontSize: FontSize.FONT_24Px,
      color: colors.black,
      fontFamily: typography.bold,
    },
    header: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingHorizontal: scale(18),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    borderRound: {
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: 'center',
      justifyContent: 'center',
      height: scale(40),
      width: scale(40),
      borderRadius: scale(100),
    },
    wh: {
      backgroundColor: colors.white,
    },
    person: {
      height: scale(40),
      width: scale(40),
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    inputContainer: {
      flex: 1,
      marginTop: 0,
      height: scale(45),
      paddingVertical: 0,
    },
    text: {
      fontSize: FontSize.FONT_16Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
    showCase: {
      rowGap: scale(12),
      marginTop: scale(12),
    },

    showCaseCars: {
      backgroundColor: colors.white,
      flex: 1,
      borderTopLeftRadius: scale(30),
      borderTopRightRadius: scale(30),
      marginTop: scale(24),
      paddingTop: scale(20),
    },
    viewAll: {
      color: colors.placeholder,
      fontSize: FontSize.FONT_12Px,
    },
    viewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
