import { basename } from "expo-file-system/src/next/pathUtilities/path"

const BASE_URL = 'https://rga.rduana.com'

export const endpoints = {
    ENCUESTAS: `${BASE_URL}/encuestas`,
    GUARDARENCUESTA: `${BASE_URL}/guardar_encuesta`,
    GUARDARPREGUNTA: `${BASE_URL}/guardar_pregunta`,
    GUARDARRESPUESTA: `${BASE_URL}/guardar_respuesta`,
    LASTID: `${BASE_URL}/last_id`,
    PREGUNTAS: `${BASE_URL}/get_preguntas`
}