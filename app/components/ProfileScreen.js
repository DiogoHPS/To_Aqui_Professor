// app/components/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Perfil</Text>
      </View>
      <ImageBackground source={require('../../assets/imagemfundo.png')} style={styles.background}>
        {/* Your content here */}
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
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
