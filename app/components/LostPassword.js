import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BackgroundWrapper from './BackgroundWrapper';
import CustomButton from './CustomButton';

export default function LostPasword({ navigation }) {
  const [EmailorNumber, setEmailorNumber] = useState('');
  return (
    <BackgroundWrapper>
        
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image source={require('../../assets/iconeTap.png')} style={styles.icon} />        
                <Text style={styles.header}>Recupere sua senha abaixo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email ou Numero"
                    value={EmailorNumber}
                    onChangeText={setEmailorNumber}
                />
                    <CustomButton title="Enviar" onPress={() => { /* Update profile logic */ }} />
            </View>
                <Text style={styles.supportText}>
                Ainda não conseguiu atualizar? <Text style={styles.supportLink} onPress={() => { /* Update profile logic */ }}>falar com suporte?</Text>
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
  infoContainer: {
    backgroundColor: '#0D3068',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
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
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: '100%',
    backgroundColor: '#3B5998',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FEC549',
    fontWeight: "bold",
  },

});
