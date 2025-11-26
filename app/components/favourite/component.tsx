import React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from '../../theme/scale';
import {createStyles} from './favourite.styles';

interface IFav {
  favStyles: ViewStyle;
}

const FavouriteComponent = ({favStyles}: IFav) => {
  const styles = createStyles();
  return (
    <Pressable style={[styles.favContainer, favStyles]}>
      <MaterialCommunityIcons name={'cards-heart-outline'} size={scale(18)} />
    </Pressable>
  );
};

export default FavouriteComponent;
