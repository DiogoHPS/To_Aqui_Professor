import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';



const Cadastro = () => {
  return (
    <>
        <Image
            source={require('../formulario/img/imagemfundo.png')}
            style={styles.backgroundImage}
        />
    <View id="body" style={styles.container}>
        <section id="section" style={styles.section}>
            <div id="textologin" style={styles.textologin}>
                <Text id="h1" style={styles.h1}>
                    Registrar Sua Conta
                </Text>
                <Text id="h2" style={styles.h2}>
                    informe seus dados cadastrais!
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
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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

export default Cadastro;