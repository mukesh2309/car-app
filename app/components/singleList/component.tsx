import {View, Text} from 'react-native';
import React, {JSX} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {createStyles} from './singlelist.styles';

interface ISingleListProps {
  component: JSX.Element;
  text: string;
}

const SingleList = ({component, text}: ISingleListProps) => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <View style={styles.frcg}>
        <View style={styles.iconContainer}>{component}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        color={colors.gray}
        size={scale(24)}
      />
    </View>
  );
};

export default SingleList;
