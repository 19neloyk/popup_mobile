import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView, ScrollView, TextInput, SegmentedControlIOSBase } from 'react-native';
import {LoginButton, RegisterButton} from '../components/buttons'
import Spacer from '../components/spacer'


const BusinessRegisterPage = (props) => {
    //I have no idea what to make the useState in this case yet
    //The bottom is actually copy-pasted from the login screen
    const [usernameText, onChangeUsernameText] = React.useState("");
    const [passwordText, onChangePasswordText] = React.useState("");

    return (
        <KeyboardAvoidingView 
        behavior = {Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.container1}>
            <ScrollView style = {styles.scrollView}>
                <Spacer height = {10} />
                <Text style = {styles.pageHeader}>
                Register as a Business
                </Text>
                <Spacer height = {10} />
                <View style = {styles.eachFieldContainer}>
                    <Text style = {styles.eachFieldHeaderText}>
                    Email
                    </Text>
                    <Spacer height = {10} />
                    <TextInput
                         style = {styles.eachFieldInput}
                         onChangeText = {onChangePasswordText}
                         placeholder = " Enter item name here"
                    />
                </View>
                <View style = {styles.eachFieldContainer}>
                    <Text style = {styles.eachFieldHeaderText}>
                    Username
                    </Text>
                    <Spacer height = {10} />
                    <TextInput
                         style = {styles.eachFieldInput}
                         onChangeText = {onChangePasswordText}
                         placeholder = " Enter item name here"
                    />
                </View>
                <View style = {styles.eachFieldContainer}>
                    <Text style = {styles.eachFieldHeaderText}>
                    Phone Number
                    </Text>
                    <Spacer height = {10} />
                    <TextInput
                         style = {styles.eachFieldInput}
                         onChangeText = {onChangePasswordText}
                         placeholder = " Enter item name here"
                    />
                </View>
                <View style = {styles.eachFieldContainer}>
                    <Text style = {styles.eachFieldHeaderText}>
                    Title
                    </Text>
                    <Spacer height = {10} />
                    <TextInput
                         style = {styles.eachFieldInput}
                         onChangeText = {onChangePasswordText}
                         placeholder = " Enter item name here"
                    />
                </View>
                <View style = {styles.eachFieldContainer}>
                    <Text style = {styles.eachFieldHeaderText}>
                    Type
                    </Text>
                    <Spacer height = {10} />
                    <TextInput
                         style = {styles.eachFieldInput}
                         onChangeText = {onChangePasswordText}
                         placeholder = " Enter item name here"
                    />
                </View>
                <View style = {styles.eachFieldContainer}>
                    <Text style = {styles.eachFieldHeaderText}>
                    Description
                    </Text>
                    <Spacer height = {10} />
                    <TextInput
                         style = {styles.eachFieldInput}
                         onChangeText = {onChangePasswordText}
                         placeholder = " Enter item name here"
                    />
                </View>
                <View style = {styles.eachFieldContainer}>
                    <Text style = {styles.eachFieldHeaderText}>
                    Password
                    </Text>
                    <Spacer height = {10} />
                    <TextInput
                         style = {styles.eachFieldInput}
                         onChangeText = {onChangePasswordText}
                         placeholder = " Enter item name here"
                    />
                </View>
                <View style = {styles.eachFieldContainer}>
                    <Text style = {styles.eachFieldHeaderText}>
                    Confirm Password
                    </Text>
                    <Spacer height = {10} />
                    <TextInput
                         style = {styles.eachFieldInput}
                         onChangeText = {onChangePasswordText}
                         placeholder = " Enter item name here"
                    />
                </View>

                <Spacer height = {20} />
                <View style = {{width: "40%"}}>
                <RegisterButton />
                </View>
                <Spacer height = {20} />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({ 
    container : {
        flex : 1,
        flexDirection : "column",
        justifyContent : "flex-start",
        marginHorizontal: 5,
    },
    pageHeader : {
        fontSize : 30,
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
    },
    scrollView : {
        backgroundColor : "lavender",
        paddingHorizontal: 10
    },
    eachFieldContainer : {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical: 10
    },
    eachFieldHeaderText : {
        fontSize : 20,
        fontFamily: "Helvetica Neue",
    },
    eachFieldInput : {
        borderWidth: 1,
        padding: 7,
        width: "60%",
        backgroundColor: "#c7c5de",
    },
})

export default BusinessRegisterPage;