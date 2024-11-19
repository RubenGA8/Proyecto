import { Text, View, Pressable, Button, ImageBackground, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from "@/constants/Styles";
import { useState, useContext} from 'react'
import { ContextEncuesta } from './context';
import { PieChart } from 'react-native-chart-kit'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const {encuesta, setEncuesta} = useContext(ContextEncuesta);
    const [colores] = useState(['rgba(225,19,19,1)', 'rgba(255, 162, 1, 1)', 'rgba(51, 30, 200, 1)', 'rgba(31, 141, 27, 1)'])
    function agregarColor(){
        // var aux = encuesta['preguntas'][0]['respuestas'];
        // for( var i in aux){
        //     aux[parseInt(i)].color = colores[parseInt(i)];
        //     aux[parseInt(i)].name = aux[parseInt(i)].respuesta;
        // }
        // return aux;
        var preg = encuesta['preguntas']
        console.log(preg);
        var aux = {};
        for(var i in preg){
            var res = preg[i]['respuestas'];
            console.log(preg[parseInt(i)]);
            for(var j in res){
                res[parseInt(j)].color = colores[parseInt(j)];
                res[parseInt(j)].name = res[parseInt(j)].respuesta;
            }
        }
        return preg;
    }
    const [respuestas, setRespuestas] = useState(agregarColor)
    function click(){
        console.log(respuestas[0]['respuestas']);
        // console.log(encuesta);
        // var preg = encuesta['preguntas']
        // console.log(preg);
        // var aux = {};
        // for(var i in preg){
        //     var res = preg[i]['respuestas'];
        //     console.log(preg[parseInt(i)]);
        //     for(var j in res){
        //         res[parseInt(i)].color = colores[parseInt(i)];
        //         res[parseInt(i)].name = res[parseInt(i)].respuesta;
        //     }

        // }
        // console.log(preg);
        // console.log('------Respuestas------');
        // console.log(respuestas);
    }

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
        <SafeAreaView style={Estilos.Principal}>
            <ImageBackground source={require('../assets/images/FondoEncuestas.png')} resizeMode='cover' style={Estilos.ImagenFondo}>
                <View style={Estilos.ContenedorTitulos}>
                    <Text style={Estilos.TextoTitulo}>resultados buenos</Text>
                    <Pressable onPress={click}><Text>picame</Text></Pressable>
                </View>
                <View style={Estilos.ContenedorScroll}>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* <Text>{respuestas[0]['pregunta']}</Text>
                            <PieChart
                                data={respuestas[0]['respuestas']}
                                width={400}
                                height={300}
                                chartConfig={chartConfig}
                                accessor={"numero"}
                                backgroundColor={"transparent"}
                                paddingLeft={"15"}
                                center={[10, 10]}
                                absolute
                            /> */}
                            {respuestas.map((respuesta)=>{
                                return(
                                    <View>
                                        <Text>{respuesta.pregunta}</Text>
                                        <PieChart
                                            data={respuesta.respuestas}
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
                            })}
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}