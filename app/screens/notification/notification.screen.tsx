import React from 'react';
import {FlatList, View} from 'react-native';
import HeaderComponent from '../../components/header/component';
import {createStyles} from './notifcation.styles';
import SingleItem from './component/singleItem';
import {renderMarginBottom} from '../../utils/ui-utils';

const NotificationScreen = () => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <HeaderComponent title="Notification" hasBack />
      <View style={styles.main}>
        <FlatList
          data={[1, 2, 3, 3, 3, 4, 3]}
          renderItem={({item}) => <SingleItem unRead={item % 2 === 0} />}
        />
        {renderMarginBottom(80)}
      </View>
    </View>
  );
};

export default NotificationScreen;
