import React, {Component} from 'react';
import {View, Text,StyleSheet,  TouchableOpacity} from 'react-native'


export class IntroButton extends Component {
    makeAlert() {
        alert("YES")
    }    
    render(){
        return (
            <TouchableOpacity onPress = {this.makeAlert} >
                <View style = {styles.introButton}>
                    <Text style = {{fontSize : 18}}>{this.props.text}</Text>  
                </View> 
            </TouchableOpacity>
        );
    }
}

export class LoginButton extends Component {
    makeAlert() {
        alert("YES")
    }    
    render(){
        return (
            <TouchableOpacity onPress = {this.makeAlert} >
                <View style = {styles.loginButton}>
                    <Text style = {{fontSize : 18, fontFamily: "Helvetica Neue"}}>  Login  </Text>  
                </View> 
            </TouchableOpacity>
        );
    }
}

export class SignUpButton extends Component {
    makeAlert() {
        alert("YES")
    }    
    render(){
        return (
            <TouchableOpacity onPress = {this.makeAlert} >
                <Text style = {styles.signUpButtonText}>Sign up here.</Text>  
            </TouchableOpacity>
        );
    }
}



const styles = StyleSheet.create({
    introButton: {
        borderWidth: 1.4,
        borderRadius: 20,
        padding: 8
    },
    loginButton : {
        borderWidth: .7,
        borderRadius: 10,
        padding: 6,
        left: 22
    },
    signUpButtonText : {
      fontFamily: 'Helvetica Neue',
      fontSize: 22,
      fontWeight:"bold",
      color: "blue",
      left: 22,
    } 
})
