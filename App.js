import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import About from './views/About';
import Language from './views/Language';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={About} />
        <Tab.Screen name="Мои Языки" component={Language} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
