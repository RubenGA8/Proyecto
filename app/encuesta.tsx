import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from '@/constants/Styles';
import { useRoute } from "@react-navigation/native"
import { ContextEncuesta } from './context';
import { useState, useContext } from 'react';

export default function Index() {  
  const {encuesta} = useContext(ContextEncuesta);
  const [preguntas, setPreguntas] = useState(encuesta['preguntas']);

  function click(){
    console.log("dentro de encuesta");
    console.log(preguntas);
  }

  function lista(){
    preguntas.map((pregunta)=>{
      return(
        <View key={pregunta.pregunta_id}>
          <Text>{pregunta.pregunta}</Text>
        </View>
      );
    })
  }

  return (
    <View style={Estilos.Principal}>
      { preguntas.map((pregunta)=>{
        console.log(pregunta.respuestas[3]);
        return(
          <View key={pregunta.pregunta_id}>
            <Text>{pregunta.pregunta}</Text>
            <Text>R1. {pregunta.respuestas[0]['respuesta']}</Text>
            <Text>R2. {pregunta.respuestas[1]['respuesta']}</Text>
            <Text>R3. {pregunta.respuestas[2]['respuesta']}</Text>
            <Text>R4. {pregunta.respuestas[3]['respuesta']}</Text>
          </View>
        );
      })}
      <Pressable onPress={click}><Text>Hola</Text></Pressable>
    </View>
  );
}
