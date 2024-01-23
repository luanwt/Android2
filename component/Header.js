import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Header() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    const [sreachItem, setsreachItem] = useState("");
    const getApi = ()=>{
        return fetch('hhttp://10.17.1.167:8080/api/products')
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
       getApi();  
    },[]);
    const filteredData = products.filter((item) =>
    item.title.toLowerCase().includes(sreachItem.toLowerCase())
  );



    return (
        <View style={styles.background}>
            <SafeAreaView style={styles.Headers}>
                <StatusBar />
                <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                <Image style={styles.logo} source={require('../assets/img/1.png')} className=" h-9 w-9 rounded-full" size="5" />
                </TouchableOpacity>
                <SafeAreaView style={styles.Headers}>
                    <View style={styles.find2}>
                        <TextInput placeholder='Search' style={styles.find1}  value={sreachItem}
                             onChangeText={(text) => setsreachItem(text)}>
                        </TextInput>    
                        <TouchableOpacity  onPress={() => navigation.navigate("Detail", {
            })} >
                            <AntDesign name="search1" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="bells" size={30} color="black" />
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
               <View style={{flexDirection:"row"}}>
         

            <View style={styles.searchBar}>
                {/* <FlatList
                            scrollEnabled={false}
                                    data={filteredProducts}
                                    numColumns={2}
                                    columnWrapperStyle={styles.row}
                                    renderItem={({item})=>
                                    <View style={styles.item}>
                                        <TouchableOpacity onPress={()=>{navigation.navigate('Detail',  {
                                    name: item.name,
                                    url: item.thumbnail,
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

{/* 
                                  <FlatList
        data={filteredData}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      /> */}
        </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Headers: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 0,

        alignItems: "center",
        maxHeight:500
    },
    searchBar: {
        // height: 300,
        // width: 200,
        // backgroundColor:"red"
    },
    background: {
        backgroundColor: "#7fff00",
        paddingTop: 0,
        flex: 1,
        maxHeight:80
    },
    logo: {
        width: 50,
        height: 50,
    },
    find2: {
        flex: 1,
        backgroundColor: "lightgray",
        backgroundColor: "lightgray",
        flexDirection: "row",
    },
    find1: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: "lightgray",
        width: 270,
        height: 30,
        borderRadius: 10,
    }
});