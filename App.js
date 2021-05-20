import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView } from 'react-native';
import WelcomePage from './screens/WelcomePage'
import BusinessLoginPage from './screens/BusinessLoginPage'
import BusinessesNearbyList from './screens/BusinessesNearbyList'
import BusinessViewPage from './screens/BusinessViewPage'

const CUR_BUSINESSES = [
  {
      username: 'halol',
      title: 'The Halal Guys',
      type: 'Food',
      distance: 0.2,
      phonenumber: '718-396-1895',
      menu: [
        {
          name : "Chicken Over Rice",
          price: 6.99,
          description: "Very Tasty Chicken Over Rice Very Tasty Chicken Over Rice Very Tasty Chicken Over Rice Very Tasty Chicken Over Rice"
        },
        {
          name : "Beef Over Rice",
          price: 7.99,
          description: "Very Tasty Beef Over Rice Very Tasty Beef Over Rice Very Tasty Beef Over Rice Very Tasty Beef Over Rice"
        },
      ],
  },
  {
      username: 'johnnygarage',
      title: 'Johnnys Garage Sale',
      type: 'General',
      distance: 0.5,
      menu: [
        {
          name : "Shirt",
          price: 6.99,
          description: "Good Shirt"
        },
        {
          name : "Pants",
          price: 17.99,
          description: "Amazing pants"
        },
      ],
  },
  {
      username: 'runawayny',
      title: 'Runaway New York',
      type: 'Clothing',
      distance: 1.2,
  },
];

export default function App() {

  return (
    <SafeAreaView style = {{flex: 10}}>
      <BusinessViewPage business = {CUR_BUSINESSES[0]}/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

