import React, { useState } from 'react';
//import React in our code.
import { StyleSheet, View, TouchableOpacity, Text, Button, TextInput } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import Header from './Header';
import { SafeAreaView, ScrollView } from 'react-native-web';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
export default function Setting() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.container} >
            <Text>Setting</Text>
            <TouchableOpacity>
                <Text>Tai khoan & mat khau</Text>
                <Text>Dia chi</Text>
                <Text>Tai khoan/ The ngan hang</Text>
                <Text></Text>
                <Text>Cai dat thong bao</Text>
            </TouchableOpacity>
            </View>
        
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
    }
});