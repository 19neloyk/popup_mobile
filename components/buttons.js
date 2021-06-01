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

export class IconButton extends Component {
    makeAlert() {
        alert("YES")
    }    
    render(){
        return (
            <TouchableOpacity onPress = {this.makeAlert} >
                <View style = {styles.iconButtonContainer}>
                    <Text style = { {color: "white", fontSize: this.props.fontSize} }> 
                    {this.props.icon} 
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export class CircularIconButton extends Component {
    makeAlert() {
        alert("YES")
    }    
    render(){
        return (
            <TouchableOpacity onPress = {this.makeAlert} >
                <View style = {styles.circularIconButtonContainer}>
                    <Text style = { {color: "white", fontSize: this.props.fontSize} }> 
                    {this.props.icon} 
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export class DeleteButton extends Component {
    makeAlert() {
        alert("YES")
    }    
    render(){
        return (
            <TouchableOpacity onPress = {this.makeAlert} >
                <View style = {styles.deleteButtonContainer}>
                    <Text style = { {color: "white", fontSize: this.props.fontSize} }> 
                    Delete
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export class BusinessPageOptionsButton extends Component {
    makeAlert() {
        alert("YES")
    }    
    render(){
        return (
            <TouchableOpacity onPress = {this.makeAlert} >
                <View style = {styles.businessPageOptionsButtonContainer}>
                    <Text style = {styles.businessPageOptionsButtonText}> {this.props.text} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export class RegisterButton extends Component {
    makeAlert () {
        alert("YES")
    }

    render () {
        return (
            <TouchableOpacity onPress = {this.makeAlert} >
                <View style = {styles.businessPageOptionsButtonContainer}>
                  <Text style = {styles.businessPageOptionsButtonText}> Register </Text>
                </View>
            </TouchableOpacity> 
        )
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
    }, 
    iconButtonContainer : {
        backgroundColor: "grey",
        borderRadius: 15,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        padding : 6,
    }, 
    circularIconButtonContainer : {
        backgroundColor: "grey",
        borderRadius: 100000,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        padding : 6,
    },
    deleteButtonContainer : {
        backgroundColor: "red",
        borderRadius: 100000,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        padding : 6,
    },
    businessPageOptionsButtonContainer : {
        backgroundColor: "grey",
        borderRadius: 15,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        padding: 5
    },
    businessPageOptionsButtonText : {
        color: "white",
        fontSize: 28,
    },
    registerButtonContainer : {
        backgroundColor: "grey",
        borderRadius: 100000,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        padding : 6,
    },
    registerButtonText : {
        color: "white",
        fontSize: 28,
    },
})
