import { Text, View, Pressable, TextInput } from "react-native";
import { useState } from 'react';
import { Estilos } from "@/constants/Styles";
import { endpoints } from "@/constants/endpoints";

export default function Index() {

  const [agregarPregunta, setAgregarPregunta] = useState(false);
  const [encuestaCreada, setEncuestaCreada] = useState(false);
  const [encuestaVal, setEncuestaVal] = useState('');
  const [encuestaId, setEncuestaId] = useState(0);
  const [preguntaVal, setPreguntaVal] = useState('');
  const [preguntaId, setPreguntaId] = useState(0);
  const [respuesta1Val, setRespuesta1Val] = useState('');
  const [respuesta2Val, setRespuesta2Val] = useState('');
  const [respuesta3Val, setRespuesta3Val] = useState('');
  const [respuesta4Val, setRespuesta4Val] = useState('');
  
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
        setEncuestaId(data['encuestaId']);
      }
    )

    setEncuestaCreada(current => (current === false ? true : false));

    fetch(endpoints.LASTID, {
      method: 'POST',
    }).then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setPreguntaId(data['id']);
      }
    )
  }
  
  // const [encuesta, setEncuesta] = useState(leerArchivo);
  const [encuesta, setEncuesta] = useState({});

  function guardarPregunta(){
    var form = new FormData();
    form.append('id',encuestaId[0][0]);
    form.append('pregunta',preguntaVal);

    fetch(endpoints.GUARDARPREGUNTA, {
      method: 'POST',
      body: form,
    }).then(
      response => response.json()
    ).then(
      data => {
        console.log('pregunta guardada:',data);
        setPreguntaId(data['pregunta_id']);
      }
    )
    console.log('pregunta',preguntaId);
  }

  const onButtonGuardar = async () => {
    // setEncuesta("Hola");

    const con = await guardarPregunta();

    console.log("Guardar respuestas (id)",preguntaId);

    var form2 = new FormData();
    form2.append('pregunta_id', preguntaId);
    form2.append('respuesta1', respuesta1Val);
    form2.append('respuesta2', respuesta2Val);
    form2.append('respuesta3', respuesta3Val);
    form2.append('respuesta4', respuesta4Val);
    
    console.log(form2);

    fetch(endpoints.GUARDARRESPUESTA, {
      method: 'POST',
      body: form2,
    }).then(
      response => response.json()
    ).then(
      data => {
        console.log('Respuesta guardada:',data)
      }
    )
  }

  const getPreguntas = async () => {
    console.log(encuestaId[0][0]);

    var form = new FormData();
    form.append('encuesta',encuestaId[0][0]);

    fetch(endpoints.PREGUNTAS, {
      method: 'POST',
      body: form
    }).then(
      response => response.json()
    ).then(
      data => {
        var arreglo = []
        console.log(data['encuesta']);
        var enc = data['encuesta'];
        var aux: any[] = [];
        for(var i in enc){
          if(i == '0'){
            aux.push(enc[i][0])
          }
          aux.push(enc[i][1])
          
        }
        // console.log(aux);
        setPreguntas(aux);
        if(aux.length > 0)
          setHayPreguntas(true);
        console.log(preguntas);
      }
    )
  }
  const [preguntas, setPreguntas] = useState([]);
  const [hayPreguntas, setHayPreguntas] = useState(false);


  return (
    <View style={Estilos.Principal}>
      {encuestaCreada? (
        <View>
          {/* <Pressable onPress={toggleAgregarPregunta}><Text>Agragar pregunta +</Text></Pressable> */}
          <Text>Pregunta id: {preguntaId}</Text>
          <TextInput placeholder='Pregunta' onChangeText={setPreguntaVal}></TextInput>
          <TextInput placeholder='Respuesta 1' onChangeText={setRespuesta1Val}></TextInput>
          <TextInput placeholder='Respuesta 2' onChangeText={setRespuesta2Val}></TextInput>
          <TextInput placeholder='Respuesta 3' onChangeText={setRespuesta3Val}></TextInput>
          <TextInput placeholder='Respuesta 4' onChangeText={setRespuesta4Val}></TextInput>
          <Pressable onPress={onButtonGuardar}><Text>Guardar pregunta</Text></Pressable>
          <Pressable onPress={getPreguntas}><Text>get preguntas</Text></Pressable>
          {/*hayPreguntas? (
            //tienes que hacer la funcion de que ya existen preguntas y otra funcion para que regtrese el for de como se verían las preguntas. desto lo regresa ya como html
          ):undefined*/}
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
