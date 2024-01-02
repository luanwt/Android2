import React, { useState } from 'react';
//import React in our code.
import { StyleSheet, View, TouchableOpacity, Text, Button, TextInput, Alert } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import Header from './Header';
import { SafeAreaView, ScrollView } from 'react-native-web';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const addUsers = async (item) => {
    try {
      const existingUsers = await AsyncStorage.getItem('users');
      let newUsers = [];
      if (existingUsers) {
        newUsers = JSON.parse(existingUsers);
      }
  
      newUsers.push(item); 
  
      await AsyncStorage.setItem('users', JSON.stringify(newUsers));
  
      console.log('Item added to users!');
    } catch (error) {
      console.error('Failed to add item to users:', error);
    }
  };
//   addUsers({id:1,name:"Luanwt",passwords:"162426"})

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('users');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
//   _retrieveData()
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('users')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('users')
    //   console.log(jsonValue)
      return jsonValue 
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
  }
const savelogin = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
      console.log('Login saved successfully!');
    } catch (error) {
      console.log('Failed to save Login:', error);
    }
  };
export default function Login() {
    const navigation = useNavigation()

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (text) => {
        setInputValue(text);
    };
    const [inputValue2, setInputValue2] = useState('');
    const handleInputChange2 = (text2) => {
        setInputValue2(text2);
    };
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.container} >
                <Text>Ten dang nhap</Text>
                <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginHorizontal: 5}}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter username" 
                    id="username"
              
                />
                <Text>Mat khau</Text>
                <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginHorizontal: 5 }} 
                    value={inputValue2}
                    secureTextEntry={true}
                    onChangeText={handleInputChange2}
                    placeholder="Enter password" 
                    id="password"
                
                />
                <TouchableOpacity style={styles.button} 
                onPress={() => {
                    var a=getMyObject()
                    if(inputValue=="Luanwt" && inputValue2=="162426")
                    {
                        savelogin(inputValue)
                        navigation.navigate("HomeScreen")
                    }
                    else{
                        Alert.alert("Sai tai khoan hoac mat khau")
                    }
                } 
                }
                >
                    <Text>Login</Text>
                </TouchableOpacity>
                
            </View>
            <Footer />
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