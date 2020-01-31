import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from 'App/Screens/Landing';
import Dashboard from 'App/Screens/Dashboard';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavigator" headerMode="none">
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
