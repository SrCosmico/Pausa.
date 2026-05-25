// tarea_arrays_mvp.ts — Parte B

// PASO 1: Define tu interface
// Reemplaza esto con la interface de tu app
// Ejemplos:
//   - App de posts:    interface Post   { id, titulo, autor, likes, publicado }
//   - App de rutas:    interface Ruta   { id, origen, destino, precio, activa }
//   - App de eventos:  interface Evento { id, nombre, lugar, fecha, gratuito }
//   - App de usuarios: interface Perfil { id, nombre, carrera, activo, tags }

interface RegistroPausa {
    id: string;                    // Requisito: id string
    nombre: string;
    apellido: string;              // Requisito: texto descriptivo (nombre del usuario)
    facultad: string;
    saludo: string;
    ComoTeSientesHoy: string[];
    duracionMinutos: number;       // Requisito: un número (tiempo que durará su pausa)
    meditacion: boolean;           // Requisito: un boolean (si el usuario terminó la meditacion)
    herramientas: string[]
}

// PASO 2: Crea tu array de datos de prueba
const pausa: RegistroPausa[] = [
    {id: "p1", nombre: "Camila", apellido: "Escalante", facultad: "Ingenieria", saludo: "Hola Camila, espero tengas un lindo día hoy <3", ComoTeSientesHoy: ["entusiasmada", "ansiosa", "feliz"], duracionMinutos: 5, meditacion: true, herramientas: ["meditacion", "respiración"]},
    {id: "p2", nombre: "Arturo", apellido: "Garbati", facultad: "Ciencias", saludo: "Hola Arturo, espero tengas un lindo día hoy <3", ComoTeSientesHoy: ["ansiosa", "agotada"], duracionMinutos: 0, meditacion: false, herramientas: ["tips antiestres", "frases motivacionales"]},
    {id: "p3", nombre: "Kisbell", apellido: "Mendoza", facultad: "Ingenieria", saludo: "Hola Kisbell, espero tengas un lindo día hoy <3", ComoTeSientesHoy: ["estresada", "cansada"], duracionMinutos: 3, meditacion: true, herramientas: ["modo crisis", "evaluacion rapida"]},
    {id: "p4", nombre: "Valeria", apellido: "Lopez", facultad: "Ciencias", saludo: "Hola Valeria, espero tengas un lindo día hoy <3", ComoTeSientesHoy: ["agotada", "ansiosa"], duracionMinutos: 0, meditacion: false, herramientas: ["cronograma academico", "registro emocional"]},
    {id: "p5", nombre: "Jesus", apellido: "Galvis", facultad: "Ingenieria", saludo: "Hola Jesus, espero tengas un lindo día hoy <3", ComoTeSientesHoy: ["cansado", "estresado"], duracionMinutos: 3, meditacion: true, herramientas: ["meditacion", "diario"]}, 
]

// PASO 3: Resuelve estos 5 ejercicios con TUS datos

// B1. filter() — filtra por el campo boolean de tu interface (parte de arturo)
const activos = pausa.filter(
    (elemento) => elemento.meditacion === true
)
console.log("B1. Activos:", activos.length)

// B2. map() — extrae solo los nombres o títulos (parte de kisbell)
const nombres = pausa.map(estudiante => estudiante.nombre);
console.log("B2. Nombres:", nombres)

// B3. find() — busca un elemento por su id (parte de valeria)
const elemento = pausa.find((registro) => {
    return registro.id === "p3";
})
console.log("B3. Encontrado:", elemento)

// B4. includes() — verifica si un tag o valor existe en un elemento (parte de camila)
const tieneTag = pausa[0].herramientas.includes("respiración")
console.log("B4. Tiene tag:", tieneTag)

// B5. filter() + map() encadenados (parte de todos)
//     Filtra los activos y extrae sus nombres
const nombresActivos = pausa
  .filter(registro => registro.meditacion === true)
  .map(registro => registro.nombre);
console.log("B5. Nombres activos:", nombresActivos)


