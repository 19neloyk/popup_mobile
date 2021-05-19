import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {LoginButton, SignUpButton} from '../components/buttons'
import Spacer from '../components/spacer'

 const BusinessLoginPage = () => {

    const [usernameText, onChangeUsernameText] = React.useState("");
    const [passwordText, onChangePasswordText] = React.useState("");

    return (
        <View style = {styles.container}>
            <Spacer height = {25} />
            <Text style = {styles.businessLoginText}>Business Login</Text>
            <Spacer height = {20} />
            <View style ={styles.headerContainer}>
                <Text style = {styles.headerText}>Username</Text>
            </View>
            <TextInput
            style = {styles.usernameInput}
            onChangeText = {onChangeUsernameText}
            value = {usernameText} 
            placeholder = "  Username"
            />

            <View style = {{height: 30}}></View>

            <View style ={styles.headerContainer}>
                <Text style = {styles.headerText}>Password</Text>
            </View>
            
            <TextInput
            style = {styles.passwordInput}
            onChangeText = {onChangePasswordText}
            value = {passwordText} 
            placeholder = "  Password"
            />
            <Spacer height = {20} />
            <LoginButton left = {22}/>
            <Spacer height = {25} />
            <Text style = {styles.headerText}>Need an account?</Text>
            <SignUpButton/>
            <View style = {{flex: 5}}></View>
        </View>   
    )
 }

 const styles= StyleSheet.create({
     container : {
        flex: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: "lavender",
     },
     businessLoginText : {
        fontFamily: 'Helvetica Neue',
        fontSize: 30, 
        fontWeight:"bold",
        left: 22,
     },
     headerContainer: {
        flex: 1,
     },
     headerText: {
        fontFamily: 'Helvetica Neue',
        fontSize: 25,   
        left: 22,

     },
     usernameInput :{
        height: 45, 
        width:"66%",
        borderWidth: 0.5,
        left: 22,
        backgroundColor: "#c7c5de",
     },
     passwordInput :{
        height: 45,
        width: "66%",
        borderWidth: 0.5,
        left: 22,
        backgroundColor: "#c7c5de",
     },
     signUpText : {
      fontFamily: 'Helvetica Neue',
      fontSize: 22,
      fontWeight:"bold",
      color: "blue",
      left: 22,
     }     
 })

 export default BusinessLoginPage;