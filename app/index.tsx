import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from "@/constants/Styles";

export default function Index() {
  function onButtonEdit(){
    console.log('Click');
    router.replace('/editar');
  }
  function onButtonList(){
    console.log('Click');
    router.replace('/lista_encuestas');
  }
  
  return (
    <View style={Estilos.Principal}>
    <Text>Edit app/index.tsx to edit this screen.</Text>
    <Link href='/editar'>
      <Pressable onPress={onButtonEdit}><Text>Editar Cuestionario</Text></Pressable>
    </Link>
    <Link href='/lista_encuestas'>
      <Pressable onPress={onButtonList}><Text>Lista encuestas</Text></Pressable>
    </Link>
    </View>
  );
}
