import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';
import LocalStore from 'localstore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
// import CartContext from './CartContext';
global.mycart = ["dsadas"];

export default function Detail({ route }) {
  const navigation = useNavigation();
  const { id, name, url, price } = route.params;
  const [quantity, setQuantity] = useState(1);

  const [cartItems, setCartItems] = useState([
    { id: id, name: name,url:url ,quantity: quantity, price:price*quantity },
  ]);
  function onclick() {
    const newItem = {id: id, name: name,url:url ,quantity: quantity, price:price*quantity };
    console.log(newItem)
    save(newItem)
  }
  
  const save = async (value) => {
    try {
      const currentDataString = await AsyncStorage.getItem("cart") || '[]'; // Get existing data or empty array
      console.log(currentDataString)
      
      const currentData = JSON.parse(currentDataString); // Parse as an array
  
      currentData.push(value); // Add the new OJ to the array
  
      const updatedDataString = JSON.stringify(currentData); // Convert back to JSON string
      await AsyncStorage.setItem("cart", updatedDataString); // Save updated data
  
      console.log('OJ added successfully!');
      navigation.navigate('Cart')
    } catch (e) {
    }
  };

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('cart');
    console.log(jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;

  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  // const addToCart = (product) => {
  //   global.mycart=product
  //   if (cartItems.filter((item) => item._id === product._id).length)

  //     setCartItems(
  //       cartItems.map((item) =>
  //         item._id === product._id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  //   console.log(cartItems)


  // }

  return (
    <>
    <View styles={styles.container}>
       <Header/>
      <ScrollView>  
     
        <View style={{ flex: 30, borderWidth: 2, borderRadius: 10, marginHorizontal: 10 }}>
          <Image source={{ uri: url }} style={{ height: 200, width: '100%', resizeMode: 'center' }} />
        </View>
        {/* <Text style={{ marginLeft: 20 }}>Name: {id}</Text> */}
        <Text style={{ marginLeft: 20 }}>Name: {name}</Text>
        <Text style={{ marginLeft: 20 }}>price:${price}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={{ color: 'blue' }}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginHorizontal: 5 }}
            value={quantity.toString()}
            keyboardType="numeric"
            onChangeText={(newQuantity) => setQuantity(parseInt(newQuantity))}
          />
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={{ color: 'blue' }}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginLeft: 20 }}>Total: ${price * quantity}</Text>
        <View>
          <TouchableOpacity
          //   onPress={() => {
          //     price1 = price * quantity
          //     navigation.navigate('Cart', { name, url, price1, quantity })
          //   }
          // }
          onPress={() => onclick()}
            style={{
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 250,
              borderWidth: 2,
              borderRadius: 10,
              height: 40,
              marginHorizontal: 50
            }}
          >
            <Text style={{ color: 'yellow' }}>Add to cart</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => save(route.params)}>
            <Text>add cart</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => getData()}>
            <Text>get cart</Text>

          </TouchableOpacity> */}

        </View>
      </ScrollView>
      <Footer />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 3,
  },
});



