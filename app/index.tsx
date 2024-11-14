import { Text, View, Pressable, Button } from 'react-native';
import { Link, router } from 'expo-router';

export default function Index() {
  function onButtonEdit(){
    console.log('Click');
    router.replace('/editar');
  }
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <Text>Edit app/index.tsx to edit this screen.</Text>
    <Link href='/editar'>
      <Pressable onPress={onButtonEdit}><Text>Editar Cuestionario</Text></Pressable>
    </Link>
    </View>
  );
}
