import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {FontSize} from '../../theme/font-size';
import {scale} from '../../theme/scale';
import {typography} from '../../theme/typography';
const {width} = Dimensions.get('window');

export const createStyles = () =>
  StyleSheet.create({
    card: {
      width: width * 0.9,
      height: scale(190),
      borderRadius: scale(20),
      padding: scale(20),
      justifyContent: 'space-between',
      shadowColor: colors.black,
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 8,
    },
    rowG20: {
      rowGap: scale(20),
    },
    nameRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(36),
    },
    expireRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(10),
    },
    visaText: {
      color: colors.white,
      fontSize: FontSize.FONT_24Px,
      fontWeight: 'bold',
      alignSelf: 'flex-end',
    },
    cardNumber: {
      color: colors.white,
      fontSize: FontSize.FONT_18Px,
      letterSpacing: 2,
      marginBottom: scale(4),
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      fontSize: FontSize.FONT_12Px,
      color: colors.white,
    },
    info: {
      color: colors.white,
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.medium,
    },
  });
