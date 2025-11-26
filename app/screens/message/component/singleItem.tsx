import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {createStyles} from '../message.styles';
import assets from '../../../assets';

interface ISingleItemProps {
  isHighlighted?: boolean;
  name: string;
  message: string;
  time: string;
  badge: number;
  onPress: () => void;
}
const SingleItem = ({
  name,
  message,
  time,
  badge,
  isHighlighted,
  onPress = () => {},
}: ISingleItemProps) => {
  const styles = createStyles(isHighlighted);
  return (
    <Pressable onPress={onPress} style={styles.singleItem}>
      <Image source={assets.person} style={styles.person} />
      <View style={styles.messageContainer}>
        <Text style={styles.name}>John Doe</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>
          Hello, how are you? Hello,
        </Text>
      </View>
      <View style={styles.timeContainer}>
        {isHighlighted && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        )}
        <Text style={styles.time}>12:00 PM</Text>
      </View>
    </Pressable>
  );
};

export default SingleItem;
