import { Text, View, Pressable, TextInput, ImageBackground } from "react-native";
import { useState } from 'react';
import { Estilos } from "@/constants/Styles";
import { endpoints } from "@/constants/endpoints";

export default function Index(){
    const [encuestaCreada, setEncuestaCreada] = useState(false);
    const [encuestaVal, setEncuestaVal] = useState('');
    const [preguntaVal, setPreguntaVal] = useState('');
    const [respuesta1Val, setRespuesta1Val] = useState('');
    const [respuesta2Val, setRespuesta2Val] = useState('');
    const [respuesta3Val, setRespuesta3Val] = useState('');
    const [respuesta4Val, setRespuesta4Val] = useState('');
    const [encuesta, setEncuesta] = useState([])


    function toggleEncuesta(){
        var aux: any[] = [];
        
        setEncuestaCreada(true);
    }

    function onButtonGuardar(){
        
    }

    return(
        <View style={Estilos.Principal}>
            <ImageBackground source={require("../assets/images/FondoCrear.png")} resizeMode="cover" style={Estilos.ImagenFondo}>
                <View style={Estilos.Contenedor}>
                    <View style={Estilos.ContenedorTitulos}>
                        <Text style={Estilos.TextoTitulo}>Crear encuesta</Text>
                    </View>
            {encuestaCreada?(
                <View>
                    <Text>{encuestaVal}</Text>
                    <TextInput placeholder='Pregunta' onChangeText={setPreguntaVal}></TextInput>
                    <TextInput placeholder='Respuesta 1' onChangeText={setRespuesta1Val}></TextInput>
                    <TextInput placeholder='Respuesta 2' onChangeText={setRespuesta2Val}></TextInput>
                    <TextInput placeholder='Respuesta 3' onChangeText={setRespuesta3Val}></TextInput>
                    <TextInput placeholder='Respuesta 4' onChangeText={setRespuesta4Val}></TextInput>
                    <Pressable onPress={onButtonGuardar}><Text>Guardar pregunta</Text></Pressable>
                </View>
            ):(
                <View>
                    <Text>Crear encuesta</Text>
                    <TextInput placeholder='Ingresa el nombre del cuestionario' onChangeText={setEncuestaVal}></TextInput>
                    <Pressable onPress={toggleEncuesta}><Text>Guardar nombressss</Text></Pressable>
                </View>
            )}
                </View>
            </ImageBackground>
        </View>
    );
}