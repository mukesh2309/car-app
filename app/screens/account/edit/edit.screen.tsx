import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import assets from '../../../assets';
import HeaderComponent from '../../../components/header/component';
import {createStyles} from './edit.styles';
import {renderMarginBottom} from '../../../utils/ui-utils';
import InputComponent from '../../../components/input/component';
import Button from '../../../components/button/component';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from '../../../theme/scale';
import {colors} from '../../../theme/colors';
import {useEdit} from './edit.hook';

const EditScreen = () => {
  const styles = createStyles();
  const {person} = assets;
  const {photo, selectImage} = useEdit();
  const source = photo?.uri ? {uri: photo?.uri} : person;
  return (
    <View style={styles.container}>
      <HeaderComponent title="Edit Profile" hasBack />
      <ScrollView style={styles.main}>
        <Pressable onPress={selectImage} style={styles.profileContainer}>
          <Image source={source} style={styles.profileImage} />
          <View style={styles.editContainer}>
            <Feather name="edit-3" size={scale(12)} color={colors.gray} />
          </View>
          {renderMarginBottom(6)}
          <Text style={styles.title}>John Doe</Text>
        </Pressable>
        <InputComponent placeholder="John" onChangeText={e => console.log(e)} />
        <InputComponent placeholder="Doe" onChangeText={e => console.log(e)} />
        <InputComponent
          placeholder="john@example.com"
          onChangeText={e => console.log(e)}
        />
        <InputComponent
          placeholder="+0000"
          onChangeText={e => console.log(e)}
        />
        {renderMarginBottom(28)}
        <Button text="Save" />
      </ScrollView>
    </View>
  );
};

export default EditScreen;
