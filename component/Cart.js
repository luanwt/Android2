import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cart() {
  const navigation = useNavigation()

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('cart');
    console.log(jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;

};

const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const storedItemsString = await AsyncStorage.getItem('cart');
        const storedItems = storedItemsString ? JSON.parse(storedItemsString) : [];
        setItems(storedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  async function getCartItems() {
    try {
      const cartString = await AsyncStorage.getItem('cart');
      return JSON.parse(cartString) || []; // Handle empty cart case
    } catch (error) {
      console.error('Error retrieving cart items:', error);
      return [];
    }
  }
  async function orderDone(itemToRemove) {
    try {
      const currentCart = await getCartItems();
      const updatedCart = currentCart.filter((item) => item.id !== itemToRemove.id);
  
      const updatedCartString = JSON.stringify(updatedCart);
      await AsyncStorage.setItem('cart', updatedCartString);
      navigation.navigate('HomeScreen');
     
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }

  }

  async function removeFromCart(itemToRemove) {
    try {
      const currentCart = await getCartItems();
      const updatedCart = currentCart.filter((item) => item.id !== itemToRemove.id);
  
      const updatedCartString = JSON.stringify(updatedCart);
      await AsyncStorage.setItem('cart', updatedCartString);
     
      console.log('Item removed from cart successfully!');
      navigation2()
     
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }

  }
  function navigation2(){
    navigation.navigate('HomeScreen');
    navigation.navigate('Cart');
  }
  function alert (item) {
    console.log("Mua hang thanh cong!")
    orderDone(item)
  };
 
   const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return( 
    <>
    <View style={styles.Cart}>
      <View style={styles.Content}>
    <ScrollView  >
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View>
                <View style={{ flex: 30, borderWidth: 2,borderColor:"darkgreen", borderRadius: 10, marginHorizontal: 5 }}>
             <Image source={{ uri: item.url }} style={{ height: 150, width: '100%', resizeMode: 'center' }} />
              <Text>Ten san pham:{item.name}</Text>
              <Text>Tong tien:${item.price}</Text>
              <Text>So luong:{item.quantity}</Text>
              <View style={{ flexDirection: 'row',}}> 
              <TouchableOpacity style={{backgroundColor:"red", width:'20%',borderRadius:20}}  onPress={() => alert(item)}> 
                <Text>Order</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"yellow", width:'20%',borderRadius:20}}   onPress={() => removeFromCart(item)}> 
                <Text>Remove</Text>
              </TouchableOpacity>
              </View> 
              </View>

            </View>
          )}
        />
    
  

      {/* <View style={{ flex: 50 }}>
                          <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>Cart</Text>
                          {cartItems.length > 0 ? (
                              <FlatList
                                  data={cartItems}
                                  keyExtractor={(item, index) => index.toString()}
                                  renderItem={({ item, index }) => (
                                      <View>
                                          <Image source={{ uri: item.url }} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
                                          <Text>{item.name} - ${item.price} - Quantity: {item.quantity}</Text>
                                          <Text>Total: ${item.totalPrice}</Text>
                                          <TouchableOpacity onPress={() => removeItem(index)}>
                                              <Text style={{ fontSize: 16, color: 'red' }}>Remove</Text>
                                          </TouchableOpacity>
                                      </View>
                                  )}
                              />
                          ) : (
                              <Text>Your cart is empty.</Text>
                          )}
                      </View> */}

       
        
    </ScrollView>
    </View  > 
    
  </View>
          <Footer/>
  </>
  )
};
const styles = StyleSheet.create({
  Cart: {
      flex: 2,
      backgroundColor: 'lightblue',
  },
  Footer: {
   
    backgroundColor: 'blue',
    marginBottom:1,
  }
  ,Content:{
   
  }
}); 


