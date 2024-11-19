import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Estilos } from "@/constants/Styles";
import { useState, useContext} from 'react'
import { ContextEncuesta } from './context';

export default function Index() {
    const {encuesta, setEncuesta} = useContext(ContextEncuesta);

    return(
        <View>
            <Text>resultados buenos</Text>
        </View>
    );
}