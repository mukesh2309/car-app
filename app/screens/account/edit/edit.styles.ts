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
      paddingHorizontal: scale(18),
    },
    profileImage: {
      height: scale(70),
      width: scale(70),
      borderWidth: 1,
      borderRadius: scale(100),
      borderColor: colors.gray,
    },
    title: {
      fontSize: FontSize.FONT_16Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
    profileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: scale(28),
      position: 'relative',
      alignSelf: 'center',
      paddingHorizontal: scale(20),
    },
    editContainer: {
      backgroundColor: colors.white,
      height: scale(22),
      width: scale(22),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(100),
      position: 'absolute',
      bottom: scale(60),
      right: scale(18),
      borderWidth: 1,
      borderColor: colors.gray,
    },
  });
