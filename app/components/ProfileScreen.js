import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BackgroundWrapper from './BackgroundWrapper';
import CustomButton from './CustomButton';
import Header from './Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileScreen({ navigation }) {
  const [matricula, setMatricula] = useState('13232145');
  const [name, setName] = useState('JORGE DA VP');
  const [phone, setPhone] = useState('44028922');
  const [email, setEmail] = useState('123456@gmail.com');

  return (
    <BackgroundWrapper>
      <Header title="MEU PERFIL" onBackPress={() => navigation.goBack()} />
      <View style={styles.container}>

        <View style={styles.infoContainer}>        
        <View style={styles.profileSection}>
          <View style={styles.profileImageWrapper}>
             <Image source={require('../../assets/profile.png')} style={styles.profileImage} /> {/* isso vai mudar */}
            <TouchableOpacity style={styles.cameraIcon}>
              <Icon name="photo-camera" size={24} color="#FED402" />
            </TouchableOpacity>
          </View>
        </View>
          {/* <Text style={styles.subtitle}>SUAS INFORMAÇÕES PESSOAIS</Text> */}
          <TextInput
            style={styles.input}
            placeholder="Sua Matricula"
            value={matricula}
            onChangeText={setMatricula}
          />
          <TextInput
            style={styles.input}
            placeholder="Seu Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Seu Telefone"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Seu E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <CustomButton title="Sair da conta" onPress={() => { /* Update profile logic */ }} />
        </View>
        <Text style={styles.supportText}>
          Ainda não conseguiu? <Text style={styles.supportLink} onPress={() => { /* Update profile logic */ }} >falar com suporte?</Text>
        </Text>
      </View>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    alignItems: 'center',
  },
  profileImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FED402',
    marginBottom: 10,
  },
  cameraIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#0D3068',
    borderRadius: 15,
    padding: 5,
  },
  infoContainer: {
    backgroundColor: '#0D3068',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  supportText: {
    marginTop: 20,
    color: 'gray',
  },
  supportLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
