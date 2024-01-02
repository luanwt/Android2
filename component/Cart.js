import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';

export default function Cart({ route }) {
  if (!route || !route.name) {
    // Xử lý khi `router` không tồn tại hoặc không có thuộc tính 'name'
    return null; // hoặc có thể trả về giá trị mặc định khác
}
  //   const { name, url, price, specification } = route.params;
  const navigation = useNavigation()
  const { name, url, price1, quantity } = route.params;
   function alert () {
    console.log("Mua hang thanh cong!")
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return( 
    <>
  <ScrollView>
    <View
      style={{
        flex: 30,
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 10,
        borderColor:"red",
      }}>
      <Image
        source={{ uri: url }}
        style={{ height: 200, width: "100%", resizeMode: "center" }}
      />
      <Text style={{marginLeft:20}}>Name: {name}</Text>
      <Text style={{marginLeft:20}}>Quality: {quantity}</Text>
      <Text style={{marginLeft:20}}>Price: ${price1}</Text>
    </View>
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ScreenHome');
        }}
        style={{
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 250,
          borderWidth: 2,
          borderRadius: 10,
          height: 40,
          marginHorizontal: 50
        }}>
          <TouchableOpacity onPress={alert}>
        <Text style={{
          color: 'red',
        }}
        >Order
        </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  </ScrollView>
  <Footer/>
  </>
  )
};

