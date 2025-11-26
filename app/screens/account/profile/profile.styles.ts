import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {FontSize} from '../../../theme/font-size';
import {typography} from '../../../theme/typography';
import {scale} from '../../../theme/scale';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    main: {
      paddingHorizontal: scale(18),
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: scale(12),
    },
    profileImage: {
      height: scale(70),
      width: scale(70),
    },
    frcg: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
    },
    aic: {
      alignItems: 'center',
    },
    title: {
      fontSize: FontSize.FONT_16Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
    email: {
      fontSize: FontSize.FONT_14Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    editProfile: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
  });
