import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from "@/constants/Styles";
import { useState, useContext} from 'react'
import { ContextEncuesta } from './context';
import { PieChart } from 'react-native-chart-kit'

export default function Index() {
    const {encuesta, setEncuesta} = useContext(ContextEncuesta);
    const [colores] = useState(['rgba(225,19,19,1)', 'rgba(255, 162, 1, 1)', 'rgba(51, 30, 200, 1)', 'rgba(31, 141, 27, 1)'])
    function agregarColor(){
        var aux = encuesta['preguntas'][0]['respuestas'];
        for( var i in aux){
            aux[parseInt(i)].color = colores[parseInt(i)];
        }
        return aux;
    }
    const [respuestas, setRespuestas] = useState(agregarColor)
    function click(){
        console.log(encuesta);
        var res = encuesta['preguntas'][0]['respuestas'];
        console.log('------Respuestas------');
        console.log(data2);
    }
    
    const [data2, setData] = useState([
        {color: "rgba(225,19,19,1)", numero: 7, name: "Jirafa", hola:6}, 
        {color: "rgba(255, 162, 1, 1)", numero: 5, respuesta: "Pingüino", hola:6}, 
        {color: "rgba(51, 30, 200, 1)", numero: 2, name: "Koala", hola:6}, 
        {color: "rgba(31, 141, 27, 1)", numero: 6, name: "Tortuga", hola:6}
    ]);

    const data = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];

      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    return(
        <View>
            <Text>resultados buenos</Text>
            <Pressable onPress={click}><Text>picame</Text></Pressable>
            <PieChart
                data={data2}
                width={400}
                height={300}
                chartConfig={chartConfig}
                accessor={"numero"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 10]}
                absolute
            />
        </View>
    );
}