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
        },

        Contenedor:{
            //flex: 2,
            justifyContent: "center",
            alignItems: "center",
            margin: "2.5%",
        },

        TextoTitulo:{
            fontFamily: "EABold",
            fontSize: 200 * 0.035,
        },

        TextoNormal:{
            fontFamily: "EARegular",
        },
    }
)