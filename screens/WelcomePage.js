import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IntroButton} from '../components/buttons'

const WelcomePage = () => {
    return (
        <View style = {styles.container}>
      <View style = {styles.introTextContainer}>
        <Text style = {styles.regularText}>find </Text>
        <Text style = {styles.boldText}>food trucks,</Text>
        <Text style = {styles.boldText}>popup shops,</Text>
        <Text style = {styles.boldText}>garage sales,</Text>
        <View style = {{flexDirection: 'row'}}>
          <Text style = {styles.regularText}>and </Text>
          <Text style = {styles.boldText}>more</Text>
        </View>
        <Text style = {styles.regularText}>happening </Text>
        <Text style = {styles.regularText}>near you </Text>
      </View>
      <View style = {styles.introButtonContainer} >
        <IntroButton text = 'I want to find stuff'/>
        <View style = {{padding: 10}}></View>
        <IntroButton text = 'I want to sell stuff'/>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor:'lavender',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    introTextContainer: {
      left : 25,
      justifyContent: 'center'
    },
    regularText: {
      fontFamily: 'Helvetica Neue',
      fontSize: 32,
    },
    boldText: {
      fontFamily: 'Helvetica Neue',
      fontSize: 32,
      fontWeight: 'bold',
    },
    introButtonContainer: {
      justifyContent:"flex-start", 
      flex: 1.5,
      left: 18,
      padding: 8,
    },
  })

  export default WelcomePage;