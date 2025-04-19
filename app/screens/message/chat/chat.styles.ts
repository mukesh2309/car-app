import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    main: {
      flex: 1,
      paddingHorizontal: scale(18),
      paddingVertical: scale(8),
    },
    sendInput: {
      flex: 1,
      marginTop: 0,
    },
    sendMessageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: scale(8),
      columnGap: scale(10),
    },
  });
