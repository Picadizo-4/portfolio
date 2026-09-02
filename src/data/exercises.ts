export interface Ejercicio {
  tipo: 'prediccion' | 'escritura' | 'teoria'
  enunciado: string
  codigo?: string
  respuestas: string[]
}

export const ejerciciosPorSkill: Record<string, Ejercicio[]> = {
  Java: [
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'System.out.println(5 + 3);', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'int x = 10;\nif (x > 5) {\n  System.out.println("mayor");\n} else {\n  System.out.println("menor");\n}', respuestas: ['mayor'] },
    { tipo: 'escritura', enunciado: 'Declara un array de enteros llamado numeros con los valores 1, 2 y 3.', respuestas: ['int[] numeros = {1, 2, 3};', 'int[] numeros = {1,2,3};', 'int numeros[] = {1, 2, 3};'] },
  ],
  'C#': [
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'Console.WriteLine(10 % 3);', respuestas: ['1'] },
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'string nombre = "Ana";\nConsole.WriteLine($"Hola {nombre}");', respuestas: ['Hola Ana'] },
    { tipo: 'escritura', enunciado: 'Declara una variable de tipo string llamada mensaje con el valor "Hola mundo".', respuestas: ['string mensaje = "Hola mundo";', "string mensaje = 'Hola mundo';"] },
  ],
  Python: [
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'print(5 + 3)', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'x = 10\nprint("par" if x % 2 == 0 else "impar")', respuestas: ['par'] },
    { tipo: 'escritura', enunciado: 'Escribe una lista con los números del 1 al 5 usando comprensión de listas.', respuestas: ['numeros = [x for x in range(1, 6)]', 'numeros = [i for i in range(1, 6)]', '[x for x in range(1, 6)]', '[i for i in range(1, 6)]'] },
  ],
  Kotlin: [
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'println(5 + 3)', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'val x = 10\nprintln(if (x > 5) "mayor" else "menor")', respuestas: ['mayor'] },
    { tipo: 'escritura', enunciado: 'Declara una variable inmutable llamada nombre con el valor "Miguel".', respuestas: ['val nombre = "Miguel"', "val nombre = 'Miguel'"] },
  ],
  MVVM: [
    { tipo: 'teoria', enunciado: '¿Qué capa de MVVM contiene la lógica de presentación, sin depender directamente de la vista?', respuestas: ['viewmodel', 'view model'] },
    { tipo: 'teoria', enunciado: '¿Qué capa de MVVM contiene los datos y las reglas de negocio?', respuestas: ['modelo', 'model'] },
    { tipo: 'teoria', enunciado: 'Completa: en MVVM, la Vista se comunica con el ViewModel mediante ______.', respuestas: ['bindings', 'data binding', 'binding'] },
  ],
  'Lógica asíncrona': [
    { tipo: 'teoria', enunciado: '¿Qué palabra clave se usa en Kotlin para marcar una función como asíncrona?', respuestas: ['suspend'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama el objeto que representa un valor que estará disponible en el futuro (usado en JavaScript)?', respuestas: ['promise', 'promesa'] },
    { tipo: 'teoria', enunciado: '¿Qué le puede pasar a la interfaz de una app si ejecutas una tarea larga de forma síncrona en el hilo principal?', respuestas: ['se bloquea', 'bloqueo', 'se congela'] },
  ],
  Firebase: [
    { tipo: 'teoria', enunciado: '¿Qué tipo de base de datos es Firestore, la base de datos principal de Firebase?', respuestas: ['nosql'] },
    { tipo: 'teoria', enunciado: '¿Qué servicio de Firebase usarías para gestionar el login de usuarios?', respuestas: ['authentication', 'auth'] },
    { tipo: 'teoria', enunciado: '¿Qué servicio de Firebase usarías para subir y guardar imágenes o archivos?', respuestas: ['storage'] },
  ],
  NoSQL: [
    { tipo: 'teoria', enunciado: '¿Verdadero o falso? Las bases de datos NoSQL no requieren un esquema fijo.', respuestas: ['verdadero'] },
    { tipo: 'teoria', enunciado: '¿Cuál es la unidad básica de almacenamiento en una base de datos NoSQL documental, en vez de una fila?', respuestas: ['documento'] },
    { tipo: 'teoria', enunciado: '¿En qué formato se suelen guardar los documentos en bases NoSQL como MongoDB o Firestore?', respuestas: ['json'] },
  ],
  JSON: [
    { tipo: 'prediccion', enunciado: '¿Qué tipo de dato tiene el valor de "edad" en este JSON?', codigo: '{\n  "nombre": "Miguel",\n  "edad": 21\n}', respuestas: ['numero', 'número'] },
    { tipo: 'teoria', enunciado: '¿Con qué símbolo se delimita un array en JSON?', respuestas: ['[]', 'corchetes'] },
    { tipo: 'escritura', enunciado: 'Escribe un objeto JSON con una clave "lenguaje" con el valor "Python".', respuestas: ['{"lenguaje": "python"}', '{"lenguaje":"python"}'] },
  ],
  Git: [
    { tipo: 'teoria', enunciado: '¿Qué comando de Git guarda los cambios preparados en el historial local?', respuestas: ['git commit'] },
    { tipo: 'teoria', enunciado: '¿Qué comando sube los commits locales al repositorio remoto?', respuestas: ['git push'] },
    { tipo: 'teoria', enunciado: '¿Qué comando añade todos los archivos modificados al área de preparación (staging)?', respuestas: ['git add .', 'git add *'] },
  ],
  Docker: [
    { tipo: 'teoria', enunciado: '¿Cómo se llama el archivo que define cómo construir una imagen de Docker?', respuestas: ['dockerfile'] },
    { tipo: 'teoria', enunciado: '¿Qué comando se usa para ejecutar un contenedor a partir de una imagen?', respuestas: ['docker run'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama una instancia en ejecución de una imagen Docker?', respuestas: ['contenedor', 'container'] },
  ],
  Figma: [
    { tipo: 'teoria', enunciado: '¿Cómo se llama en Figma el elemento reutilizable que mantiene consistencia entre pantallas, como un botón reutilizado en varias vistas?', respuestas: ['componente'] },
    { tipo: 'teoria', enunciado: '¿Qué formato de archivo vectorial se puede exportar directamente desde Figma para iconos?', respuestas: ['svg'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama la funcionalidad de Figma que simula la navegación entre pantallas?', respuestas: ['prototipado', 'prototype', 'prototipo'] },
  ],
    POO: [
    { tipo: 'teoria', enunciado: '¿Cómo se llama el principio de POO que oculta los detalles internos de una clase y solo expone lo necesario?', respuestas: ['encapsulacion', 'encapsulación'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama el principio que permite que una clase herede atributos y comportamientos de otra?', respuestas: ['herencia'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama la capacidad de un mismo método de comportarse de forma distinta según el objeto que lo llama?', respuestas: ['polimorfismo'] },
  ],
  SVG: [
    { tipo: 'teoria', enunciado: '¿SVG es un formato de gráficos vectorial o de mapa de bits (raster)?', respuestas: ['vectorial'] },
    { tipo: 'teoria', enunciado: '¿En qué lenguaje de marcado está basado el formato SVG, el mismo que estructura una página web?', respuestas: ['xml'] },
    { tipo: 'prediccion', enunciado: '¿Qué figura dibuja esta etiqueta SVG?', codigo: '<circle cx="50" cy="50" r="40" />', respuestas: ['circulo', 'círculo'] },
  ],
  'Bases de datos': [
    { tipo: 'teoria', enunciado: '¿Cómo se llama el lenguaje estándar para consultar bases de datos relacionales?', respuestas: ['sql'] },
    { tipo: 'teoria', enunciado: '¿Qué tipo de relación existe cuando un usuario puede tener varios pedidos, pero cada pedido pertenece a un único usuario?', respuestas: ['uno a muchos', '1 a muchos', 'one to many'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama la columna que identifica de forma única cada fila de una tabla?', respuestas: ['clave primaria', 'primary key'] },
  ],
  'Jetpack Compose': [
    { tipo: 'teoria', enunciado: '¿Jetpack Compose sigue un enfoque de UI declarativo o imperativo?', respuestas: ['declarativo'] },
    { tipo: 'teoria', enunciado: '¿Qué anotación se usa en Kotlin para marcar una función como un componente visual de Compose?', respuestas: ['@composable'] },
    { tipo: 'teoria', enunciado: '¿Qué función de Compose se usa para recordar un estado que sobrevive a recomposiciones?', respuestas: ['remember'] },
  ],
    'Inteligencia Artificial': [
    { tipo: 'teoria', enunciado: '¿Cómo se llama la técnica de dar contexto e instrucciones a un modelo de lenguaje mediante texto para guiar su respuesta?', respuestas: ['prompting', 'prompt engineering', 'ingenieria de prompts'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama el fenómeno en el que un modelo de IA genera información falsa presentándola como cierta?', respuestas: ['alucinacion', 'alucinación'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama el conjunto de datos con el que se entrena un modelo de IA antes de ponerlo en uso?', respuestas: ['dataset', 'conjunto de entrenamiento', 'datos de entrenamiento'] },
  ],
}