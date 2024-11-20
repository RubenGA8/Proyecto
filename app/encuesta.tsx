import {Text, View, Pressable, Button, ImageBackground, ScrollView} from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from '@/constants/Styles';
import { useRoute } from "@react-navigation/native"
import { ContextEncuesta } from './context';
import { useState, useContext, useMemo } from 'react';
import { RadioGroup, RadioButtonProps } from 'react-native-radio-buttons-group';
import { endpoints } from '@/constants/endpoints';


export default function Index() {  
  const {encuesta} = useContext(ContextEncuesta);
  const [preguntas, setPreguntas] = useState(quitaColor);
  const [incompleto, setIncompleto] = useState(false);
  const [encuestaEnviada, setEncuestaEnviada] = useState(false);

  function quitaColor(){
    var pregs = encuesta['preguntas'];
    for(var i in pregs){
      pregs[i].pregunta_numero = i;
      for(var j in pregs[i]['respuestas']){
        delete pregs[i]['respuestas'][j].color;
      }
    }
    return pregs;
  }

  function onButtonResultados(){
    console.log("dentro de encuesta");
    console.log(preguntas);
    console.log("Contexto sin tragarsela sin pretexto");
    console.log(encuesta)
    console.log("Queremos extraer: " + encuesta["encuesta"])
    router.navigate('/resultados');
  }

  function guardarRespuestas(){
    // console.log(selectedId0);
    // console.log(preguntas.length);
    var aux = [];
    var res = [];
    var si = false;
    aux.push(selectedId0);
    aux.push(selectedId1);
    aux.push(selectedId2);
    aux.push(selectedId3);
    aux.push(selectedId4);
    aux.push(selectedId5);
    aux.push(selectedId6);
    aux.push(selectedId7);
    aux.push(selectedId8);
    aux.push(selectedId9);
    for(var i in preguntas){//contiene los id de las respuestas seleccionadas
      if(aux[i] != undefined)
        res.push(aux[i]);
      else{
        setIncompleto(true);
        si = true;
      }
    }
    if(si == false){
      setEncuestaEnviada(true);
      console.log(res);
      for(var i in res){
        const form = new FormData();
        form.append('id', res[i]);
        fetch(endpoints.UPDATERESPUESTA, {
          method: 'POST',
          body: form,
        }).then(
          response => response.json()
        ).then(
          data => {
            console.log(data);
          }
        )
      }
    }
  }

  const [selectedId0, setSelectedId0] = useState<string | undefined>();
  const [selectedId1, setSelectedId1] = useState<string | undefined>();
  const [selectedId2, setSelectedId2] = useState<string | undefined>();
  const [selectedId3, setSelectedId3] = useState<string | undefined>();
  const [selectedId4, setSelectedId4] = useState<string | undefined>();
  const [selectedId5, setSelectedId5] = useState<string | undefined>();
  const [selectedId6, setSelectedId6] = useState<string | undefined>();
  const [selectedId7, setSelectedId7] = useState<string | undefined>();
  const [selectedId8, setSelectedId8] = useState<string | undefined>();
  const [selectedId9, setSelectedId9] = useState<string | undefined>();

  function otraRespuesta(){
    setEncuestaEnviada(false);
    setIncompleto(false);
    setSelectedId0(undefined);
    setSelectedId1(undefined);
    setSelectedId2(undefined);
    setSelectedId3(undefined);
    setSelectedId4(undefined);
    setSelectedId5(undefined);
    setSelectedId6(undefined);
    setSelectedId7(undefined);
    setSelectedId8(undefined);
    setSelectedId9(undefined);
  }

  return (
    <View style={Estilos.Principal}>
      <ImageBackground source={require("../assets/images/FondoEncuestas.png")} resizeMode="cover" style={Estilos.ImagenFondo}>
        <View style={Estilos.ContenedorTitulos}>
          <Text style={Estilos.TextoTitulo}>Encuesta:</Text>
          <Text style={Estilos.TextoTitulo}>{encuesta["encuesta"]}</Text>
        </View>
        {encuestaEnviada?(
          <View style={Estilos.Contenedor}>
            <Text style={Estilos.TextoNormal}>Encuesta enviada</Text>
            <Pressable onPress={otraRespuesta} style={Estilos.Boton}><Text style={Estilos.TextoNormal}>Volver a contestar</Text></Pressable>
          </View>
        ):(
          <View style={Estilos.ContenedorScroll}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {preguntas[0]?(
                <View style={Estilos.Contenedor} key={preguntas[0].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[0].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[0].respuestas}
                        onPress={setSelectedId0}
                        selectedId={selectedId0}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[1]?(
                <View style={Estilos.Contenedor} key={preguntas[1].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[1].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[1].respuestas}
                        onPress={setSelectedId1}
                        selectedId={selectedId1}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[2]?(
                <View style={Estilos.Contenedor} key={preguntas[2].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[2].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[2].respuestas}
                        onPress={setSelectedId2}
                        selectedId={selectedId2}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[3]?(
                <View style={Estilos.Contenedor} key={preguntas[3].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[3].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[3].respuestas}
                        onPress={setSelectedId3}
                        selectedId={selectedId3}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[4]?(
                <View style={Estilos.Contenedor} key={preguntas[4].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[4].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[4].respuestas}
                        onPress={setSelectedId4}
                        selectedId={selectedId4}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[5]?(
                <View style={Estilos.Contenedor} key={preguntas[5].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[5].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[5].respuestas}
                        onPress={setSelectedId5}
                        selectedId={selectedId5}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[6]?(
                <View style={Estilos.Contenedor} key={preguntas[6].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[6].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[6].respuestas}
                        onPress={setSelectedId6}
                        selectedId={selectedId6}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[7]?(
                <View style={Estilos.Contenedor} key={preguntas[7].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[7].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[7].respuestas}
                        onPress={setSelectedId7}
                        selectedId={selectedId7}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[8]?(
                <View style={Estilos.Contenedor} key={preguntas[8].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[8].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[8].respuestas}
                        onPress={setSelectedId8}
                        selectedId={selectedId8}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
              {preguntas[9]?(
                <View style={Estilos.Contenedor} key={preguntas[9].pregunta_id}>
                  <View style={Estilos.Scroll}>
                    <View>
                      <Text style={Estilos.TextoDestacable}>{preguntas[9].pregunta}</Text>
                      <RadioGroup
                        radioButtons={preguntas[9].respuestas}
                        onPress={setSelectedId9}
                        selectedId={selectedId9}
                        labelStyle={Estilos.TextoNormal}
                      />
                    </View>
                  </View>
                </View>
              ):undefined}
            {incompleto?(
                <View style={Estilos.Contenedor}>
                <Text style={Estilos.TextoNormalObligado}>Faltan por contestar preguntas.</Text>
                </View>
            ):undefined}
            <View style={Estilos.Contenedor}>
            <Pressable onPress={guardarRespuestas} style={Estilos.Boton}><Text style={Estilos.TextoNormal}>Enviar encuesta </Text></Pressable>
            </View>
            </ScrollView>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}
