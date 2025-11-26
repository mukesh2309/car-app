import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    header: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingHorizontal: scale(18),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
    t20: {
      fontSize: FontSize.FONT_20Px,
    },
    carLogo: {
      height: scale(38),
      width: scale(38),
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
    person: {
      height: scale(40),
      width: scale(40),
    },
  });
