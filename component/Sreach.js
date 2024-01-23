import React, { useState } from 'react';
//import React in our code.
import { StyleSheet, View, TouchableOpacity, Text, Button, TextInput } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import Header from './Header';
import { SafeAreaView, ScrollView } from 'react-native-web';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
export default function Search() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header/>
            <Footer/>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    button: {
        backgroundColor: "red",
        marginHorizontal: 130,
        alignItems: "center",
        marginLeft: 120,
        borderWidth: 2,
        borderRadius: 10,
        height: 30,
    },
    khung: {
        backgroundColor: "#CCCCCC"
    }
});