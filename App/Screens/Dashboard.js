import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'App/Tailwind';
import style from 'App/Styles/Global';

const Dashboard = () => {
  const {navigate} = useNavigation();
  return (
    <View className={style.container}>
      <Text className={style.title}>Dashboard</Text>
      <TouchableOpacity onPress={() => navigate('Landing')}>
        <Text>Go to landing page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
