import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import HeaderComponent from '../../../components/header/component';
import {createStyles} from './profile.styles';
import assets from '../../../assets';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {renderMarginBottom} from '../../../utils/ui-utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleList from '../../../components/singleList/component';

const ProfileScreen = () => {
  const styles = createStyles();
  const {person} = assets;
  return (
    <View style={styles.container}>
      <HeaderComponent title="Profile" hasBack />
      <ScrollView style={styles.main}>
        <View style={styles.profileContainer}>
          <View style={styles.frcg}>
            <Image source={person} style={styles.profileImage} />
            <View>
              <Text style={styles.title}>John Doe</Text>
              <Text style={styles.email}>john@gmail.com</Text>
            </View>
          </View>
          <View style={styles.aic}>
            <Feather name="edit-3" size={scale(18)} color={colors.gray} />
            <Text style={styles.editProfile}>Edit Profile</Text>
          </View>
        </View>
        {renderMarginBottom(12)}
        <Text style={styles.title}>General</Text>
        {renderMarginBottom(6)}
        <SingleList
          component={
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={scale(24)}
              color={colors.gray}
            />
          }
          text="Favourite Cars"
        />
        <SingleList
          component={
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={scale(24)}
              color={colors.gray}
            />
          }
          text="Previous Rent"
        />
        <SingleList
          component={
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={scale(24)}
              color={colors.gray}
            />
          }
          text="Notification"
        />
        <SingleList
          component={
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={scale(24)}
              color={colors.gray}
            />
          }
          text="Partnership"
        />
        {renderMarginBottom(12)}
        <Text style={styles.title}>Support</Text>
        {renderMarginBottom(6)}
        <SingleList
          component={
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={scale(24)}
              color={colors.gray}
            />
          }
          text="Settings"
        />
        <SingleList
          component={
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={scale(24)}
              color={colors.gray}
            />
          }
          text="Languages"
        />
        <SingleList
          component={
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={scale(24)}
              color={colors.gray}
            />
          }
          text="Invite Friends"
        />
        <SingleList
          component={
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={scale(24)}
              color={colors.gray}
            />
          }
          text="Privacy Policy"
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
