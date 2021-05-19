import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView } from 'react-native';
import WelcomePage from './screens/WelcomePage'
import BusinessLoginPage from './screens/BusinessLoginPage'
import BusinessesNearbyList from './screens/BusinessesNearbyList'

export default function App() {

  return (
    <SafeAreaView style = {{flex: 10}}>
      <BusinessesNearbyList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

