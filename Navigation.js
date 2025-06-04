

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen.js';
import CursoScreen from './screens/CursoScreen.js';
import AnaGabryelliScreen from './screens/AnaGabryelliScreen.js';
import SenaiScreen from './screens/SenaiScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#fbc02d',  // amarelo ouro (ativo)
          tabBarInactiveTintColor: '#6a1b9a', // roxo escuro (inativo)
          tabBarStyle: {
            backgroundColor: '#fff8e1',  // amarelo clarinho (fundo)
            borderTopColor: '#8e24aa',  // roxo médio na borda
            height: 60,
            paddingBottom: 5,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Ana Gabryelli') iconName = 'person-circle-outline';
            else if (route.name === 'Settings') iconName = 'settings-outline';
            else if (route.name === 'Senai') iconName = 'school-outline';
            else if (route.name === 'Curso') iconName = 'document-text-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Ana Gabryelli" component={AnaGabryelliScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Senai" component={SenaiScreen} />
        <Tab.Screen name="Curso" component={CursoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
