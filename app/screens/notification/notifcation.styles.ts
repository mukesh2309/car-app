import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = (unRead?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    main: {
      flex: 1,
    },
    notificationContainer: {
      marginBottom: scale(12),
      paddingHorizontal: scale(18),
      paddingVertical: scale(12),
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
      flex: 1,
      backgroundColor: unRead ? colors.white : colors.background,
    },
    notificationTitle: {
      fontSize: FontSize.FONT_14Px,
      color: colors.black,
      fontFamily: typography.medium,
    },
    notificationText: {
      fontSize: FontSize.FONT_14Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    textContainer: {
      flexShrink: 1,
    },
    iconContainer: {
      height: scale(40),
      width: scale(40),
      borderWidth: 1,
      borderColor: colors.btnBorder,
      borderRadius: scale(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
    notificationHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    notificationTime: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
    badge: {
      height: scale(7),
      width: scale(7),
      backgroundColor: colors.badgeBg,
      borderRadius: scale(100),
    },
  });
