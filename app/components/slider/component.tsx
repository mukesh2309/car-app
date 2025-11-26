import React, {useRef, useState} from 'react';
import {View, Image, FlatList, Animated, Dimensions} from 'react-native';
import {createStyles} from './slider.styles';
import {scale} from '../../theme/scale';
import FavouriteComponent from '../favourite/component';

const {width} = Dimensions.get('window');

const ImageSlider = ({images}: {images: string[]}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };
  const styles = createStyles();
  return (
    <View>
      <FavouriteComponent favStyles={{right: scale(18), top: scale(12)}} />
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={{width, height: scale(220)}}
            resizeMode="cover"
          />
        )}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false, listener: handleScroll},
        )}
      />

      <View style={styles.dots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              [
                {
                  backgroundColor: index === currentIndex ? '#333' : '#bbb',
                },
                styles.dot,
              ],
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;
