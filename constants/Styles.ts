import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Estilos = StyleSheet.create(
    {
        Principal:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: width,
            height: height,
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
            marginBottom: "5.5%",
        },

        Contenedor:{
            //flex: 2,
            justifyContent: "center",
            alignItems: "center",
            margin: "2.5%",
        },

        TextoTitulo:{
            fontFamily: "EABold",
            fontSize: height * 0.035,
        },

        TextoNormal:{
            fontFamily: "EARegular",
        },
    }
)