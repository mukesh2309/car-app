import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {createStyles} from './carbrand.styles';
import assets from '../../assets';
import {ICarProps} from './ICar.props';
import {renderMarginTop} from '../../utils/ui-utils';

const CarBrandComponent = ({
  text,
  isHorizontal = false,
  isSelected = 1,
  item,
}: ICarProps) => {
  const {tesla} = assets;
  const styles = createStyles(isHorizontal, isSelected === item);
  return (
    <Pressable style={[styles.brandContainer]}>
      <View style={styles.brand}>
        <Image resizeMode="contain" source={tesla} style={styles.brandImage} />
      </View>
      {renderMarginTop(4)}
      <Text style={styles.brandText}>{text}</Text>
    </Pressable>
  );
};

export default CarBrandComponent;
