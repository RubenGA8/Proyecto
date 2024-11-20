import { Text, View, Pressable, Button, ImageBackground, ScrollView, TextInput } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from "@/constants/Styles";
import { useState, useContext} from 'react'
import { ContextEncuesta } from './context';
import { PieChart } from 'react-native-chart-kit'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const {encuesta, setEncuesta} = useContext(ContextEncuesta);
    const [colores] = useState(['rgba(225,19,19,1)', 'rgba(255, 162, 1, 1)', 'rgba(51, 30, 200, 1)', 'rgba(31, 141, 27, 1)']);
    const [login, setLogin] = useState(false);
    const [contrasena, setContrasena] = useState('');

    function agregarColor(){
        // var aux = encuesta['preguntas'][0]['respuestas'];
        // for( var i in aux){
        //     aux[parseInt(i)].color = colores[parseInt(i)];
        //     aux[parseInt(i)].name = aux[parseInt(i)].respuesta;
        // }
        // return aux;
        console.log('-----encuesta-----');
        console.log(encuesta);
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

    function ingresar(){
        if(contrasena == '12345')
            setLogin(true);
    }

    return(
        <SafeAreaView style={Estilos.Principal}>
                {login?(
                    <ImageBackground source={require('../assets/images/FondoEncuestas.png')} resizeMode='cover' style={Estilos.ImagenFondo}>
                        <View style={Estilos.ContenedorTitulos}>
                            <Text style={Estilos.TextoTitulo}>{encuesta.encuesta}</Text>
                        </View>
                        <View style={Estilos.ContenedorScroll}>
                            <View>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {respuestas.map((respuesta)=>{
                                        return(
                                            <View key={respuesta.pregunta_id}>
                                                <Text style={Estilos.TextoNormal}>{respuesta.pregunta}</Text>
                                                <PieChart
                                                    data={respuesta.respuestas}
                                                    width={300}
                                                    height={200}
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
                ):(
                    <ImageBackground source={require('../assets/images/FondoEncuestas.png')} resizeMode='cover' style={Estilos.ImagenFondo}>
                        <View style={Estilos.ContenedorTitulos}>
                            <Text style={Estilos.TextoTitulo}>{encuesta.encuesta}</Text>
                        </View>

                        <View style={Estilos.Contenedor}>
                        <Text style={Estilos.TextoNormal}>Ingrese la contraseña</Text>
                        <TextInput style={Estilos.CajaTexto} placeholder='Contraseña' secureTextEntry onChangeText={setContrasena} value={contrasena}></TextInput>
                        <Pressable onPress={ingresar} style={Estilos.Boton}><Text>Ingresar</Text></Pressable>
                        </View>
                    </ImageBackground>
                )}
        </SafeAreaView>
    );
}