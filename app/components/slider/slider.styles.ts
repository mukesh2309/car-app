import {StyleSheet} from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    dots: {flexDirection: 'row', justifyContent: 'center', marginTop: 10},
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
  });
