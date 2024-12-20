import { Text, View, Pressable, TextInput, ImageBackground, ScrollView } from "react-native";
import { useContext, useState } from 'react';
import { Estilos } from "@/constants/Styles";
import { endpoints } from "@/constants/endpoints";
import { ContextEncuesta } from "./context";
import { Link, router } from 'expo-router';

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
  const [valor] = useState('');
  const {encuesta, setEncuesta} = useContext(ContextEncuesta);
  const [preguntasTotales, setPreguntasTotales] = useState(0);
  const [minPreguntas, setMinPreguntas] = useState(false);


  
  const toggleAgregarPregunta = async () => {
    setAgregarPregunta(current => (current === false ? true : false));
  }
  const toggleEncuesta = async () => {
    if(encuestaVal != ''){
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
  }
  
  // const [encuesta, setEncuesta] = useState(leerArchivo);

  function guardarPregunta (){
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
        console.log('pregunta guardada:',data['pregunta_id'][0][0]);
        setPreguntaId(data['pregunta_id'][0][0]);
        console.log('iddddd->', preguntaId);
      }
    )
    console.log('pregunta',preguntaId);
    return true;
  }


  function onButtonGuardar(){
    // setEncuesta("Hola");
    console.log('fuera de insertar pregunta');
    if(preguntaVal != '' && respuesta1Val != '' && respuesta2Val != '' && respuesta3Val != '' && respuesta4Val != '' ){
      console.log('dentro de insertar pregunta');
      setMinPreguntas(false);
      setPreguntasTotales( preguntasTotales => preguntasTotales + 1 );
      const con = guardarPregunta();
      console.log(con)
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
          console.log('Respuesta guardada:',data);
          console.log(encuestaId);

          setPreguntaVal('');
          setRespuesta1Val('');
          setRespuesta2Val('');
          setRespuesta3Val('');
          setRespuesta4Val('');
          getPreguntas();
          setPreguntaId(parseInt(preguntaId)+1);
        }
      )
      console.log('fin');
    }
  }

  function getPreguntas(){
    // console.log(encuestaId[0][0]);

    var form = new FormData();
    form.append('encuesta',encuestaId[0][0]);

    fetch(endpoints.PREGUNTAS, {
      method: 'POST',
      body: form
    }).then(
      response => response.json()
    ).then(
      data => {
        // console.log(data);
        const enc_data = data['encuesta'];

        // console.log(enc_data);
        var aux_preguntas: any[] = [];
        var id_pregunta = enc_data[0][3];
        var aux_respuestas: any[] = [];
        var aux_pregunta_nom;
        for(var i in enc_data){//for de preguntas
            if(id_pregunta == enc_data[i][3]){//si es la misma pregunta
                aux_pregunta_nom = enc_data[i][0];
                id_pregunta = enc_data[i][3];
                var aux_respuesta_obj = {
                    respuesta_id: enc_data[i][4],
                    id: enc_data[i][4],
                    value: enc_data[i][4],
                    respuesta: enc_data[i][1],
                    label: enc_data[i][1],
                    numero: enc_data[i][2],
                };
                // console.log("---------respuesta---------");
                aux_respuestas.push(aux_respuesta_obj);
                // console.log(aux_respuestas);
            }else{
                var aux_pregunta_obj = {
                    pregunta_id: id_pregunta,
                    pregunta: aux_pregunta_nom,
                    respuestas: aux_respuestas
                };
                aux_preguntas.push(aux_pregunta_obj);
                aux_respuestas = [];
                id_pregunta = enc_data[i][3]
                
                aux_pregunta_nom = enc_data[i][0];
                id_pregunta = enc_data[i][3];
                var aux_respuesta_obj = {
                    respuesta_id: enc_data[i][4],
                    id: enc_data[i][4],
                    value: enc_data[i][4],
                    respuesta: enc_data[i][1],
                    label: enc_data[i][1],
                    numero: enc_data[i][2],

                };
                console.log("---------respuesta---------");
                aux_respuestas.push(aux_respuesta_obj);
            }
            if(enc_data.length == parseInt(i)+1){
                var aux_pregunta_obj = {
                    pregunta_id: id_pregunta,
                    pregunta: aux_pregunta_nom,
                    respuestas: aux_respuestas
                };
                aux_preguntas.push(aux_pregunta_obj);
            }
        }
        var enc = {
            encuesta:encuestaVal,
            preguntas: aux_preguntas
        };
        
        // console.log(enc['preguntas']);
        console.log(enc);
        setPreguntas(enc['preguntas']);
        console.log('preguntasssss',preguntas);
        setHayPreguntas(true);
        setEncuesta(enc);
      }
    )
  }
  const [preguntas, setPreguntas] = useState([]);
  const [hayPreguntas, setHayPreguntas] = useState(false);

  function guardarEncuesta(){
    if(preguntasTotales >= 5){
      console.log(encuesta);
      router.navigate('/encuesta');
    }else{
      console.log('no se llega al minimo');
      setMinPreguntas(true);
    }
  }

  return (
    <View style={Estilos.Principal}>
        <ImageBackground source={require("../assets/images/FondoCrear.png")} resizeMode="cover" style={Estilos.ImagenFondo}>
            <View>
                <View style={Estilos.ContenedorTitulos}>
                    <Text style={Estilos.TextoTitulo}>Crear encuesta</Text>
                </View>

                <View style={Estilos.Contenedor}>
                  {encuestaCreada? (
                    <View >
                      <Text style={Estilos.TextoSubtitulo}>Insertar pregunta:</Text>

                      <TextInput style={Estilos.CajaTexto} placeholder='Pregunta' onChangeText={setPreguntaVal} value={preguntaVal}></TextInput>
                      <TextInput style={Estilos.CajaTexto} placeholder='Respuesta  1' onChangeText={setRespuesta1Val} value={respuesta1Val}></TextInput>
                      <TextInput style={Estilos.CajaTexto} placeholder='Respuesta  2' onChangeText={setRespuesta2Val} value={respuesta2Val}></TextInput>
                      <TextInput style={Estilos.CajaTexto} placeholder='Respuesta  3' onChangeText={setRespuesta3Val} value={respuesta3Val}></TextInput>
                      <TextInput style={Estilos.CajaTexto} placeholder='Respuesta  4' onChangeText={setRespuesta4Val} value={respuesta4Val}></TextInput>

                      <Pressable style={Estilos.Boton} onPress={onButtonGuardar}><Text style={Estilos.TextoNormal}>Guardar pregunta</Text></Pressable>
                      {/* <Pressable onPress={getPreguntas}><Text>get preguntas</Text></Pressable> */}
                      {minPreguntas?(
                          <View style={Estilos.Contenedor}>
                          <Text style={Estilos.TextoNormalObligado}>Se necesitan al menos 5 preguntas.</Text>
                          </View>
                      ):undefined}
                      <Pressable style={Estilos.Boton} onPress={guardarEncuesta}><Text style={Estilos.TextoNormal}>Guardar encuesta</Text></Pressable>

                      <View style={Estilos.ContenedorScroll}>
                      {hayPreguntas? (
                        //tienes que hacer la funcion de que ya existen preguntas y otra funcion para que regtrese el for de como se verían las preguntas. desto lo regresa ya como html
                        <View>
                          <ScrollView>
                              {preguntas.map((preg) => {
                                return(
                                  <View key={preg.pregunta_id}>
                                    <Text style={Estilos.TextoNormal} >{preg.pregunta}</Text>
                                    <Text style={Estilos.TextoNormal} >R1. {preg.respuestas[0]['respuesta']}</Text>
                                    <Text style={Estilos.TextoNormal} >R2. {preg.respuestas[1]['respuesta']}</Text>
                                    <Text style={Estilos.TextoNormal} >R3. {preg.respuestas[2]['respuesta']}</Text>
                                    <Text style={Estilos.TextoNormal} >R4. {preg.respuestas[3]['respuesta']}</Text>
                                  </View>
                                );
                              })}
                            </ScrollView>
                          </View>
                      ):undefined}
                      </View>
                    </View>

                  ):(
                    <View>
                      <TextInput style={Estilos.TextoNormal} placeholder='Ingresa el nombre del cuestionario' onChangeText={setEncuestaVal}></TextInput>
                      <Pressable style={Estilos.Boton} onPress={toggleEncuesta}><Text style={Estilos.TextoNormal}>Guardar nombre</Text></Pressable>
                    </View>
                  )}
                </View>
            </View>
        </ImageBackground>
    </View>
  );
}
