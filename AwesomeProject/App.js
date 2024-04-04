import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack"
import Main from './componentes/formulario/main';
import Cadastro from './componentes/cadastro/cadastro';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#0D3068',
        display: 'flex',
        justifyContent: 'center',
        height: 60,
        alignItems: 'center',
      },
      headerShown: false,
    }} >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  </NavigationContainer>
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
