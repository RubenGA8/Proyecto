import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from "@/constants/Styles";
import { useState, useContext} from 'react'
import { ContextEncuesta } from './context';
import { PieChart } from 'react-native-chart-kit'

export default function Index() {
    const {encuesta, setEncuesta} = useContext(ContextEncuesta);
    const [colores] = useState(['rgb(225, 19, 19)', 'rgb(255, 162, 1)', 'rgb(51, 30, 200)', 'rgb(31, 141, 27)'])
    function agregarColor(){
        var aux = encuesta['preguntas'][0]['respuestas'];
        for( var i in aux){
            aux[parseInt(i)].color = colores[parseInt(i)];
        }
        return aux;
    }
    const [respuestas, setRespuestas] = useState(agregarColor);
    const [data, setData] = useState([{"color": "rgb(225, 19, 19)", "numero": 7, "name": "Jirafa", "respuesta_id": 16}, {"color": "rgb(255, 162, 1)", "numero": 5, "respuesta": "Pingüino", "respuesta_id": 17}, {"color": "rgb(51, 30, 200)", "numero": 2, "name": "Koala", "respuesta_id": 18}, {"color": "rgb(31, 141, 27)", "numero": 6, "name": "Tortuga", "respuesta_id": 19}]  );

    function click(){
        console.log(encuesta);
        var res = encuesta['preguntas'][0]['respuestas'];
        console.log('------Respuestas------');
        console.log(data);
    }

    return(
        <View>
            <Text>resultados buenos</Text>
            <Pressable onPress={click}><Text>picame</Text></Pressable>
            {/* <PieChart
                data = {respuestas}
                width={300}
                height={250}
                accessor={'numero'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                center={[10,50]}
                absolute
            /> */}
        </View>
    );
}