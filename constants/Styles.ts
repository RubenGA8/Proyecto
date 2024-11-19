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
            height: 100,
            width: 200,
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

        ContenedorMarginal:{
            marginLeft: "20%",
            marginTop: "1%",
            marginBottom: "2.5%",
        },

        ContenedorAlineado:{
            alignItems: "flex-start",
        },

        Scroll:{
            flex: 1,
            flexDirection: "row-reverse",
            justifyContent: "center",
            backgroundColor: "rgba(156,156,156,0.3)",
            width: width * 0.75,
            borderRadius: 10,
            paddingTop: "2.5%",
            paddingBottom: "2.5%",
        },

        TextoTitulo:{
            fontFamily: "EABold",
            fontSize: 100 * 0.045,
            textShadowColor: 'rgba(0,0,0,0.4)', // Color de la sombra
            textShadowOffset: { width: 5, height: 5 }, // Desplazamiento en x e y
            textShadowRadius: 10, // Desenfoque de la sombra

        },

        TextoDestacable:{
            fontFamily: "EAMedium",
            fontSize: height * 0.025,
        },

        TextoNormal:{
            fontFamily: "EARegular",
        },
    }
)