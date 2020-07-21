import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import StatesRed from './src/components/StatesRed'
import StatesOrange from './src/components/StatesOrange'

export default function App() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"red"} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Mortos') {
              iconName = focused ? 'shield-cross-outline' : 'shield-cross-outline';

            } else if (route.name === 'Infectados') {
              iconName = focused ? 'emoticon-sad-outline' : 'emoticon-sad-outline';

            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen name="Mortos" component={StatesRed} />
        <Tab.Screen name="Infectados" component={StatesOrange} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}