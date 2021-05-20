import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {IconButton} from '../components/buttons'
import Spacer from '../components/spacer'


const BusinessNearby = (props) => { 

    return (
        <View style = {styles.eachContainer}>
            <Spacer height = {10} />
            <View style = {styles.eachImageContainer} >
                <Image 
                source = {(require('../sample-images/template-logo.jpg'))}
                style = {styles.eachImage}
                />
            </View>
            <Spacer height = {15} />

            <View style = {styles.eachContainerLine}>
                <View style = {{left: 22}}>
                    <IconButton icon = "   M   "/>
                </View>
                <View style = {{right: 22}}>
                    <Text style = {styles.eachContainerLine1Text}> {props.business.title}</Text>
                </View>
            </View>
            <Spacer height = {8} />
            <View style = {styles.eachContainerLine}>
                <View style = {{left: 22}}>
                    <IconButton icon = "   C   "/>
                </View>
                <View style = {{right: 22}}>
                    <Text style = {styles.eachContainerLine2Text}> {props.business.type} - {props.business.distance} miles</Text>
                </View>
            </View>
            <Spacer height = {15} />
        </View>
    )
}

const BusinessesNearbyList = (props) => {


    return (
        <View style = {styles.mainContainer}>
            <FlatList
            style = {styles.listContainer}
            data = {props.business}
            keyExtractor = {item => item.username}
            renderItem = {({ item }) => <BusinessNearby business = {item} />}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    mainContainer : {
        flexDirection: "column",
        backgroundColor: "#c7c5de",
        justifyContent : 'flex-start',
        flex:10
    },
    listContainer : {
        padding:10,
        flex:10,
    },
    eachContainer : {
        flexDirection : "column",
        backgroundColor: "lavender",
        borderRadius: 11,

        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,

        marginBottom : 20
    },
    eachImageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        shadowColor: '#470000',
        shadowOffset: {width: -1, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
    },
    eachImage : {
        height: 200,
        width: "90%",
        borderRadius: 15,
    },
    eachContainerLine: {
        flexDirection : "row",
        justifyContent: "space-between",
    },
    eachContainerLine1Text: {
        fontFamily: "Helvetica Neue",
        fontSize: 23,
    },
    eachContainerLine2Text: {
        fontFamily: "Helvetica Neue",
        fontSize: 18,
    },
})


export default BusinessesNearbyList;