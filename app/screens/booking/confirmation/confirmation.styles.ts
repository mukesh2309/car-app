import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {FontSize} from '../../../theme/font-size';
import {typography} from '../../../theme/typography';
const {width} = Dimensions.get('window');

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
    image: {width: width - scale(40), height: scale(180)},
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: scale(12),
      flex: 1,
    },
    flex: {
      width: '70%',
    },
    title: {
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
    },
    reviewContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      columnGap: scale(4),
    },
    textBox: {},
    text: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    textBold: {
      fontFamily: typography.bold,
      fontSize: FontSize.FONT_14Px,
    },
    key: {
      fontSize: FontSize.FONT_14Px,
      color: colors.placeholder,
      fontFamily: typography.semiBold,
    },
    value: {
      fontSize: FontSize.FONT_14Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    horizontalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: scale(12),
    },
    bold: {
      fontFamily: typography.semiBold,
      color: colors.black,
    },
    btn: {
      marginHorizontal: scale(18),
    },
  });
