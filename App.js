import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView } from 'react-native';
import WelcomePage from './screens/WelcomePage'

export default function App() {

  return (
    <SafeAreaView style = {{flex: 10}}>
      <WelcomePage/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

