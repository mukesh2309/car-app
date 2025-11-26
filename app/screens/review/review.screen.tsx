import React from 'react';
import {FlatList, View} from 'react-native';
import HeaderComponent from '../../components/header/component';
import {createStyles} from './review.styles';
import Button from '../../components/button/component';
import InputComponent from '../../components/input/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import ReviewComponent from '../../components/review/component';
import {renderMarginBottom, renderMarginTop} from '../../utils/ui-utils';
import {navigate} from '../../navigators/navigation-utilities';

const ReviewScreen = () => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <HeaderComponent title="Reviews" hasBack />
      <View style={styles.main}>
        <InputComponent
          onChangeText={e => console.log(e)}
          leftAction={
            <MaterialIcons color={colors.gray} name="search" size={scale(22)} />
          }
          placeholder="Find Reviews ......"
        />
        <View style={styles.flatListContainer}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <ReviewComponent
                key={index}
                containerStyle={styles.reviewCard}
                fromReview
              />
            )}
          />
        </View>
        {renderMarginTop(8)}
        <Button
          onPress={() => navigate('BookingDetailsScreen')}
          text="Book Now"
        />
        {renderMarginBottom(8)}
      </View>
    </View>
  );
};

export default ReviewScreen;
