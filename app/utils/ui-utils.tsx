import React from 'react';
import {View} from 'react-native';
import {scale} from '../theme/scale';
import {colors} from '../theme/colors';

export const UI_Constants = {
  paddingH: scale(10),
  borderRadius: scale(8),
  HeaderIconSize: scale(26),
};
const renderMarginVertical = (value: number) => {
  return <View style={{marginVertical: scale(value || 0)}} />;
};

const renderMarginBottom = (value: number) => {
  return <View style={{marginBottom: scale(value || 0)}} />;
};

const renderMarginTop = (value: number) => {
  return <View style={{marginTop: scale(value || 0)}} />;
};

const renderPaddingVertical = (value: number) => {
  return <View style={{paddingVertical: scale(value || 0)}} />;
};

const renderPaddingBottom = (value: number) => {
  return <View style={{paddingBottom: scale(value || 0)}} />;
};

const renderPaddingTop = (value: number) => {
  return <View style={{paddingTop: scale(value || 0)}} />;
};

const renderMarginHorizontal = (value: number) => {
  return <View style={{marginHorizontal: scale(value || 0)}} />;
};
const renderFlexView = () => {
  return <View style={{flex: 1}} />;
};

const renderBoderBottom = (value: number) => {
  return (
    <View
      style={{
        marginTop: scale(value),
        borderBottomWidth: 1,
        borderBottomColor: colors.btnBorder,
      }}
    />
  );
};

export {
  renderFlexView,
  renderMarginBottom,
  renderMarginHorizontal,
  renderMarginTop,
  renderMarginVertical,
  renderPaddingBottom,
  renderPaddingTop,
  renderPaddingVertical,
  renderBoderBottom,
};
