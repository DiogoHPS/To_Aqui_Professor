import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import MeuComponente from './componentes/formulario/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./componentes/formulario/img/imagemfundo.png')}
        style={styles.imagem}
      />
      <View style={styles.componenteWrapper}>
        <MeuComponente/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1, // Coloca a imagem atrás do conteúdo
  },
  componenteWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
