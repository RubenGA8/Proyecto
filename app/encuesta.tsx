import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from '@/constants/Styles';

export default function Index() {  
  return (
    <View style={Estilos.Principal}>
    <Text></Text>
    <Link href='/editar'>
      <Pressable onPress={onButtonEdit}><Text>Editar Cuestionario</Text></Pressable>
    </Link>
    </View>
  );
}
