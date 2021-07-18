import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Details, Home } from '../screens';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Platform } from 'react-native';


/* const Stack = createStackNavigator(); */
const Stack = createSharedElementStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress,
            },
          }),
        }}
      >
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="Details"
          component={Details}


          sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;

            if (Platform.OS === 'android') return [];

            return [
              {
                id: `item.${item.id}.photo`
              },
              {
                id: `item.${item.id}.name`,
                animation: "fade",
                resize: "clip",
                align: "left-top",
              }
            ]
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}