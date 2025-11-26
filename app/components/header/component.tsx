import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import assets from '../../assets';
import {goBack} from '../../navigators/navigation-utilities';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {createStyles} from './header.styles';
import {IHeaderProps} from './IHeader.props';

const HeaderComponent = ({
  title,
  hasBack = false,
  actionComponent,
}: IHeaderProps) => {
  const styles = createStyles();
  const {logo_black, person} = assets;

  return (
    <View style={styles.header}>
      <View style={styles.flexRow}>
        {hasBack ? (
          <Pressable onPress={goBack} style={styles.borderRound}>
            <MaterialIcons
              name="chevron-left"
              size={scale(28)}
              color={colors.black}
            />
          </Pressable>
        ) : (
          <React.Fragment>
            <Image source={logo_black} style={styles.carLogo} />
            <Text style={styles.titleStyle}>{title}</Text>
          </React.Fragment>
        )}
        {actionComponent}
      </View>
      {title && <Text style={[styles.titleStyle, styles.t20]}>{title}</Text>}
      <View style={styles.flexRow}>
        {hasBack ? (
          <Pressable style={styles.borderRound}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={scale(26)}
              color={colors.black}
            />
          </Pressable>
        ) : (
          <React.Fragment>
            <Pressable style={styles.borderRound}>
              <Octicons name="bell" size={scale(20)} color={colors.gray} />
            </Pressable>
            <Pressable>
              <Image source={person} style={styles.person} />
            </Pressable>
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;
