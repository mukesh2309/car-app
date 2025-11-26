import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    featureContainer: {
      backgroundColor: colors.outlineButtonBg,
      height: scale(118),
      flex: 1,
      borderRadius: scale(10),
      padding: scale(8),
      paddingBottom: scale(12),
      justifyContent: 'space-between',
    },
    featureTitle: {
      color: colors.placeholder,
      fontSize: FontSize.FONT_12Px,
      fontFamily: typography.semiBold,
    },
    featureInfo: {
      color: colors.black,
      fontSize: FontSize.FONT_14Px,
      fontFamily: typography.semiBold,
    },
    featureBorder: {
      backgroundColor: colors.white,
      height: scale(34),
      width: scale(34),
      borderRadius: scale(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
