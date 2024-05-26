// app/components/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';

export default function RegisterScreen({ navigation }) {
  const [matricula, setMatricula] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={require('../../assets/imagemfundo.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/iconeTap.png')} style={styles.icon} />
        <Text style={styles.header}>Cadastro</Text>
        <Text style={styles.headerMinus}>Informe Seus Dados Abaixo</Text>
        <TextInput
          style={styles.input}
          placeholder="Matrícula"
          value={matricula}
          onChangeText={setMatricula}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de Telefone"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CustomButton title="Registrar" onPress={() => {/* galere do banco*/}} />

        <Text style={styles.headerMinus} onPress={() => navigation.navigate('Login')}>Ja tem Login?</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
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
