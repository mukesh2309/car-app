import React from 'react';
import {View, FlatList} from 'react-native';
import HeaderComponent from '../../components/header/component';
import {HeaderAction} from './component/header';
import {createStyles} from './message.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../theme/colors';
import InputComponent from '../../components/input/component';
import {scale} from '../../theme/scale';
import SingleItem from './component/singleItem';
import {renderBoderBottom} from '../../utils/ui-utils';
import {navigate} from '../../navigators/navigation-utilities';

const MessageScreen = () => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <HeaderComponent hasBack actionComponent={<HeaderAction />} />
      <View style={styles.main}>
        <InputComponent
          onChangeText={e => console.log(e)}
          leftAction={
            <MaterialIcons color={colors.gray} name="search" size={scale(22)} />
          }
          placeholder="Search...."
          containerStyle={styles.input}
        />
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => (
            <SingleItem
              onPress={() =>
                navigate('rootStack', {
                  screen: 'ChatScreen',
                })
              }
              isHighlighted={[1, 2, 3, 6].includes(item)}
              name={''}
              message={''}
              time={''}
              badge={0}
            />
          )}
        />
        {renderBoderBottom(90)}
      </View>
    </View>
  );
};

export default MessageScreen;
