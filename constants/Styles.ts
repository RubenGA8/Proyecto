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
            margin: "3%",
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
            //width: "75%",
            backgroundColor: '#9819e1',
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