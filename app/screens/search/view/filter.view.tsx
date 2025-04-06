import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomSheet} from '../../../components/bottomSheet/BottomSheet';
import TabSwitcher from '../../../components/tabSwitcher/component';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {
  renderBoderBottom,
  renderMarginBottom,
  renderMarginTop,
} from '../../../utils/ui-utils';
import {IFilterProps} from '../ISearch.props';
import {createStyles} from '../search.styles';
import InputComponent from '../../../components/input/component';
import {data, FuelType, rentalData, sitingCapacity} from './filter.data';
import Button from '../../../components/button/component';
import DateComponent from '../../../components/date/component';

const FilterView = ({visible, setVisible}: IFilterProps) => {
  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const styles = createStyles();

  return (
    <BottomSheet visible={visible} setVisible={setVisible}>
      <View style={styles.filterView}>
        <View style={styles.header}>
          <Pressable>
            <MaterialIcons
              name="close"
              size={scale(22)}
              color={colors.crossBg}
              onPress={() => setVisible(false)}
            />
          </Pressable>
          <Text style={styles.text}>Filters</Text>
          <View style={styles._f08} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.filterContainer}>
            <TabSwitcher
              title="Type of Cars"
              data={data}
              onPress={e => console.log(e)}
            />
            {renderBoderBottom(10)}
            {renderMarginBottom(16)}
            <View style={styles.frsb}>
              <Text style={styles.filterTypeText}>Price Range</Text>
              <Text style={styles.filterTypeText}>{value}$</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={min}
              maximumValue={max}
              step={1}
              minimumTrackTintColor={colors.black}
              maximumTrackTintColor={colors.black}
              thumbTintColor={colors.black}
              value={value}
              onValueChange={e => setValue(e)}
            />
            <View style={styles.frsb}>
              <InputComponent
                keyboardType="numeric"
                onChangeText={e => setMin(Number(e))}
                placeholder="Min"
                containerStyle={styles.inputContainer}
              />
              <InputComponent
                keyboardType="numeric"
                onChangeText={e => setMax(Number(e))}
                placeholder="Max"
                containerStyle={styles.inputContainer}
              />
            </View>
            {renderMarginTop(16)}
            {renderBoderBottom(10)}
            {renderMarginBottom(16)}
            <TabSwitcher
              title="Rental Time"
              data={rentalData}
              onPress={e => console.log(e)}
              tabContainerStyle={styles.tabContainerStyle}
              tabStyle={styles.tabStyle}
              tabTextStyle={styles.tabTextStyle}
            />
            {renderMarginTop(8)}
            <View style={styles.frsb}>
              <Text style={styles.placeHolder}>Pick up and Drop Date</Text>
              <Text
                onPress={() => setShowDatePicker(true)}
                style={styles.placeHolder}>
                05 June 2025
              </Text>
            </View>
            {renderMarginTop(8)}
            <InputComponent
              onChangeText={e => setMin(Number(e))}
              placeholder="Car Location"
            />
            {renderMarginTop(16)}
            {renderBoderBottom(10)}
            {renderMarginBottom(16)}
            <TabSwitcher
              title="Siting Capacity"
              data={sitingCapacity}
              onPress={e => console.log(e)}
              tabContainerStyle={styles.tabContainerStyle}
              tabStyle={[styles.tabStyle, styles.sitingCapTab]}
              tabTextStyle={styles.tabTextStyle}
            />
            <TabSwitcher
              title="Fuel Type"
              data={FuelType}
              onPress={e => console.log(e)}
              tabContainerStyle={styles.tabContainerStyle}
              tabStyle={styles.tabStyle}
              tabTextStyle={styles.tabTextStyle}
            />
            {renderBoderBottom(10)}
            {renderMarginBottom(16)}
            <View style={styles.frsb}>
              <Text style={styles.clearAll}>Clear All</Text>
              <Button
                text="Show 100+ cars"
                textStyles={styles.btnTextStyle}
                buttonStyles={styles.btnContainerStyle}
              />
            </View>
            {renderMarginBottom(16)}
          </View>
        </ScrollView>
        <DateComponent
          visible={showDatePicker}
          setVisible={setShowDatePicker}
        />
      </View>
    </BottomSheet>
  );
};

export default FilterView;
