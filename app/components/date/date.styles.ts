import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 0.55,
      backgroundColor: colors.white,
      paddingTop: scale(12),
      borderTopRightRadius: scale(12),
      borderTopLeftRadius: scale(12),
      paddingHorizontal: scale(12),
      paddingVertical: scale(12),
      justifyContent: 'space-between',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: scale(18),
    },
    btn: {
      flex: 0.5,
      paddingVertical: scale(12),
    },
    outlineBtn: {
      flex: 0.4,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.black,
      paddingVertical: scale(12),
    },
    outlineText: {
      color: colors.black,
    },
  });
