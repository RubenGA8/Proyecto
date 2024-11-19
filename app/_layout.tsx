import { Stack } from "expo-router";
import { ContextEncuestaProvider } from "./context";

export default function RootLayout() {
  return(
    <ContextEncuestaProvider>
      <Stack>
        <Stack.Screen name='index'/>
        <Stack.Screen name='editar'/>
        <Stack.Screen name='crear'/>
        <Stack.Screen name='lista_encuesta'/>
        <Stack.Screen name='encuesta'/>
      </Stack>
    </ContextEncuestaProvider>
  );
}
