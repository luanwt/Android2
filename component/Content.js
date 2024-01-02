import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function Content() {
    const navigation = useNavigation()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    const renderItem = ({ item }) => (
        <View style={{
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
                name: item.title,
                url: item.image,
                price: item.price,

                value: 1,
            })} >
                <View style={{ flexDirection: 'row' }} >
                    <Image source={{
                        uri: item.image

                    }}

                        style={{
                            margin: 5,
                            height: 70,
                            width: 70,
                            borderRadius: 15,

                        }}

                    />
                    <View style={{ flexDirection: 'col' }}>
                        <Text style={{
                            color: 'darkblue',
                            marginLeft: 50,
                        }} >
                            ${item.price}
                        </Text>
                        <TouchableOpacity onPress={() => { console.log("moi click nha") }}>
                            <AntDesign name="shoppingcart" size={24} color="red" style={{ marginLeft: 60, marginTop: 10, }} onPress={() => navigation.navigate("Cart", 
                            {
                                name: item.title,
                                url: item.image,
                                price1: item.price,
                                quantity: 1,
                                value: 1,
                            })} />

                        </TouchableOpacity>
                    </View>
                </View>

                <Text  >{item.title}</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <ScrollView>
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />

            </View>
        </ScrollView>

    );

}

const styles = StyleSheet.create({
    container: {
        maxHeight: 560,
        flex: 1,
    },
});



