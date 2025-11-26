import {View, Text, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {createStyles} from './feature.styles';

const FeatureComponent = () => {
  const styles = createStyles();
  return (
    <Pressable style={styles.featureContainer}>
      <Pressable style={styles.featureBorder}>
        <MaterialCommunityIcons
          name="sofa-single-outline"
          color={colors.gray}
          size={scale(20)}
        />
      </Pressable>
      <View>
        <Text style={styles.featureTitle}>Capacity</Text>
        <Text style={styles.featureInfo}>5 Seats</Text>
      </View>
    </Pressable>
  );
};

export default FeatureComponent;
