import React, { useState } from 'react';
//import React in our code.
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import Header from './Header';
import { SafeAreaView, ScrollView } from 'react-native-web';
import Footer from './Footer';
import Content from './Content';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    return (


        <View style={styles.container}>         
          <Header/>
                <View style={styles.side}>  
                 <Content/>
                </View>
               <Footer/>
               
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    side:{
        height:600  
    },
   
});