import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView } from 'react-native';
import WelcomePage from './screens/WelcomePage'
import BusinessLoginPage from './screens/BusinessLoginPage'
import BusinessesNearbyList from './screens/BusinessesNearbyList'
import BusinessViewPage from './screens/BusinessViewPage'
import BusinessViewPageEdit from './screens/BusinessViewPageEdit'

const CUR_BUSINESSES = [
  {
      username: 'halol',
      title: 'The Halal Guys',
      type: 'Food',
      distance: 0.2,
      phonenumber: '7183961895',
      menu: [
        {
          name : "Chicken Over Rice",
          price: 6.99,
          description: "Very good chicken over rice that can be served with an extra of hot sauce (made Meditteranean) or white sauce. This is halal and contains almost no common allergies."
        },
        {
          name : "Beef Over Rice",
          price: 7.99,
          description: "Very good beef over rice that can be served with an extra of hot sauce (made Meditteranean) or white sauce. This is halal and contains almost no common allergies. However, not that this product contains beef, so your religion may not agree with it."
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
    <SafeAreaView style = {{flex: 1}}>
      <BusinessesNearbyList business = {CUR_BUSINESSES}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

