import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import {BusinessPageOptionsButton} from '../components/buttons'
import Spacer from '../components/spacer'

const BusinessViewPage = (props) => {

    return (
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Image 
                source = {(require('../sample-images/template-logo.jpg'))}
                style = {styles.image}
                 />
                <View style = {styles.containerOverImage}>
                    <Text style = {styles.overImageHeaderText}>{props.business.title}</Text>
                    <Text style = {styles.overImageSubheaderText}>{props.business.type} - {props.business.distance} miles</Text>
                </View>
            </View>


            <View style = {styles.mainContentContainer}>
                <View style = {styles.buttonsLine}>
                    <BusinessPageOptionsButton text = " Call " />
                    <BusinessPageOptionsButton text = " View Location " />
                </View>
                <View style = {styles.menuHeaderContainer}>
                    <Text style = {styles.menuHeaderText}> Menu </Text>
                </View>

                <View style = {styles.listOuterView}>
                    <FlatList
                    data = {props.business.menu}
                    ListHeaderComponent = {
                        <View style = {{flexDirection: "column",alignItems : "center", justifyContent : "flex-start"}}>
                        <Spacer height = {15} />
                        </View>
                        }
                    keyExtractor = {item => item.name}
                    renderItem = {({ item }) => <MenuItemDisplay menuItem = {item}/>}
                    />
                </View> 
            </View>

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
                    <Text style = {styles.menuListItemContainerLine2PriceText}>
                            {props.menuItem.price}
                    </Text>
                </View>
                <View style = {styles.menuListItemContainerLine2}>
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
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor : "lavender",
    },
    imageContainer : {
        flex: 1,
        flexDirection : "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomWidth: 1,
    },
    image : {
        flex : 1,
        aspectRatio: 2.5,
        resizeMode: "contain",
    },
    containerOverImage : {
        position: "absolute",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end", 
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        right: 8,
        bottom: 10,
        flex : 1,
    },
    overImageHeaderText : {
        fontSize: 25,
        fontFamily: "Helvetica Neue",
    },
    overImageSubheaderText : {
        fontSize: 20,
        fontFamily: "Helvetica Neue",
    },
    mainContentContainer : {
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingHorizontal: 8
    },
    buttonsLine : {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        padding: 10,
    },
    menuHeaderContainer : {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "flex-end",
        padding: 8,

    },
    menuHeaderText : {
        fontSize: 25,
        fontFamily: "Helvetica Neue",
        fontWeight: 'bold',
    },
    listOuterView: {
        flex: 6,
        flexDirection: "row",
        paddingHorizontal: 0,
        borderTopWidth: 1,

    },
    menuListItem : {
        padding:12,
        flex: 1,
    },
    menuListItemContainer : {
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 15,
        flex: 1,
        borderRadius : 15,
        backgroundColor : "#c7c5de",
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 1,
    },
    menuListItemContainerLine1 : {
        flexDirection: "row",
        justifyContent: "space-between",
        padding : 10
    },
    menuListItemContainerLine1NameText: {
        fontFamily: "Helvetica Neue",
        fontSize : 20,
    }, 
    menuListItemContainerLine2 :{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    menuListItemContainerLine2PriceContainer : {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        borderRightWidth : 3,
        width: 100, 
        padding: 7,
    },
    menuListItemContainerLine2PriceText : {
        fontFamily: "Helvetica Neue",
        fontSize : 17,
        fontWeight : "bold",
    },
    menuListItemContainerLine2DescriptionContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        flex: 1
    } 
})


export default BusinessViewPage;