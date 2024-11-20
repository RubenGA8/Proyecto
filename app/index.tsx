import { Text, View, Pressable, Button, ImageBackground } from 'react-native';
import { useFonts } from "expo-font";
import { Link, router } from 'expo-router';

import { Estilos } from "@/constants/Styles";
import { ContextEncuesta } from './context';

export default function Index() {
  function onButtonEdit(){
    console.log('Click');
    //router.replace('/editar');
    router.navigate('/editar')
  }
  function onButtonList(){
    console.log('Click');
    router.navigate('/lista_encuestas');
    //router.replace('/lista_encuestas');
  }

  function onButtonCrear(){
    router.navigate('/crear');
  }

  const [fontsLoaded] = useFonts({
    'EABold': require("../assets/fonts/EABold.ttf"),
    'EASemiBold': require("../assets/fonts/EASemiBold.ttf"),
    'EAMedium': require("../assets/fonts/EAMedium.ttf"),
    'EARegular': require("../assets/fonts/EARegular.ttf"),
  });
  
  return (
    <View style={Estilos.Principal}>
      <ImageBackground source={require("../assets/images/FondoPrincipal.png")} resizeMode="cover" style={Estilos.ImagenFondo}>
        <View style={Estilos.ContenedorFlex}>
          <View style={Estilos.ContenedorTitulos}>
            <Text style={Estilos.TextoTitulo}>In-Terroga</Text>
          </View>
        </View>

        <View style={Estilos.ContenedorFlex}>
          <View style={Estilos.Contenedor}>
            <Link href='/crear'>
              <Pressable onPress={onButtonEdit} style={Estilos.Boton}>
                <Text style={Estilos.TextoDestacable}>Crear encuesta </Text>
              </Pressable>
            </Link>

            <Link href='/lista_encuestas'>
              <Pressable onPress={onButtonList} style={Estilos.Boton}>
                <Text style={Estilos.TextoDestacable}>Lista encuestas </Text>
              </Pressable>
            </Link>
            
            {/* <Link href='/crear'>
              <Pressable onPress={onButtonCrear} style={Estilos.Boton}>
                <Text style={Estilos.TextoDestacable}>Pruebas</Text>
              </Pressable>
            </Link> */}
          </View>
        </View>
      {/* <Pressable onPress={onButtonCrear}><Text>Crear Lista</Text></Pressable> */}
      </ImageBackground>
    </View>
  );
}
