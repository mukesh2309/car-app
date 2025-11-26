import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {createStyles} from '../notifcation.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from '../../../theme/scale';
import {colors} from '../../../theme/colors';
import {renderMarginBottom} from '../../../utils/ui-utils';

interface ISingleItemProps {
  unRead: boolean;
}
const SingleItem = ({unRead = true}: ISingleItemProps) => {
  const styles = createStyles(unRead);
  return (
    <Pressable style={styles.notificationContainer}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="archive-cancel-outline"
          size={scale(24)}
          color={colors.gray}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>Car Booking Lorem ipsum</Text>
          <Text style={styles.notificationTime}>
            12:54 am {'\t'} {unRead && <View style={styles.badge} />}
          </Text>
        </View>
        {renderMarginBottom(4)}
        <Text
          style={styles.notificationText}
          ellipsizeMode="tail"
          numberOfLines={5}>
          Car Booking Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Labore temporibus consectetur, obcaecati expedita laudantium Labore
          temporibus
        </Text>
      </View>
    </Pressable>
  );
};

export default SingleItem;
