import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from '@/constants/Styles';
import { useRoute } from "@react-navigation/native"
import { ContextEncuesta } from './context';

export default function Index() {  


  
  return (
    <View style={Estilos.Principal}>
    <Text>Encuesta: {router.params?.id}</Text>
    
    </View>
  );
}
