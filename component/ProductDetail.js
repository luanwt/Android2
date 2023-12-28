import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';

export default function Detail({ route }) {
  const navigation = useNavigation();
  const { name, url, price } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return (
    <>
    <ScrollView>
      <View style={{ flex: 30, borderWidth: 2, borderRadius: 10, marginHorizontal: 10 }}>
        <Image source={{ uri: url }} style={{ height: 200, width: '100%', resizeMode: 'center' }} />
        <Text style={{marginLeft:20}}>Name: {name}</Text>
        <Text style={{marginLeft:20}}>Price: ${price*quantity}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:20 }}>
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
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            price1=price*quantity
            navigation.navigate('Cart', { name, url, price1, quantity });
          }}
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
      </View>
    </ScrollView>
    <Footer/>
    </>
  );
}

