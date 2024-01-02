import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default function Header() {
    return (
        <View style={styles.background}>
            <View style={styles.Headers}>
                <StatusBar />
                <TouchableOpacity>
                <Image style={styles.logo} source={require('../assets/img/1.png')} className=" h-9 w-9 rounded-full" size="5" />
                </TouchableOpacity>
                <SafeAreaView style={styles.Headers}>
                    <View style={styles.find2}>
                        <TextInput placeholder='Search' style={styles.find1} >
                        </TextInput>
                        <TouchableOpacity>
                            <AntDesign name="search1" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="bells" size={30} color="black" />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
            <TouchableOpacity className="1" >
                <Ionicons name="location" size={24} color="black" />
                <Text>120/7 Tang Nhon Phu Q,Tp.HCM</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    Headers: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 0,
        justifyContent: "space-between",
        alignItems: "center",
        maxHeight:50
    },
    background: {
        backgroundColor: "lightgreen",
        paddingTop: 0,
        flex: 1,
        maxHeight:100,
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