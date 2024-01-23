import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
  const handleRegister = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate("HomeScreen")

  };

  return (
    <ImageBackground source={require(`../assets/images/bg.jpg`)} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={{fontSize:24,color:"red"}}>Register</Text>
        <Text style={{fontSize:18,color:"yellow"}}>Username:</Text>
        <TextInput

          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={{fontSize:18,color:"yellow"}}>Email:</Text>
        <TextInput

          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={{fontSize:18,color:"yellow"}}>Username:</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Register" onPress={handleRegister} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Register;