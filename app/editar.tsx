import { Text, View, Pressable, TextInput } from "react-native";
import { useState } from 'react';
import { Estilos } from "@/constants/Styles";
import { readAsStringAsync } from 'expo-file-system';
import { File, Paths } from 'expo-file-system/next';
import { endpoints } from "@/constants/endpoints";

export default function Index() {

  const [agregarPregunta, setAgregarPregunta] = useState(false);
  const [encuestaCreada, setEncuestaCreada] = useState(false);
  const [encuestaVal, setEncuestaVal] = useState('');
  const [encuestaId, setEncuestaId] = useState(0);
  const [preguntaVal, setPreguntaVal] = useState('');
  const [respuesta1Val, setRespuesta1Val] = useState('');
  const [respuesta2Val, setRespuesta2Val] = useState('');
  const [respuesta3Val, setRespuesta3Val] = useState('');
  const [respuesta4Val, setRespuesta4Val] = useState('');
  const [file] = useState(new File(Paths.document,'encuesta.txt'));
  
  const toggleAgregarPregunta = async () => {
    setAgregarPregunta(current => (current === false ? true : false));
  }
  const toggleEncuesta = async () => {
    const form = new FormData();
    form.append('encuesta', encuestaVal);
    console.log(form);
    fetch(endpoints.GUARDARENCUESTA, {
      method: 'POST',
      body: form,
    }).then(
      response => response.json()
    ).then(
      data =>{
        console.log(data);
        setEncuestaId(data['encuestaId'])
      }
    )

    setEncuestaCreada(current => (current === false ? true : false));
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
    }
  }
  
  const leerArchivo = async () => {
    try{
      const contenido = await readAsStringAsync(file.uri);
      setEncuesta(contenido);
      console.log(contenido);
      // const content = JSON.parse(contenido);
      // console.log(typeof(content));
      // console.log(content);
      //return content;
    }catch(error){
      console.log('Ocurrio un error al leer el archivo');
      console.log(error);
    }
  }
  
  // const [encuesta, setEncuesta] = useState(leerArchivo);
  const [encuesta, setEncuesta] = useState({});

  const onButtonGuardar = async () => {
    // setEncuesta("Hola");
    const form = new FormData();
    form.append('id', encuestaId)
    form.append('pregunta', preguntaVal);
    form.append('respuesta1', respuesta1Val);
    form.append('respuesta2', respuesta2Val);
    form.append('respuesta3', respuesta3Val);
    form.append('respuesta4', respuesta4Val);
    console.log(form);

    fetch(endpoints.GUARDARPREGUNTA, {
      method: 'POST',
      body: form,
    }).then(
      response => response.json()
    ).then(
      data =>{
        console.log(data);
        setEncuestaId(data['encuestaId'])
      }
    )


    // const object = {};
    // form.forEach(function(value, key){//convierte formulario a json
    //   object[key] = value;
    // });
    // console.log(object);
    // console.log("Objeto",object);
    
    // var pregunta = {};
    // var respuesta1 = {};
    // var respuesta2 = {};
    // var respuesta3 = {};
    // var respuesta4 = {};
    // respuesta1[respuesta1Val] = 0;
    // respuesta2[respuesta2Val] = 0;
    // respuesta3[respuesta3Val] = 0;
    // respuesta4[respuesta4Val] = 0;

    // var json = encuesta;
    // console.log('Valor pregunta:',preguntaVal);
    // pregunta[preguntaVal] = 
    // console.log('Pregunta: ',pregunta);
    // json['preguntas'][preguntaVal] = [
    //   respuesta1,
    //   respuesta2,
    //   respuesta3,
    //   respuesta4
    // ];

    // // console.log(preguntas['preguntas']0]);
    // console.log("JSON", json);
    // console.log("String", JSON.stringify(json));
    // setEncuesta(JSON.stringify(json));
    // console.log("Encuesta", encuesta);
    // // guardarArchivo();
    // // leerArchivo();
  }

  return (
    <View style={Estilos.Principal}>
      {encuestaCreada? (
        <View>
          {/* <Pressable onPress={toggleAgregarPregunta}><Text>Agragar pregunta +</Text></Pressable> */}
          <TextInput placeholder='Pregunta' onChangeText={setPreguntaVal}></TextInput>
          <TextInput placeholder='Respuesta 1' onChangeText={setRespuesta1Val}></TextInput>
          <TextInput placeholder='Respuesta 2' onChangeText={setRespuesta2Val}></TextInput>
          <TextInput placeholder='Respuesta 3' onChangeText={setRespuesta3Val}></TextInput>
          <TextInput placeholder='Respuesta 4' onChangeText={setRespuesta4Val}></TextInput>
          <Pressable onPress={onButtonGuardar}><Text>Guardar pregunta</Text></Pressable>
        </View>
      ):(
        <View>
          <TextInput placeholder='Ingresa el nombre del cuestionario' onChangeText={setEncuestaVal}></TextInput>
          <Pressable onPress={toggleEncuesta}><Text>Guardar nombre</Text></Pressable>
        </View>
      )}
    </View>
  );
}
