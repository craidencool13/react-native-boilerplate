import React from 'react';
import {View, Text} from 'App/Tailwind';
import style from 'App/Styles/Global';

const Landing = () => {
  return (
    <View className={style.container}>
      <Text className={style.title}>Landing</Text>
    </View>
  );
};

export default Landing;
