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

                <View style={styles.khung}><Text>Tai khoan</Text></View>
                <TouchableOpacity><Text>_Tai khoan & mat khau</Text>
                </TouchableOpacity> 
                <TouchableOpacity><Text>_Dia chi</Text>
                </TouchableOpacity> 
                <TouchableOpacity><Text>_Tai khoan/ The ngan hang</Text></TouchableOpacity> 
                <View style={styles.khung}><Text>Cai dat</Text></View>
                <TouchableOpacity><Text>_Cai dat rieng tu</Text></TouchableOpacity> 
                <TouchableOpacity><Text>_Cai dat thong bao</Text></TouchableOpacity> 
                <TouchableOpacity><Text>_Cai dat ngon ngu</Text></TouchableOpacity> 
                <TouchableOpacity><Text>_Trung tam ho tro</Text></TouchableOpacity> 
                <View style={styles.khung}><Text>Ho tro</Text></View>
                <TouchableOpacity><Text>_Dieu khoan nguoi dung</Text></TouchableOpacity> 
                <TouchableOpacity><Text>_Gioi Thieu</Text></TouchableOpacity> 
         
                <TouchableOpacity><Text>_Yeu cau xoa tai khoan</Text></TouchableOpacity>
                

            </View>
        
            <Footer/>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    khung: {
        backgroundColor: "#CCCCCC"
    }
});