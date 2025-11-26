import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import assets from '../../assets';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {renderMarginBottom} from '../../utils/ui-utils';
import {createStyles} from './car.styles';
import {ICarComponentProps} from './ICar.props';
import FavouriteComponent from '../favourite/component';

const CarComponent = ({bottomActions, onPress}: ICarComponentProps) => {
  const styles = createStyles();
  const {ferrari} = assets;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <FavouriteComponent />
      <View style={styles.carBackground}>
        <Image source={ferrari} resizeMode="contain" style={styles.carImage} />
      </View>
      <View style={styles.textContainer}>
        {renderMarginBottom(4)}
        <Text style={styles.title}>Ferrari</Text>
        {renderMarginBottom(4)}
        <View style={styles.flex}>
          <Text style={styles.title}>5.0</Text>
          <FontAwesome name="star" size={scale(14)} color={colors.star} />
        </View>
        {renderMarginBottom(4)}
        <View style={[styles.flex]}>
          <MaterialIcons
            name="location-pin"
            size={scale(16)}
            color={colors.gray}
          />
          <Text style={styles.text}>WashingTon DC</Text>
        </View>
        {renderMarginBottom(6)}
        {bottomActions ? (
          bottomActions
        ) : (
          <View style={[styles.flex, styles.priceContainer]}>
            <View style={[styles.flex]}>
              <MaterialCommunityIcons
                name="sofa-single-outline"
                size={scale(16)}
                color={colors.gray}
              />
              <Text style={[styles.text, styles.textBold]}>4 Seats</Text>
            </View>
            <View style={[styles.flex]}>
              <Pressable style={styles.dollarContainer}>
                <Fontisto name="dollar" size={scale(8)} color={colors.gray} />
              </Pressable>
              <Text style={[styles.text, styles.textBold, styles.price]}>
                $200/Day
              </Text>
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default CarComponent;
