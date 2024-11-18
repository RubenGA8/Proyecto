import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from "@/constants/Styles";

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
  
  return (
    <View style={Estilos.Principal}>
    <Text>Edit app/index.tsx to edit this screen.</Text>
    <Link href='/crear'>
      <Pressable onPress={onButtonEdit}><Text>Crear Cuestionario</Text></Pressable>
    </Link>
    <Link href='/lista_encuestas'>
      <Pressable onPress={onButtonList}><Text>Lista encuestas</Text></Pressable>
    </Link>
      <Pressable onPress={onButtonCrear}><Text>Crear Lista</Text></Pressable>
    </View>
  );
}
