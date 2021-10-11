import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import AnnounceScreen from './app/screens/AnnounceScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AnnounceScreen">
        <Stack.Screen name="AnnounceScreen" component={AnnounceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

