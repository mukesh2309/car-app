import {View, Text} from 'react-native';
import React from 'react';
import {createStyles} from './chatcard.styles';
import {renderMarginBottom} from '../../utils/ui-utils';

interface IChatCardProps {
  isSelf: boolean;
  message?: string;
  time?: string;
}

const ChatCard = ({isSelf = false, message = '', time}: IChatCardProps) => {
  const styles = createStyles(isSelf);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>{message}</Text>
      </View>
      {renderMarginBottom(2)}
      <Text style={styles.timeStamp}>{time}</Text>
    </View>
  );
};

export default ChatCard;
