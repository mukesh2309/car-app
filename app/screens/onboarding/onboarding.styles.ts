import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    overLay: {
      flex: 1,
      paddingHorizontal: scale(18),
      justifyContent: 'space-between',
      paddingTop: scale(12),
    },
    logoContainer: {
      backgroundColor: colors.white,
      padding: scale(12),
      alignSelf: 'flex-start',
      marginTop: scale(32),
      borderRadius: 100,
    },
    carLogo: {
      height: scale(36),
      width: scale(36),
    },
    textContainer: {
      marginTop: scale(30),
    },
    title: {
      color: colors.white,
      fontSize: FontSize.FONT_40Px,
      fontFamily: typography.semiBold,
    },
    title2: {
      fontSize: FontSize.FONT_30Px,
    },
    buttonStyle: {
      marginBottom: scale(32),
    },
    buttonText: {
      fontFamily: typography.bold,
    },
    infoTextContainer: {
      marginBottom: scale(42),
    },
    infoText: {
      fontSize: FontSize.FONT_13Px,
      color: colors.white,
      fontFamily: typography.regular,
    },
  });
