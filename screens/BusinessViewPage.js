import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableWithoutFeedback } from 'react-native';
import {BusinessPageOptionsButton} from '../components/buttons'
import Spacer from '../components/spacer'

const BusinessViewPage = (props) => {

    return (
        <View style = {styles.container}>
            <ImageBackground 
            source = {(require('../sample-images/template-logo.jpg'))}
            style = {styles.mainImage}
            >
                <View style = {styles.containerOverImage}>
                    <Text style = {styles.overImageHeaderText}>{props.business.title}</Text>
                    <Text style = {styles.overImageSubheaderText}>{props.business.type} - {props.business.distance} miles</Text>
                </View>
            </ImageBackground>
            <View style = {styles.buttonLine}>
                <BusinessPageOptionsButton text = "Call" />
                <BusinessPageOptionsButton text = "View Location" />
            </View>
            <View style = {styles.menuHeaderContainer}>
                <Text style = {styles.menuHeaderText}> Menu </Text>
            </View>

            <FlatList
            style = {styles.menuListItem}
            data = {props.business.menu}
            keyExtractor = {item => item.username}
            renderItem = {({ item }) => <MenuItemDisplay menuItem = {item}/>}
            />

        </View>
    )
}

const MenuItemDisplay = (props) => {

    return (
        <View style = {styles.menuListItemContainer}>
                <View style = {styles.menuListItemContainerLine1}>
                    <Text style = {styles.menuListItemContainerLine1NameText}>
                        {props.menuItem.name}
                    </Text>
                </View>
                <View style = {styles.menuListItemContainerLine2}>
                    <View style = {styles.menuListItemContainerLine2PriceContainer}>
                        <Text style = {styles.menuListItemContainerLine2PriceText}>
                            {props.menuItem.price}
                        </Text>
                    </View>
                    <View style = {styles.menuListItemContainerLine2DescriptionContainer}>
                        <Text style = {styles.menuListItemContainerLine2DescriptionContainer}>
                            {props.menuItem.description}
                        </Text>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
    },
    mainImage : {
        height: 250,
        width: "100%",
        flexDirection : "column",
        justifyContent: "flex-end",
        alignContent: "flex-end"
    },
    containerOverImage : {
        flexDirection: "column",
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 0.7,

    },
    overImageHeaderText : {
        fontSize: 25,
        fontFamily: "Helvetica Neue",
    },
    overImageSubheaderText : {
        fontSize: 20,
        fontFamily: "Helvetica Neue",
    },
    buttonsLine : {
        flexDirection: "row",
        justifyContent: "stretch",
    },
    menuHeaderContainer : {
        flexDirection: "row",
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
    },
    menuHeaderText : {
        fontSize: 25,
        fontFamily: "Helvetica Neue",
        fontWeight: 'bold',
    },
    menuListItem : {
        padding:10,
    },
    menuListItemContainer : {
        borderWidth:0.7,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    menuListItemContainerLine1 : {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    menuListItemContainerLine1NameText: {
        fontFamily: "Helvetica Neue",
        fontSize : 20,
    }, 
    menuListItemContainerLine2 :{
        flexDirection: "row",
        justifyContent: "space-around",
    },
    menuListItemContainerLine2PriceContainer : {
        flexDirection: "column",
        justifyContent: "center",
        borderRightWidth : 1,
    },
    menuListItemContainerLine2PriceText : {
        fontFamily: "Helvetica Neue",
        fontSize : 17,
    },
    menuListItemContainerLine2DescriptionContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        flexWrap: "wrap",
    } 
})


export default BusinessViewPage;