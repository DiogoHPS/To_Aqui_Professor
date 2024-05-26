// app/components/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import CustomButton from './CustomButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.logo}>Leitor QR-Code</Text>
      </View>
      <ImageBackground source={require('../../assets/imagemfundo.png')} style={styles.background}>
        <CustomButton title="Aqui jaz um leitor de QR Code" onPress={() => navigation.navigate('Login')} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0D3068',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    color: '#FED402',
    fontSize: 20,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

});
