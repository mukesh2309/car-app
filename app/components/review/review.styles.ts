import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: scale(10),
      paddingHorizontal: scale(12),
      paddingVertical: scale(12),
      width: scale(240),
      marginRight: scale(18),
    },
    person: {
      width: scale(32),
      height: scale(32),
    },
    dayText: {
      color: colors.placeholder,
      fontSize: FontSize.FONT_12Px,
      fontFamily: typography.regular,
    },
    reviewTitle: {
      fontSize: FontSize.FONT_14Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
    frcg: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(10),
    },
    starsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(3),
      marginTop: scale(8),
      marginBottom: scale(8),
    },
    dayContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    frsb: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textBold: {
      fontFamily: typography.bold,
      fontSize: FontSize.FONT_14Px,
    },
    text: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
  });
