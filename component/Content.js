import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';


// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

export default function Content() {
   
    // const [data, setData] = useState();

    // // Lưu trữ dữ liệu
    // const saveData = async () => {
    //   try {
    //     const value = 1;
    //     await AsyncStorage.setItem("data", value);
    //     setData("Đã lưu dữ liệu thành công");
    //   } catch (error) {
    //     setData("Lỗi khi lưu dữ liệu");
    //   }
    // };

    // // Truy xuất dữ liệu
    // const getData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem("data");
    //     const data = JSON.parse(value);
    //     setData(data);
    //   } catch (error) {
    //     setData("Không tìm thấy dữ liệu");
    //   }
    // };

    const navigation = useNavigation()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://192.168.1.24:8080/api/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    const renderItem = ({ item }) =>
    (
        <SafeAreaView style={{
            flex: 1,
            marginLeft: 2,
            marginRight: 2,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'lightblue'
        }}
        >
            <TouchableOpacity onPress={() => navigation.navigate("Detail", {
                id: item.id,
                name: item.name,
                url: item.thumbnail,
                price: item.price,
                value: 1,
            })} >

                <View style={{ flexDirection: 'row' }} >
                    <Image source={{
                        uri: item.thumbnail,
                    }}
                        style={{
                            margin: 5,
                            height: 70,
                            width: 70,
                            borderRadius: 15,

                        }}
                    />
                    {/* <TouchableOpacity title="Lưu dữ liệu" onPress={saveData} >
        <Text>s</Text>
     </TouchableOpacity>
      <Text>{data}</Text>
      <TouchableOpacity title="Truy xuất dữ liệu" onPress={getData} >
        <Text>dsa</Text>
      </TouchableOpacity> */}
      <Text>id:{item.id}</Text>
                    <View style={{ flexDirection: 'col' }}>
                        <Text style={{
                            color: 'darkblue',
                            marginLeft: 10,
                        }} >
                            ${item.price}
                        </Text>
                        <TouchableOpacity onPress={() => { console.log("moi click nha") }}>
                            <AntDesign name="shoppingcart" size={24} color="red" style={{ marginLeft: 40, marginTop: 10, }} onPress={()=>onclick(item)} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text>name: {item.name}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );


    function onclick(item) {
        const newItem = {id: item.id, name: item.name,url: item.thumbnail ,quantity:1, price: item.price };
    
        save(newItem)
      }
      
      const save = async (value) => {
     
          const currentDataString = await AsyncStorage.getItem("cart") || '[]'; // Get existing data or empty array
          console.log(currentDataString)
          const currentData = JSON.parse(currentDataString); // Parse as an array
            console.log(value)
          currentData.push(value); // Add the new OJ to the array
          const updatedDataString = JSON.stringify(currentData); // Convert back to JSON string
          await AsyncStorage.setItem("cart", updatedDataString); // Save updated data
      
          console.log('OJ added successfully!');
          navigation.navigate('Cart')
      
      };


    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});



