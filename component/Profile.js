import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Footer from './Footer';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  // const [profileData, setProfileData] = useState({
  //   name: 'Luan',
  //   email: 'luancui281103@gmail.com',
  //   profilePicture: 'https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg',
  // });
 
const navigation = useNavigation()
const [user, setItems] = useState([]);
useEffect(() => {
  const fetchItems = async () => {
    try {
      const storedItemsString = await AsyncStorage.getItem('data');
      const storedItems = storedItemsString ? JSON.parse(storedItemsString) : [];
      setItems(storedItems);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  fetchItems();
}, []);

async function getuser() {
  try {
    const cartString = await AsyncStorage.getItem('data');
    return JSON.parse(cartString) || []; // Handle empty cart case
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    return [];
  }
}

async function removeUser(User) {
  try {
    const currentCart = await getuser();
    const updatedCart = currentCart.filter((item) => item.id !== User.id);
    const updatedCartString = JSON.stringify(updatedCart);
    await AsyncStorage.setItem('data', updatedCartString);
    console.log('Removed User successfully!');
    alert("Dang xuat thanh cong!")
    navigation.navigate('Login');
  } catch (error) {
    console.error('Error removing User:', error);
  }
}

  const handleSaveChanges = () => {
    // Save updated profile data here
  };
  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('data');
    console.log(jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;

  };

  return (
    <View style={styles.container}>
      <Header style={styles.header}/>
      <View style={styles.content}>
      <FlatList
          data={user}
          renderItem={({ item }) => (
            <View>
                <View style={{ flex: 30, borderWidth: 2,borderColor:"darkgreen", borderRadius: 10, marginHorizontal: 5 }}>
              <View style={{ flexDirection: 'col',}}>   
              <Text>Ho ten: {item.fullname}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Phone: {item.phone_number}</Text>
              <Text>Dia chi: {item.address}</Text>
              </View> 
              </View>
              <View style={{height:50}}>
                <TouchableOpacity onPress={()=>removeUser(item)} style={{backgroundColor:"red",height:"50%", width:'30%',borderRadius:10,alignItems: 'center',}}>
            <Text>Dang Xuat</Text>
          </TouchableOpacity>
          </View>
            </View>
          )}
        />
      {/* <View style={styles.body}>
        <Text style={styles.label}>Email:{profileData.email}</Text>
      </View> */}
      <View>
       
        
        <TouchableOpacity onPress={()=>getData()}>
          <Text>lay gia tri nguoi dung</Text>
        </TouchableOpacity>
      
      </View>
      </View>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:3,

    },
    header:{
        minHeight:20,
        flexDirection: 'col'  
    },
    content:{
      minHeight:600,
        flexDirection: 'col'  
    }
});

export default Profile;