import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Landing from 'App/Screens/Landing';
import Dashboard from 'App/Screens/Dashboard';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator activeBackgroundColor="red">
      <Tab.Screen name="Landing" component={Landing} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
