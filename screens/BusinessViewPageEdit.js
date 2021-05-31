import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import {BusinessPageOptionsButton} from '../components/buttons'
import Spacer from '../components/spacer'

const BusinessViewPageEdit = (props) => {
    return (
        <KeyboardAvoidingView 
            behavior = {Platform.OS === "ios" ? "padding" : "height"}
            style = {styles.container}>
            <TouchableOpacity style = {styles.editContainerOverImage} >
                    <BusinessPageOptionsButton text = {"Save"} />
            </TouchableOpacity>
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

                <View style = {styles.listOuterView}>
                    <FlatList
                    data = {props.business.menu}
                    keyExtractor = {item => item.name}
                    renderItem = {({ item }) => <MenuItemDisplay menuItem = {item}/>}
                    />
                </View> 
            </View>

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
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor : "white",
    },
    imageContainer : {
        borderTopWidth: 1,
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
    editContainerOverImage : {
        paddingTop : 10,
        alignSelf: "center",
        right: 8,
        bottom: 10,
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
        flex:5,
        flexDirection: "row",
        paddingHorizontal: 8,
        borderTopWidth: 1

    },
    menuListItem : {
        padding:10,
        flex: 1,
    },
    menuListItemContainer : {
        borderWidth:0.7,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 5,
        flex: 1
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