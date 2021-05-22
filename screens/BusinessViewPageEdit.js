import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import {BusinessPageOptionsButton} from '../components/buttons'
import Spacer from '../components/spacer'

const BusinessViewPageEdit = (props) => {
    return (
        <KeyboardAvoidingView 
            behavior = {Platform.OS === "ios" ? "padding" : "height"}
            style = {styles.container}>
            <ImageBackground 
            source = {(require('../sample-images/template-logo.jpg'))}
            style = {styles.mainImage}
            >
                <View style = {styles.containerOverImage}>
                    <Text style = {styles.overImageHeaderText}>{props.business.title}</Text>
                    <Text style = {styles.overImageSubheaderText}>{props.business.type} - {props.business.distance} miles</Text>
                </View>
                <TouchableOpacity style = {styles.editContainerOverImage} >
                    <Text style = {styles.editOverImageText}> Save</Text>
                 </TouchableOpacity>
            </ImageBackground>
            <View style = {styles.buttonsLine}>
                <Text style = {{fontSize: 20,}}> Included Phone number: </Text>
                <View style = {{borderWidth: 0.7}}>
                <TextInput 
                        style = {styles.menuListItemContainerLine1}
                         /*onChangeText = {}*/
                         value = {props.business.phonenumber} 
                         placeholder = " Enter phonenumber here"
                />
                </View>
            </View>
            <View style = {styles.menuHeaderContainer}>
                <Text style = {styles.menuHeaderText}> Menu </Text>
            </View>

            <View styles = {styles.listOuterView}>
                <FlatList
                style = {styles.menuListItem}
                data = {props.business.menu}
                keyExtractor = {item => item.name}
                renderItem = {({ item }) => <MenuItemDisplay menuItem = {item}/>}
                />
            </View>
            <View 
            /*This (what is under) is used to take up the extra space at 
            the bottom from flex-end of the outer container. Look at:
            https://medium.com/@nickyang0501/keyboardavoidingview-not-working-properly-c413c0a200d4 */
            style = {{flex:1}} /> 
        </KeyboardAvoidingView>
    )
}

const MenuItemDisplay = (props) => {
    //I have no idea what to make the useState in this case yet
    //The bottom is actually copy-pasted from the login screen
    const [usernameText, onChangeUsernameText] = React.useState("");
    const [passwordText, onChangePasswordText] = React.useState("");
    return (
        <View style = {styles.menuListItemContainer}>
                    <TextInput
                         style = {styles.menuListItemContainerLine1}
                         onChangeText = {onChangePasswordText}
                         value = {props.menuItem.name} 
                         placeholder = " Enter item name here"
                    />
                <View style = {styles.menuListItemContainerLine2}>
                        <TextInput
                            style = {styles.menuListItemContainerLine2PriceContainer}
                            onChangeText = {onChangePasswordText}
                            value = {props.menuItem.price.toString()} 
                            placeholder = " Enter price here"
                        />

                        <TextInput
                            style = {styles.menuListItemContainerLine2DescriptionContainer}
                            onChangeText = {onChangePasswordText}
                            value = {props.menuItem.description} 
                            placeholder = " Enter Description Here"
                        />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        flex:1,
        justifyContent: "flex-end"
    },
    mainImage : {
        height: 250,
        width: "100%",
        flexDirection : "row-reverse",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 15,
        borderBottomWidth: 1,
    },
    editContainerOverImage : {
        flexDirection: "column",
        justifyContent: "space-around",
        alignSelf: "flex-start", 
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 2,
        padding: 7,
        left: -10,
        top: 20, 
        borderRadius: 15

    },
    editOverImageText : {
        fontSize: 25,
        fontFamily: "Helvetica Neue",
        color: "blue"
    },
    containerOverImage : {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end", 
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 0.7,
        height: 65,
        width: "60%",
        padding: 5,
        right: -8
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
        justifyContent: "space-evenly",
        borderTopWidth: 1,
        padding: 10,
    },
    menuHeaderContainer : {
        flexDirection: "row",
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        left: 10
    },
    menuHeaderText : {
        fontSize: 25,
        fontFamily: "Helvetica Neue",
        fontWeight: 'bold',
    },
    listOuterView: {
        flex:10
    },
    menuListItem : {
        padding:10,

    },
    menuListItemContainer : {
        borderWidth:0.7,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 5
    },
    menuListItemContainerLine1 : {
        flexDirection: "row",
        justifyContent: "flex-start",
        padding : 7
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
    },
    menuListItemContainerLine2DescriptionContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        padding: 5,
        flex: 1
    } 
})


export default BusinessViewPageEdit;