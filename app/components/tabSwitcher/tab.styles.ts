import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {FontSize} from '../../theme/font-size';
import {scale} from '../../theme/scale';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    typeView: {
      paddingVertical: scale(12),
    },
    contentContainerStyle: {
      justifyContent: 'space-between',
      flex: 1,
    },
    tabContainer: {
      flexDirection: 'row',
      columnGap: scale(12),
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: colors.btnBorder,
      borderRadius: scale(30),
    },
    filterTypeText: {
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
    },
    tab: {
      paddingHorizontal: scale(20),
      paddingVertical: scale(12),
      borderRadius: scale(30),
    },
    activeTab: {
      backgroundColor: colors.black,
    },
    tabText: {
      fontSize: FontSize.FONT_14Px,
      color: colors.black,
      fontFamily: typography.medium,
    },
    tabTextActive: {
      color: colors.white,
    },
  });
