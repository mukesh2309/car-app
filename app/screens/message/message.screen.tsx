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
            <SingleItem isHighlighted={[1, 2, 3, 6].includes(item)} />
          )}
        />
        {renderBoderBottom(90)}
      </View>
    </View>
  );
};

export default MessageScreen;
