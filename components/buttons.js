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

const styles = StyleSheet.create({
    introButton: {
        borderWidth: 1.4,
        borderRadius: 20,
        padding: 8
      }
})
