import React, {Component} from 'react';
import {View, Text,StyleSheet,  TouchableOpacity} from 'react-native'

class Spacer extends Component {
    render () {
        return (
            <View style = {{height: this.props.height}}></View>
        )
    }
}

export default Spacer;