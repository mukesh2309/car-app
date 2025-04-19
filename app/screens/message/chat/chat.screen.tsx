import React from 'react';
import {FlatList, View} from 'react-native';
import HeaderComponent from '../../../components/header/component';
import {HeaderAction} from '../component/header';
import {createStyles} from './chat.styles';
import ChatCard from '../../../components/chatCard/component';
import InputComponent from '../../../components/input/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';

const ChatScreen = () => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <HeaderComponent hasBack actionComponent={<HeaderAction />} />
      <View style={styles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          inverted
          renderItem={({item}) => (
            <ChatCard
              message={item.message}
              time={item.time}
              isSelf={item.isSelf}
            />
          )}
          data={[
            {
              isSelf: false,
              message: 'okay fine ',
              time: '10:00 AM',
            },
            {
              isSelf: true,
              message: 'yes i am fine thank you',
              time: '9:00 AM',
            },
            {
              isSelf: false,
              message: 'Hello, how are you?',
              time: '8:00 AM',
            },
            {
              isSelf: true,
              message: 'Good morning!',
              time: '7:00 AM',
            },
          ]}
        />
        <View style={styles.sendMessageContainer}>
          <InputComponent
            containerStyle={styles.sendInput}
            onChangeText={e => console.log(e)}
            placeholder={'Send a message...'}
          />
          <MaterialIcons
            onPress={() => console.log('send')}
            name="send"
            color={colors.placeholder}
            size={scale(24)}
          />
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
