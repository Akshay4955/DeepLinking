import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import MyTextInput from '../screens/MyTextInput';
import Counter from '../screens/Counter';

const RootStack = createNativeStackNavigator();

const config = {
  screens: {
    Home: 'home',
    Counter: 'counter',
  },
};

const RootNavigator = () => {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['deeplinking://app'],
        config,
      }}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
        <RootStack.Screen name="TextInput" component={MyTextInput} />
        <RootStack.Screen name="Counter" component={Counter} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
