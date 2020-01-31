import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';

import StackNavigator from './StackNavigator';

const RootNavigator = () => {
  return (
    <NavigationNativeContainer>
      <StackNavigator />
    </NavigationNativeContainer>
  );
};

export default RootNavigator;
