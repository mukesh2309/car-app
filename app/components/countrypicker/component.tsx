import React from 'react';
import {BottomSheet} from '../bottomSheet/BottomSheet';
import {FlatList, Pressable, Text, View} from 'react-native';
import {createStyles} from './countrypicker.styles';
import {ICountryProps} from './ICountrypicker.props';

const countries = [
  {code: 'IN', name: 'India', flag: '🇮🇳', ph: '+91'},
  {code: 'US', name: 'United States', flag: '🇺🇸', ph: '+1'},
  {code: 'GB', name: 'United Kingdom', flag: '🇬🇧', ph: '+44'},
  {code: 'FR', name: 'France', flag: '🇫🇷', ph: '+33'},
];

const CountryComponent = ({onPress}: ICountryProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const styles = createStyles();

  return (
    <View>
      <Pressable
        onPress={() => setIsVisible(!isVisible)}
        style={styles.container}>
        <Text style={styles.text}>
          {selectedCountry?.flag}
          {'\t\t'}
          {selectedCountry?.name}
        </Text>
      </Pressable>
      <BottomSheet visible={isVisible} setVisible={setIsVisible}>
        <View style={styles.bottomSheet}>
          <FlatList
            data={countries}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Pressable
                onPress={() => {
                  setSelectedCountry(item);
                  setIsVisible(false);
                  onPress(item);
                }}
                style={styles.itemContainer}>
                <Text style={styles.text}>
                  {item?.flag} {'\t\t'}
                  {item?.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default CountryComponent;
