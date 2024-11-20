import { Stack } from "expo-router";
import { ContextEncuestaProvider } from "./context";

export default function RootLayout() {
    return(
        <ContextEncuestaProvider>
            <Stack>
                <Stack.Screen name='index' options={{headerShown: false}} />
                <Stack.Screen name='editar' options={{headerShown: false}} />
                <Stack.Screen name='crear' options={{headerShown: false}} />
                <Stack.Screen name='lista_encuestas' options={{headerShown: false}} />
                <Stack.Screen name='encuesta' options={{headerShown: false}} />
                <Stack.Screen name='resultados' options={{headerShown: false}} />
            </Stack>
        </ContextEncuestaProvider>
    );
}