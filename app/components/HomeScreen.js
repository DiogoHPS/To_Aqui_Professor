import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import CustomButton from './CustomButton';
import BackgroundWrapper from './BackgroundWrapper';
import Header from './Header';

export default function HomeScreen({ navigation }) {
  return (
    <BackgroundWrapper>
      <Header title="Leitor De QR-Code"/>
      <View style={styles.container}>
    
          <CustomButton style={styles.teste} title="Aqui jaz um leitor de QR Code" onPress={() => navigation.navigate('Login')} />
        
      </View>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0D3068',
    padding: 20,
    alignItems: 'center',
  },
});
