import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { useFonts } from "expo-font";

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
    <Text>Edit app/index.tsx to edit this screen.</Text>
    <Link href='/crear'>
      <Pressable onPress={onButtonEdit}><Text>Crear Cuestionario</Text></Pressable>
    </Link>
    <Link href='/lista_encuestas'>
      <Pressable onPress={onButtonList}><Text>Lista encuestas</Text></Pressable>
    </Link>
      {/* <Pressable onPress={onButtonCrear}><Text>Crear Lista</Text></Pressable> */}
    </View>
  );
}
