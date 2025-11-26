import React from 'react';
import {Image, Pressable, Text, View, ViewStyle} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import assets from '../../assets';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {createStyles} from './review.styles';

interface IReviewComponent {
  containerStyle?: ViewStyle;
  fromReview?: boolean;
  ratingCount?: number;
}

const ReviewComponent = ({
  containerStyle,
  fromReview,
  ratingCount = 4,
}: IReviewComponent) => {
  const styles = createStyles();
  const {person} = assets;
  return (
    <Pressable style={[styles.card, containerStyle]}>
      <View style={styles.frsb}>
        <View style={styles.frcg}>
          <Image source={person} style={styles.person} resizeMode="contain" />
          <Text style={styles.reviewTitle}>John Doe</Text>
        </View>
        <View style={[styles.frcg, styles.dayContainer]}>
          {!fromReview && <Text style={styles.textBold}>5.0</Text>}
          {fromReview && <Text style={styles.dayText}>Today</Text>}
          {!fromReview && (
            <FontAwesome name="star" size={scale(18)} color={colors.star} />
          )}
        </View>
      </View>
      {fromReview && (
        <View style={styles.starsContainer}>
          {Array.from({length: 5}).map((_, index) => (
            <FontAwesome
              name="star"
              size={scale(14)}
              color={index < ratingCount ? colors.star : colors.unFilledStar}
            />
          ))}
        </View>
      )}
      <Text style={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum alias
        accusantium qui rerum iste perferendis consectetur non voluptatibus,
      </Text>
    </Pressable>
  );
};

export default ReviewComponent;
