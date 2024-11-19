import {Text, View, Pressable, Button, ScrollView, FlatList} from 'react-native';
import { Link, router } from 'expo-router';
import { useState, useContext } from 'react'
import { Estilos } from '@/constants/Styles';
import { endpoints } from '@/constants/endpoints';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContextEncuesta } from './context';

export default function Index() {  
    
    const getEncuestas = async () =>{
        console.log('dentro');
        fetch(endpoints.ENCUESTAS, {
        }).then(
            response => response.json()
        ).then(
            data => {
                // console.log(data);
                const enc = data['encuestas'];

                console.log(enc);
                var res: any[] = [];
                console.log(enc);
                for(var i in enc){
                    var aux = {
                        id: enc[i][0],
                        nombre: enc[i][1]
                    };
                    res.push(aux);
                }
                console.log(res);

                setHayEncuestas(true);
                setEncuestas(res);
                return res;
            }
        )
    }
    const [encuestas, setEncuestas] = useState(getEncuestas);
    const [hayEncuestas, setHayEncuestas] = useState(false);
    const {encuesta, setEncuesta} = useContext(ContextEncuesta);

    function verInfo(){
        console.log(encuestas);
    }

    function onPressLista(id_lista, nombre_lista){
        const form = new FormData();
        form.append('encuesta', id_lista);
        console.log(id_lista);
        fetch(endpoints.PREGUNTAS, {
            method: 'POST',
            body: form,
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
                        aux_pregunta_nom = enc_data[i][0]
                        id_pregunta = enc_data[i][3];
                        var aux_respuesta_obj = {
                            respuesta_id: enc_data[i][4],
                            respuesta: enc_data[i][1],
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
                            respuesta: enc_data[i][1],
                            numero: enc_data[i][2],
                        };
                        // console.log("---------respuesta---------");
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
                    encuesta:nombre_lista,
                    preguntas: aux_preguntas
                };
                setEncuesta(enc);
                router.navigate('/encuesta');
            }
        )
    }
    

  return (
    <SafeAreaView style={Estilos.Principal}>
        <View style={Estilos.ContenedorTitulos}>
            <Text style={Estilos.TextoTitulo}>Encuestas</Text>
            <Pressable onPress={verInfo}><Text>Hola</Text></Pressable>
        </View>

        <View style={Estilos.ContenedorScroll} >
            {hayEncuestas?(
                <View>
                    <FlatList data={encuestas}>
                        {encuestas.map((encuesta)=>{
                            return (
                                <View key={encuesta.id}>
                                    <Pressable style={Estilos.Boton} onPress={()=>onPressLista(encuesta.id, encuesta.nombre)}>
                                        <Text style={Estilos.TextoNormal}>{encuesta.nombre}</Text>
                                    </Pressable>
                                </View>
                            );
                        })}
                    </FlatList>
                </View>
            ):undefined}
            </View>
    </SafeAreaView>
  );
}
