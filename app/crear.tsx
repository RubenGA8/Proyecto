import { Text, View, Pressable, TextInput } from "react-native";
import { useState, useMemo, useContext } from 'react';
import { Estilos } from "@/constants/Styles";
import { endpoints } from "@/constants/endpoints";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { ContextEncuesta } from "./context";

export default function Index(){
    const {encuesta, setEncuesta} = useContext(ContextEncuesta);
    const [preguntas, setPreguntas] = useState(quitaColor);

    const [data] = useState([{id: '3', label: 'Option 1 data',value: 'option1'},{id: '4',label: 'Option 2 data',value: 'option2'}]);
    const [selectedId, setSelectedId] = useState<string | undefined>();
    const [selectedId2, setSelectedId2] = useState<string | undefined>();

    function quitaColor(){
        var pregs = encuesta['preguntas'];
        for(var i in pregs){
            for(var j in pregs[i]['respuestas']){
                delete pregs[i]['respuestas'][j].color;
            }
        }
        return pregs;
    }
    
    function click(){
        console.log(arreglo);
        setArreglo((arreglo[1] = '3'));
    }

    const [arreglo, setArreglo] = useState(['','','','']);

    return(
        <View style={Estilos.Principal}>
            <Pressable onPress={click}>
                <Text>Hola</Text>

            </Pressable>
            <RadioGroup 
                radioButtons={preguntas[0]['respuestas']} 
                onPress={setSelectedId}
                selectedId={selectedId}
            />
            <RadioGroup 
                radioButtons={preguntas[1]['respuestas']} 
                onPress={setSelectedId}
                selectedId={selectedId}
            />
        </View>
    );
}