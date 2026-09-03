import type { Lang } from '../i18n/translations'

export interface Ejercicio {
  tipo: 'prediccion' | 'escritura' | 'teoria'
  enunciado: string
  codigo?: string
  respuestas: string[]
}

const ejerciciosEs: Record<string, Ejercicio[]> = {
  java: [
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'System.out.println(5 + 3);', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'int x = 10;\nif (x > 5) {\n  System.out.println("mayor");\n} else {\n  System.out.println("menor");\n}', respuestas: ['mayor'] },
    { tipo: 'escritura', enunciado: 'Declara un array de enteros llamado numeros con los valores 1, 2 y 3.', respuestas: ['int[] numeros = {1, 2, 3};', 'int[] numeros = {1,2,3};', 'int numeros[] = {1, 2, 3};'] },
  ],
  csharp: [
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'Console.WriteLine(10 % 3);', respuestas: ['1'] },
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'string nombre = "Ana";\nConsole.WriteLine($"Hola {nombre}");', respuestas: ['Hola Ana'] },
    { tipo: 'escritura', enunciado: 'Declara una variable de tipo string llamada mensaje con el valor "Hola mundo".', respuestas: ['string mensaje = "Hola mundo";', "string mensaje = 'Hola mundo';"] },
  ],
  python: [
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'print(5 + 3)', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'x = 10\nprint("par" if x % 2 == 0 else "impar")', respuestas: ['par'] },
    { tipo: 'escritura', enunciado: 'Escribe una lista con los números del 1 al 5 usando comprensión de listas.', respuestas: ['numeros = [x for x in range(1, 6)]', 'numeros = [i for i in range(1, 6)]', '[x for x in range(1, 6)]', '[i for i in range(1, 6)]'] },
  ],
  kotlin: [
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'println(5 + 3)', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: '¿Qué imprime este código?', codigo: 'val x = 10\nprintln(if (x > 5) "mayor" else "menor")', respuestas: ['mayor'] },
    { tipo: 'escritura', enunciado: 'Declara una variable inmutable llamada nombre con el valor "Miguel".', respuestas: ['val nombre = "Miguel"', "val nombre = 'Miguel'"] },
  ],
  mvvm: [
    { tipo: 'teoria', enunciado: '¿Qué capa de MVVM contiene la lógica de presentación, sin depender directamente de la vista?', respuestas: ['viewmodel', 'view model'] },
    { tipo: 'teoria', enunciado: '¿Qué capa de MVVM contiene los datos y las reglas de negocio?', respuestas: ['modelo', 'model'] },
    { tipo: 'teoria', enunciado: 'Completa: en MVVM, la Vista se comunica con el ViewModel mediante ______.', respuestas: ['bindings', 'data binding', 'binding'] },
  ],
  'async-logic': [
    { tipo: 'teoria', enunciado: '¿Qué palabra clave se usa en Kotlin para marcar una función como asíncrona?', respuestas: ['suspend'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama el objeto que representa un valor que estará disponible en el futuro (usado en JavaScript)?', respuestas: ['promise', 'promesa'] },
    { tipo: 'teoria', enunciado: '¿Qué le puede pasar a la interfaz de una app si ejecutas una tarea larga de forma síncrona en el hilo principal?', respuestas: ['se bloquea', 'bloqueo', 'se congela'] },
  ],
  firebase: [
    { tipo: 'teoria', enunciado: '¿Qué tipo de base de datos es Firestore, la base de datos principal de Firebase?', respuestas: ['nosql'] },
    { tipo: 'teoria', enunciado: '¿Qué servicio de Firebase usarías para gestionar el login de usuarios?', respuestas: ['authentication', 'auth'] },
    { tipo: 'teoria', enunciado: '¿Qué servicio de Firebase usarías para subir y guardar imágenes o archivos?', respuestas: ['storage'] },
  ],
  nosql: [
    { tipo: 'teoria', enunciado: '¿Verdadero o falso? Las bases de datos NoSQL no requieren un esquema fijo.', respuestas: ['verdadero'] },
    { tipo: 'teoria', enunciado: '¿Cuál es la unidad básica de almacenamiento en una base de datos NoSQL documental, en vez de una fila?', respuestas: ['documento'] },
    { tipo: 'teoria', enunciado: '¿En qué formato se suelen guardar los documentos en bases NoSQL como MongoDB o Firestore?', respuestas: ['json'] },
  ],
  json: [
    { tipo: 'prediccion', enunciado: '¿Qué tipo de dato tiene el valor de "edad" en este JSON?', codigo: '{\n  "nombre": "Miguel",\n  "edad": 21\n}', respuestas: ['numero', 'número'] },
    { tipo: 'teoria', enunciado: '¿Con qué símbolo se delimita un array en JSON?', respuestas: ['[]', 'corchetes'] },
    { tipo: 'escritura', enunciado: 'Escribe un objeto JSON con una clave "lenguaje" con el valor "Python".', respuestas: ['{"lenguaje": "python"}', '{"lenguaje":"python"}'] },
  ],
  git: [
    { tipo: 'teoria', enunciado: '¿Qué comando de Git guarda los cambios preparados en el historial local?', respuestas: ['git commit'] },
    { tipo: 'teoria', enunciado: '¿Qué comando sube los commits locales al repositorio remoto?', respuestas: ['git push'] },
    { tipo: 'teoria', enunciado: '¿Qué comando añade todos los archivos modificados al área de preparación (staging)?', respuestas: ['git add .', 'git add *'] },
  ],
  docker: [
    { tipo: 'teoria', enunciado: '¿Cómo se llama el archivo que define cómo construir una imagen de Docker?', respuestas: ['dockerfile'] },
    { tipo: 'teoria', enunciado: '¿Qué comando se usa para ejecutar un contenedor a partir de una imagen?', respuestas: ['docker run'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama una instancia en ejecución de una imagen Docker?', respuestas: ['contenedor', 'container'] },
  ],
  figma: [
    { tipo: 'teoria', enunciado: '¿Cómo se llama en Figma el elemento reutilizable que mantiene consistencia entre pantallas, como un botón reutilizado en varias vistas?', respuestas: ['componente'] },
    { tipo: 'teoria', enunciado: '¿Qué formato de archivo vectorial se puede exportar directamente desde Figma para iconos?', respuestas: ['svg'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama la funcionalidad de Figma que simula la navegación entre pantallas?', respuestas: ['prototipado', 'prototype', 'prototipo'] },
  ],
  poo: [
    { tipo: 'teoria', enunciado: '¿Cómo se llama el principio de POO que oculta los detalles internos de una clase y solo expone lo necesario?', respuestas: ['encapsulacion', 'encapsulación'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama el principio que permite que una clase herede atributos y comportamientos de otra?', respuestas: ['herencia'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama la capacidad de un mismo método de comportarse de forma distinta según el objeto que lo llama?', respuestas: ['polimorfismo'] },
  ],
  svg: [
    { tipo: 'teoria', enunciado: '¿SVG es un formato de gráficos vectorial o de mapa de bits (raster)?', respuestas: ['vectorial'] },
    { tipo: 'teoria', enunciado: '¿En qué lenguaje de marcado está basado el formato SVG, el mismo que estructura una página web?', respuestas: ['xml'] },
    { tipo: 'prediccion', enunciado: '¿Qué figura dibuja esta etiqueta SVG?', codigo: '<circle cx="50" cy="50" r="40" />', respuestas: ['circulo', 'círculo'] },
  ],
  databases: [
    { tipo: 'teoria', enunciado: '¿Cómo se llama el lenguaje estándar para consultar bases de datos relacionales?', respuestas: ['sql'] },
    { tipo: 'teoria', enunciado: '¿Qué tipo de relación existe cuando un usuario puede tener varios pedidos, pero cada pedido pertenece a un único usuario?', respuestas: ['uno a muchos', '1 a muchos', 'one to many'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama la columna que identifica de forma única cada fila de una tabla?', respuestas: ['clave primaria', 'primary key'] },
  ],
  'jetpack-compose': [
    { tipo: 'teoria', enunciado: '¿Jetpack Compose sigue un enfoque de UI declarativo o imperativo?', respuestas: ['declarativo'] },
    { tipo: 'teoria', enunciado: '¿Qué anotación se usa en Kotlin para marcar una función como un componente visual de Compose?', respuestas: ['@composable'] },
    { tipo: 'teoria', enunciado: '¿Qué función de Compose se usa para recordar un estado que sobrevive a recomposiciones?', respuestas: ['remember'] },
  ],
  ai: [
    { tipo: 'teoria', enunciado: '¿Cómo se llama la técnica de dar contexto e instrucciones a un modelo de lenguaje mediante texto para guiar su respuesta?', respuestas: ['prompting', 'prompt engineering', 'ingenieria de prompts'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama el fenómeno en el que un modelo de IA genera información falsa presentándola como cierta?', respuestas: ['alucinacion', 'alucinación'] },
    { tipo: 'teoria', enunciado: '¿Cómo se llama el conjunto de datos con el que se entrena un modelo de IA antes de ponerlo en uso?', respuestas: ['dataset', 'conjunto de entrenamiento', 'datos de entrenamiento'] },
  ],
}

const ejerciciosEn: Record<string, Ejercicio[]> = {
  java: [
    { tipo: 'prediccion', enunciado: 'What does this code print?', codigo: 'System.out.println(5 + 3);', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: 'What does this code print?', codigo: 'int x = 10;\nif (x > 5) {\n  System.out.println("greater");\n} else {\n  System.out.println("lower");\n}', respuestas: ['greater'] },
    { tipo: 'escritura', enunciado: 'Declare an int array called numbers with the values 1, 2 and 3.', respuestas: ['int[] numbers = {1, 2, 3};', 'int[] numbers = {1,2,3};', 'int numbers[] = {1, 2, 3};'] },
  ],
  csharp: [
    { tipo: 'prediccion', enunciado: 'What does this code print?', codigo: 'Console.WriteLine(10 % 3);', respuestas: ['1'] },
    { tipo: 'prediccion', enunciado: 'What does this code print?', codigo: 'string name = "Ana";\nConsole.WriteLine($"Hello {name}");', respuestas: ['Hello Ana'] },
    { tipo: 'escritura', enunciado: 'Declare a string variable called message with the value "Hello world".', respuestas: ['string message = "Hello world";', "string message = 'Hello world';"] },
  ],
  python: [
    { tipo: 'prediccion', enunciado: 'What does this code print?', codigo: 'print(5 + 3)', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: 'What does this code print?', codigo: 'x = 10\nprint("even" if x % 2 == 0 else "odd")', respuestas: ['even'] },
    { tipo: 'escritura', enunciado: 'Write a list with the numbers 1 to 5 using list comprehension.', respuestas: ['numbers = [x for x in range(1, 6)]', 'numbers = [i for i in range(1, 6)]', '[x for x in range(1, 6)]', '[i for i in range(1, 6)]'] },
  ],
  kotlin: [
    { tipo: 'prediccion', enunciado: 'What does this code print?', codigo: 'println(5 + 3)', respuestas: ['8'] },
    { tipo: 'prediccion', enunciado: 'What does this code print?', codigo: 'val x = 10\nprintln(if (x > 5) "greater" else "lower")', respuestas: ['greater'] },
    { tipo: 'escritura', enunciado: 'Declare an immutable variable called name with the value "Miguel".', respuestas: ['val name = "Miguel"', "val name = 'Miguel'"] },
  ],
  mvvm: [
    { tipo: 'teoria', enunciado: 'Which MVVM layer holds presentation logic, without depending directly on the view?', respuestas: ['viewmodel', 'view model'] },
    { tipo: 'teoria', enunciado: 'Which MVVM layer holds the data and business rules?', respuestas: ['model'] },
    { tipo: 'teoria', enunciado: 'Complete: In MVVM, the View communicates with the ViewModel through ______.', respuestas: ['bindings', 'data binding', 'binding'] },
  ],
  'async-logic': [
    { tipo: 'teoria', enunciado: 'What keyword is used in Kotlin to mark a function as asynchronous?', respuestas: ['suspend'] },
    { tipo: 'teoria', enunciado: 'What is the object called that represents a value that will be available in the future (used in JavaScript)?', respuestas: ['promise'] },
    { tipo: 'teoria', enunciado: 'What can happen to an app\'s UI if you run a long task synchronously on the main thread?', respuestas: ['it blocks', 'it freezes', 'blocking', 'freezing'] },
  ],
  firebase: [
    { tipo: 'teoria', enunciado: 'What type of database is Firestore, Firebase\'s main database?', respuestas: ['nosql'] },
    { tipo: 'teoria', enunciado: 'Which Firebase service would you use to manage user login?', respuestas: ['authentication', 'auth'] },
    { tipo: 'teoria', enunciado: 'Which Firebase service would you use to upload and store images or files?', respuestas: ['storage'] },
  ],
  nosql: [
    { tipo: 'teoria', enunciado: 'True or false? NoSQL databases don\'t require a fixed schema.', respuestas: ['true'] },
    { tipo: 'teoria', enunciado: 'What is the basic storage unit in a document-based NoSQL database, instead of a row?', respuestas: ['document'] },
    { tipo: 'teoria', enunciado: 'What format are documents usually stored in for NoSQL databases like MongoDB or Firestore?', respuestas: ['json'] },
  ],
  json: [
    { tipo: 'prediccion', enunciado: 'What data type is the value of "age" in this JSON?', codigo: '{\n  "name": "Miguel",\n  "age": 21\n}', respuestas: ['number'] },
    { tipo: 'teoria', enunciado: 'What symbol delimits an array in JSON?', respuestas: ['[]', 'brackets', 'square brackets'] },
    { tipo: 'escritura', enunciado: 'Write a JSON object with a key "language" with the value "Python".', respuestas: ['{"language": "python"}', '{"language":"python"}'] },
  ],
  git: [
    { tipo: 'teoria', enunciado: 'Which Git command saves staged changes to the local history?', respuestas: ['git commit'] },
    { tipo: 'teoria', enunciado: 'Which command uploads local commits to the remote repository?', respuestas: ['git push'] },
    { tipo: 'teoria', enunciado: 'Which command adds all modified files to the staging area?', respuestas: ['git add .', 'git add *'] },
  ],
  docker: [
    { tipo: 'teoria', enunciado: 'What is the file called that defines how to build a Docker image?', respuestas: ['dockerfile'] },
    { tipo: 'teoria', enunciado: 'What command is used to run a container from an image?', respuestas: ['docker run'] },
    { tipo: 'teoria', enunciado: 'What is a running instance of a Docker image called?', respuestas: ['container'] },
  ],
  figma: [
    { tipo: 'teoria', enunciado: 'What is the reusable element in Figma called that keeps consistency across screens, like a button reused in several views?', respuestas: ['component'] },
    { tipo: 'teoria', enunciado: 'What vector file format can be exported directly from Figma for icons?', respuestas: ['svg'] },
    { tipo: 'teoria', enunciado: 'What is Figma\'s feature called that simulates navigation between screens?', respuestas: ['prototyping', 'prototype'] },
  ],
  poo: [
    { tipo: 'teoria', enunciado: 'What is the OOP principle called that hides a class\'s internal details and exposes only what\'s necessary?', respuestas: ['encapsulation'] },
    { tipo: 'teoria', enunciado: 'What is the principle called that lets a class inherit attributes and behaviors from another?', respuestas: ['inheritance'] },
    { tipo: 'teoria', enunciado: 'What is the ability of the same method to behave differently depending on the calling object called?', respuestas: ['polymorphism'] },
  ],
  svg: [
    { tipo: 'teoria', enunciado: 'Is SVG a vector or raster (bitmap) graphics format?', respuestas: ['vector'] },
    { tipo: 'teoria', enunciado: 'What markup language is the SVG format based on, the same one that structures a web page?', respuestas: ['xml'] },
    { tipo: 'prediccion', enunciado: 'What shape does this SVG tag draw?', codigo: '<circle cx="50" cy="50" r="40" />', respuestas: ['circle'] },
  ],
  databases: [
    { tipo: 'teoria', enunciado: 'What is the standard language for querying relational databases called?', respuestas: ['sql'] },
    { tipo: 'teoria', enunciado: 'What type of relationship exists when a user can have several orders, but each order belongs to a single user?', respuestas: ['one to many'] },
    { tipo: 'teoria', enunciado: 'What is the column called that uniquely identifies each row in a table?', respuestas: ['primary key'] },
  ],
  'jetpack-compose': [
    { tipo: 'teoria', enunciado: 'Does Jetpack Compose follow a declarative or imperative UI approach?', respuestas: ['declarative'] },
    { tipo: 'teoria', enunciado: 'What annotation is used in Kotlin to mark a function as a Compose visual component?', respuestas: ['@composable'] },
    { tipo: 'teoria', enunciado: 'What Compose function is used to remember a state that survives recompositions?', respuestas: ['remember'] },
  ],
  ai: [
    { tipo: 'teoria', enunciado: 'What is the technique of giving context and instructions to a language model through text to guide its response called?', respuestas: ['prompting', 'prompt engineering'] },
    { tipo: 'teoria', enunciado: 'What is the phenomenon called where an AI model generates false information presented as true?', respuestas: ['hallucination'] },
    { tipo: 'teoria', enunciado: 'What is the set of data a model is trained on before being put into use called?', respuestas: ['dataset', 'training data'] },
  ],
}

export function getEjerciciosPorSkill(lang: Lang): Record<string, Ejercicio[]> {
  return lang === 'en' ? ejerciciosEn : ejerciciosEs
}