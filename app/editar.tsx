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
  const [file, setFile] = useState(new File(Paths.document,'encuesta.txt'));
  
  const toggleAgregarPregunta = async () => {
    setAgregarPregunta(current => (current === false ? true : false));
  }
  
  function guardarArchivo(){
    try{
      console.log(encuesta);
      file.create();
      file.write(JSON.stringify(encuesta));
      // console.log(file.text());
      // const content = JSON.parse(file.text());
      // console.log(typeof(content));
      // console.log(content['pregunta'])
      // const content = await readAsStringAsync(file.uri);
      // console.log(content);
    }catch(error){
      console.log(error);
      var preguntas = {'preguntas':[]};
    }
  }
  
  const leerArchivo = async () => {
    try{
      const contenido = await readAsStringAsync(file.uri);
      setEncuesta(JSON.parse(contenido));
      console.log(contenido);
      // const content = JSON.parse(contenido);
      // console.log(typeof(content));
      // console.log(content);
      //return content;
    }catch(error){
      console.log('Ocurrio un error al leer el archivo');
      console.log(error);
      var preguntas = {'preguntas':[]};
      setEncuesta(preguntas);
      guardarArchivo();
    }
  }
  
  const [encuesta, setEncuesta] = useState(leerArchivo);

  const onButtonGuardar = async () => {
    const form = new FormData();
    // form.append('pregunta', preguntaVal);
    form.append('respuesta1', respuesta1Val);
    form.append('respuesta2', respuesta2Val);
    form.append('respuesta3', respuesta3Val);
    form.append('respuesta4', respuesta4Val);
    const object = {};
    form.forEach(function(value, key){//convierte formulario a json
      object[key] = value;
    });
    // console.log(object);
    var json = JSON.stringify(object);
    var preguntas = {'preguntas':[
      {preguntaVal: object}
    ]};
    // console.log(preguntas['preguntas'][0]);
    setEncuesta(encuesta)
    guardarArchivo();
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
