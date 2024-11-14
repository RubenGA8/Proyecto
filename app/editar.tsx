import { Text, View, Pressable, TextInput } from "react-native";
import { useState } from 'react';
import { Estilos } from "@/constants/Styles";

export default function Index() {

  const [agregarPregunta, setAgregarPregunta] = useState(false);
  const [preguntaVal, setPreguntaVal] = useState('');
  const [respuesta1Val, setRespuesta1Val] = useState('');
  const [respuesta2Val, setRespuesta2Val] = useState('');
  const [respuesta3Val, setRespuesta3Val] = useState('');
  const [respuesta4Val, setRespuesta4Val] = useState('');

  function toggleAgregarPregunta(){
    setAgregarPregunta(current => (current === false ? true : false));
  }

  function onButtonGuardar(){
    const form = new FormData();
    form.append('pregunta', preguntaVal);
    form.append('respuesta1', respuesta1Val);
    form.append('respuesta2', respuesta2Val);
    form.append('respuesta3', respuesta3Val);
    form.append('respuesta4', respuesta4Val);
  }

  return (
    <View style={Estilos.Principal}>
      <Text>Editar cuestionario.</Text>
      <TextInput placeholder='Ingresa el nombre del cuestionario'></TextInput>
      <Pressable onPress={toggleAgregarPregunta}><Text>Agragar pregunta +</Text></Pressable>
      {agregarPregunta? (
        <View>
          <TextInput placeholder='Pregunta' onChangeText={setPreguntaVal}></TextInput>
          <TextInput placeholder='Respuesta 1' onChangeText={setRespuesta1Val}></TextInput>
          <TextInput placeholder='Respuesta 2' onChangeText={setRespuesta2Val}></TextInput>
          <TextInput placeholder='Respuesta 3' onChangeText={setRespuesta3Val}></TextInput>
          <TextInput placeholder='Respuesta 4' onChangeText={setRespuesta4Val}></TextInput>
          <Pressable onPress={onButtonGuardar}><Text>Guardar pregunta</Text></Pressable>
        </View>
      ):undefined}
    </View>
  );
}
