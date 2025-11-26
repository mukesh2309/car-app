import React from 'react';
import {AppNavigator} from './app/navigators/app-navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from './app/theme/colors';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
