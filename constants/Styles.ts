import { StyleSheet } from "react-native";

export const Estilos = StyleSheet.create(
    {
        Principal:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            height: 200,
        },

        ImagenFondo:{
            flex: 1,
            flexDirection: "column",
            height: height,
            width: width,
        },

        Boton:{
            flexDirection: "row",
            backgroundColor: "#FFCA00",
            borderRadius: 7,
            margin: "2%",
            padding: "2.5%",
            justifyContent: "center",
        },

        ContenedorTitulos:{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "3.5%",
            marginBottom: "5.5%",
        },

        ContenedorScroll:{
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
        },

        Contenedor:{
            //flex: 2,
            justifyContent: "center",
            alignItems: "center",
            margin: "2.5%",
        },

        TextoTitulo:{
            fontFamily: "EABold",
            fontSize: height * 0.045,
            textShadowColor: 'rgba(0,0,0,0.4)', // Color de la sombra
            textShadowOffset: { width: 5, height: 5 }, // Desplazamiento en x e y
            textShadowRadius: 10, // Desenfoque de la sombra

        },

        TextoNormal:{
            fontFamily: "EARegular",
        },
    }
)