import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Footer() {
    const navigation = useNavigation()


    return (
        <View style={styles.Footer}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={{ marginLeft: 60, marginTop: 5, }} >
                <AntDesign name="home" size={22} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
          navigation.navigate("Profile")
            } 
            }>
                <MaterialCommunityIcons name="account-circle" size={24} style={{ marginLeft: 60, marginTop: 5, }} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <MaterialCommunityIcons name="cogs" size={24} style={{ marginLeft: 60, marginTop: 5, }} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <MaterialCommunityIcons name="cart" size={24} style={{ marginLeft: 60, marginTop: 5, }} color="black" />
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    Footer: {
        flex: 4,
        backgroundColor: '#ffe4c4',
        alignItems: 'center',
        flexDirection: 'row',
        maxHeight: 40,
    },
}); 
