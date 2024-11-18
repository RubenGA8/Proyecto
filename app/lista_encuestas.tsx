import { Text, View, Pressable, Button, ScrollView } from 'react-native';
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
                const enc = data['encuesta'];

                console.log(enc);
                var res: any[] = [];
                // console.log(enc);
                for(var i in enc){
                    var aux = {
                        encuesta:nombre_lista,
                        id: enc[i][3],
                        pregunta: enc[i][0],
                        respuesta: enc[i][1],
                        numero: enc[i][2]
                    };
                    res.push(aux);
                }
                console.log(res);
                setEncuesta(res);
            }
        )
    }
    

  return (
    <SafeAreaView style={Estilos.Principal}>
        <Text>Encuestas</Text>
        <Pressable onPress={verInfo}><Text>Hola</Text></Pressable>
            {hayEncuestas?(
                <View>
                    {encuestas.map((encuesta)=>{
                        return (
                            <View>
                                <Pressable onPress={()=>onPressLista(encuesta.id, encuesta.nombre)}>
                                    <Text>{encuesta.nombre}</Text>
                                </Pressable>
                            </View>
                        );
                    })}
                </View>
            ):undefined}
    </SafeAreaView>
  );
}
