import React from 'react';
import {View, Text} from 'App/Tailwind';

import style from 'App/Styles/Global';

const App = () => {
  return (
    <View className={style.container}>
      <Text className={style.title}>Log in</Text>
    </View>
  );
};

export default App;
