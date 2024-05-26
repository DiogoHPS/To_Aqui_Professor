import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';
import CustomButton from './CustomButton';
import BackgroundWrapper from './BackgroundWrapper';

export default function RegisterScreen({ navigation }) {
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
            <Image source={require('../../assets/iconeTap.png')} style={styles.icon} />
            <Text style={styles.header}>Login</Text>
            <Text style={styles.headerMinus}>Informe Seus Dados Abaixo</Text>
            <TextInput
            style={styles.input}
            placeholder="Matrícula"
            value={matricula}
            onChangeText={setMatricula}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
            <CustomButton title="Login" onPress={() => {/* galere do banco*/}} />

            <Text style={styles.headerMinus} onPress={() => navigation.navigate('Register')}>Quer se registrar?</Text>
            <Text style={styles.headerMinus} onPress={() => navigation.navigate('LostPass')}>Esqueci a senha</Text>
            <Text onPress={() => navigation.navigate('Home')}>home</Text>
        </View>
        </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D3068',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FEC549',
    fontWeight: "bold",
  },

  headerMinus:{
    fontSize: 20,
    marginBottom: 20,
    color: '#FFFFFF'
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FEC549',
    backgroundColor: '#FFFFFF',
    color: '#0D3068',
    borderRadius: 5,
  },
icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: '100%',
    backgroundColor: '#3B5998',
  },

});
