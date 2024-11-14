import { Text, View, Pressable, TextInput } from "react-native";
import { useState } from 'react';
import { Estilos } from "@/constants/Styles";
import { readAsStringAsync } from 'expo-file-system';
import { File, Paths } from 'expo-file-system/next';

export default function Index() {

  const [agregarPregunta, setAgregarPregunta] = useState(false);
  const [preguntaVal, setPreguntaVal] = useState('');
  const [respuesta1Val, setRespuesta1Val] = useState('');
  const [respuesta2Val, setRespuesta2Val] = useState('');
  const [respuesta3Val, setRespuesta3Val] = useState('');
  const [respuesta4Val, setRespuesta4Val] = useState('');

  const toggleAgregarPregunta = async () => {
    setAgregarPregunta(current => (current === false ? true : false));
    // console.log(Paths.dirname(Paths.document));
  }
  
  function guardarArchivo(contenido){
    try{
      const file = new File(Paths.document, 'ejemplo.txt');
      file.create();
      file.write(contenido);
      console.log(file.text());
      const content = JSON.parse(file.text());
      console.log(typeof(content));
      console.log(content['pregunta'])
      // const content = await readAsStringAsync(file.uri);
      // console.log(content);
    }catch(error){
      console.log(error);
    }
  }
  
  const leerArchivo = async () => {
    try{
      const file = new File(Paths.document, 'ejemplo.txt');
      const contenido = await readAsStringAsync(file.uri);
      console.log(contenido);
      const content = JSON.parse(contenido);
      // console.log(typeof(content));
      // console.log(content);
      return content;
    }catch(error){
      console.log(error)
    }
  }

  const onButtonGuardar = async () => {
    const form = new FormData();
    form.append('pregunta', preguntaVal);
    form.append('respuesta1', respuesta1Val);
    form.append('respuesta2', respuesta2Val);
    form.append('respuesta3', respuesta3Val);
    form.append('respuesta4', respuesta4Val);
    const object = {};
    form.forEach(function(value, key){
      object[key] = value;
    });
    var json = JSON.stringify(object);
    console.log(json);
    guardarArchivo(json);
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
