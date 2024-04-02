import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Cadastro from '../cadastro/cadastro';
import { useNavigation, NavigationContainer } from '@react-navigation/native';



const Main = () => {
    const navigation = useNavigation(); // Obtenha a função de navegação

  const handleRegisterPress = () => {
    navigation.navigate(Cadastro) // Navegue para a tela 'Cadastro' quando o texto for clicado
  };

  return (
    <NavigationContainer>
    <View id="body" style={styles.body}>
        <section id="section" style={styles.section}>
            <div id="textologin" style={styles.textologin}>
                <Text id="h1" style={styles.h1}>
                    BEM-VINDO
                </Text>
                <Text id="h2" style={styles.h2}>
                    Bem vindo de volta!
                </Text>
            </div>

            <div id="login" style={styles.login}>
                <TextInput id="input" style={styles.input}
                    placeholder='Sua Matricula'
                />
                <TextInput id="input" secureTextEntry={true} style={styles.input}
                    placeholder='Sua Senha'
                />
            </div>

        </section>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
        <div id='registre-se'>
            <Text >
                Não tem uma conta?
            </Text>

            <TouchableOpacity onPress={handleRegisterPress}>
              <Text  >
                  Registre-se
              </Text>
            </TouchableOpacity>
           
            

        </div>    
    </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    body:{
        height: "838px",
        width: "429px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
    },
    section:{
        display: "flex",
        flexDirection: 'column',
        backgroundColor: '#0D3068',
        height: "40%",
        borderRadius: "10px",
        marginBottom: "35px"
    },
    textologin: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "35px"
    },
    h1: {
        fontSize: "24px",
        color: "#FEC549",
        fontFamily: "Magra",
        fontWeight:"bold"
    },

    h2: {
        fontSize:"18px",
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    login: {
      display: "flex",
      flexDirection: 'column', // Alterado para column
      alignItems: 'center',
    },
    input: {
        width: "274.17px",
        height:" 52.44px",
        top: "445.34px",
        left: "80.88px",
        gap: "0px",
        borderRadius: "10px",
        opacity: "0px",
        backgroundColor: "#FFFFFF",
        margin: "15px",
        textAlign: "center",
        color: "#0D30687A",
        fontSize: "15pt",
        fontWeight: "bold",
        fontFamily: "inter, Magra"
      },
    
      botao: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FED402",
        borderRadius: 10,
        height: 40,
        width: "30%",
        marginTop: 20, // Adicionado para espaçamento do botão
    },
    textoBotao: {
        fontWeight: "bold",
        color: "#0D3068", // Cor do texto do botão
    },
})

export default Main;