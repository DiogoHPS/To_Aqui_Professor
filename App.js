// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './app/components/HomeScreen';
import LoginScreen from './app/components/LoginScreen';
import RegisterScreen from './app/components/RegisterScreen';
import ProfileScreen from './app/components/ProfileScreen';
import LostPasword from './app/components/LostPassword';
// import SettingsScreen from './app/components/SettingsScreen';
// import AnotherScreen from './app/components/AnotherScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Another') {
            iconName = 'more-horiz';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FED402',
        inactiveTintColor: '#0D3068',
        style: { backgroundColor: '#0D3068' },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      {/* <Tab.Screen name="Another" component={AnotherScreen} /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="LostPass" component={LostPasword} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
