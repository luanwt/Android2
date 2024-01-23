import React, { useEffect, useState } from 'react';
//import React in our code.
import { StyleSheet, View, TouchableOpacity,ImageBackground, Text, Button, TextInput, Alert, FlatList, Image } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import Header from './Header';
import {SafeAreaView, ScrollView } from 'react-native-web';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login() {
    var bool=true
    var bool2=true
    const [data, setData] = useState("");

    const saveData = async (value) => {
        try {
          const currentDataString = await AsyncStorage.getItem("data") || '[]'; // Get existing data or empty array
          
          const currentData = JSON.parse(currentDataString); // Parse as an array
      
          currentData.push(value); // Add the new OJ to the array
      
          const updatedDataString = JSON.stringify(currentData); // Convert back to JSON string
          await AsyncStorage.setItem("data", updatedDataString); // Save updated data
        } catch (e) {
        }
      };
      const getData = async () => {
        const jsonValue = await AsyncStorage.getItem('data');
        console.log(jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    
      };
      async function checkData() {
      
          const cartString = await AsyncStorage.getItem('data');
       
          if(cartString=="[]"|| cartString==null|| cartString=="null"){
            bool2=true
            console.log(cartString)
            console.log("du lieu trong")
            console.log(bool2)
            
       
          }
          else{
            console.log("co du lieu")
            bool2=false
            console.log(bool2)
           
          }
        
      }

    const navigation = useNavigation()

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (text) => {
        setInputValue(text);
    };
    const [inputValue2, setInputValue2] = useState('');
    const handleInputChange2 = (text2) => {
        setInputValue2(text2);
    };

    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://10.17.1.167:8080/api/users')
            .then(res => res.json())
            .then(json => setUser(json))
    }, []);

    return (
     
        <ImageBackground source={require(`../assets/images/bg.jpg`)} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
            <View style={styles.container} >
                <Text style={styles.text}>Ten dang nhap</Text>
                <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginHorizontal: 5 }}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter username"
                    id="username"
                />

                <Text style={styles.text} >Mat khau</Text>
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
                        for (var i = 0; i < users.length; i++) {
                            if (inputValue ==users[i].email && inputValue2 == users[i].password){
                                bool=false
                            
                                if(bool2==true){
                                    console.log("da dang nhap thanh cong")
                                    saveData(users[i])
                                    bool2=false
                                    navigation.navigate("HomeScreen")
                                }
                                else{
                                    console.log("khong dang nhap duoc vi da co tai khoan")
                                    alert("Vui lòng đăng xuất khỏi tài khoản hiện tại để đăng nhập tài khoản khác")
                                }
                                // saveData(users[i]) 
                            }
                        }
                        if (bool==true) {
                               
                            Alert.alert("Sai tai khoan hoac mat khau")
                        }
                    }
                    }
                >
                    <Text>Login</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>         
                           <Text style={{alignItems: "center",  marginLeft: 110,}}>Chưa có tài khoản? </Text>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Register")}>
                    <Text>Đăng ký</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() =>getData()}>
                    <Text>Show </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>checkData()}>
                    <Text>Check </Text>
                </TouchableOpacity>
            </View>
            {/*        
            <FlatList
                          scrollEnabled={false}
                                data={filteredProducts}
                                numColumns={2}
                                columnWrapperStyle={styles.row}
                                renderItem={({item})=>
                                <View style={styles.item}>
                                    <TouchableOpacity onPress={()=>{navigation.navigate('Detail',  {
                                name: item.title,
                                url: item.image,
                                price1: item.price,
                                quantity: 1,
                                value: 1,
                            })}}>
                                    <Image source={{uri:item.image}} style= {{width:'100%', height:30,width:40}}/>
                                        <View style ={  {backgroundColor:'black'}}>
                                        <Text style={{color:'yellow', textAlign:'center', padding:7}}>{item.title}</Text>
                                        <Text style={{color:'yellow', textAlign:'center', padding:7}}>{item.price}</Text>
                                        </View>
                                        </TouchableOpacity>
                                </View>    
                            }/> */}
     <Footer/> 
        </View>
        </ImageBackground>
  
      
    );

};
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        backgroundimage: "../assets/img/icon.png",
        flex: 1,
    },
    button: {
        backgroundColor: "#ffa500",
        marginHorizontal: 130,
        alignItems: "center",
        marginLeft: 120,
        borderWidth: 2,
        borderRadius: 10,
        height: 30,
        color:"#7fff00"
    },
    button2: {    
        alignItems: "center",
        height: 30,

    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
      text:{
        color:`#a52a2a`,
        fontSize:18,
        
      }
});