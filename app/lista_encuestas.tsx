import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react'
import { Estilos } from '@/constants/Styles';
import { endpoints } from '@/constants/endpoints';

export default function Index() {  
    
    const getEncuestas = async () =>{
        console.log('dentro');
        fetch(endpoints.ENCUESTAS, {
        }).then(
            response => response.json()
        ).then(
            data => {
                // console.log(data);
                var res = [];
                console.log(data['encuestas']);
                // setEncuestas(data['encuestas']);
                return data['encuestas']
            }
        )
    }
    const [encuestas, setEncuestas] = useState(getEncuestas);

    function verInfo(){
        console.log(encuestas)
    }

  return (
    <View style={Estilos.Principal}>
    <Text>Encuestas</Text>
    <Text>{encuestas[0]}</Text>
    <Pressable onPress={verInfo}><Text>Hola</Text></Pressable>
    </View>
  );
}
