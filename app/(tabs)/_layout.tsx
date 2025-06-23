// import { StyleSheet } from 'react-native'
import { Tabs } from 'expo-router';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const _layout = () => {
  return (
    <Tabs
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'index') {
          iconName = 'home';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
    })}
    >
    <Tabs.Screen  name="index" options={{title: 'Compare',headerShown: false}}/>
    <Tabs.Screen  name="Profile" options={{headerShown: false}}/>
  </Tabs>
  )
}

export default _layout

// const styles = StyleSheet.create({})