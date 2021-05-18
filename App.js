import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView } from 'react-native';
import WelcomePage from './screens/WelcomePage'
import BusinessLoginPage from './screens/BusinessLoginPage'

export default function App() {

  return (
    <SafeAreaView style = {{flex: 10}}>
      <BusinessLoginPage/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

