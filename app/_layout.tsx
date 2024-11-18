import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name='index'/>
    <Stack.Screen name='editar'/>
    <Stack.Screen name='crear'/>
    <Stack.Screen name='lista_encuesta'/>
    <Stack.Screen name='encuesta'/>
  </Stack>;
}
