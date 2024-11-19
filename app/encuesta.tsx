import {Text, View, Pressable, Button, ImageBackground, ScrollView} from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from '@/constants/Styles';
import { useRoute } from "@react-navigation/native"
import { ContextEncuesta } from './context';
import { useState, useContext } from 'react';
import { RadioButton } from 'react-native-paper'

export default function Index() {  
  const {encuesta} = useContext(ContextEncuesta);
  const [preguntas, setPreguntas] = useState(encuesta['preguntas']);

  function click(){
    console.log("dentro de encuesta");
    console.log(preguntas);
    console.log("Contexto sin tragarsela sin pretexto");
    console.log(encuesta)
    console.log("Queremos extraer: " + encuesta["encuesta"])
  }

  return (
    <View style={Estilos.Principal}>
      <ImageBackground source={require("../assets/images/FondoEncuestas.png")} resizeMode="cover" style={Estilos.ImagenFondo}>
        <View style={Estilos.ContenedorTitulos}>
          <Text style={Estilos.TextoTitulo}>Encuesta:</Text>
          <Text style={Estilos.TextoTitulo}>{encuesta["encuesta"]}</Text>
        </View>

        <View style={Estilos.ContenedorScroll}>
          <ScrollView showsVerticalScrollIndicator={false}>
            { preguntas.map((pregunta)=>{
              console.log(pregunta.respuestas[3]);
              return(
                  <View style={Estilos.Contenedor}>
                    <View style={Estilos.Scroll}>
                      <View key={pregunta.pregunta_id}>
                        <Text style={Estilos.TextoDestacable} >{pregunta.pregunta}</Text>

                        <Text style={Estilos.TextoNormal} >R1. {pregunta.respuestas[0]['respuesta']}</Text>
                        <Text style={Estilos.TextoNormal} >R2. {pregunta.respuestas[1]['respuesta']}</Text>
                        <Text style={Estilos.TextoNormal} >R3. {pregunta.respuestas[2]['respuesta']}</Text>
                        <Text style={Estilos.TextoNormal} >R4. {pregunta.respuestas[3]['respuesta']}</Text>
                      </View>
                    </View>
                  </View>
              );
            })}
          </ScrollView>
        </View>
      <Pressable onPress={click}><Text>Hola</Text></Pressable>
      </ImageBackground>
    </View>
  );
}
