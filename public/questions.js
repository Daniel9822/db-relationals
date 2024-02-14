export const questionsMock = [
  {
    id: 1,
    question: '¿Qué es una base de datos relacional y cuál es su estructura básica?',
    answers: [
      'Es una base de datos que organiza los datos en tablas relacionadas. La estructura básica incluye tablas, filas y columnas.',
      'Es una base de datos que organiza los datos en registros y campos.',
      'Es una base de datos que almacena los datos en archivos de texto plano.'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: '¿Cuál es la importancia de la integridad referencial en las bases de datos relacionales?',
    answers: [
      'Garantiza la consistencia de los datos al mantener relaciones válidas entre las tablas.',
      'Facilita la escalabilidad de la base de datos.',
      'Permite ejecutar consultas SQL de manera más eficiente.'
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: 'Cuáles son algunas técnicas comunes de optimización de consultas en bases de datos relacionales?',
    answers: [
      'Uso de índices, optimización de consultas y desnormalización.',
      'Uso de transacciones, replicación y normalización.',
      'Uso de claves foráneas, integridad referencial y vistas materializadas.'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: '¿Qué es el lenguaje SQL y cuáles son sus principales componentes?',
    answers: [
      'SQL es un lenguaje de programación para desarrollar aplicaciones web.',
      'SQL es un lenguaje de programación para crear aplicaciones móviles.',
      'SQL es un lenguaje de programación para gestionar bases de datos. Sus componentes son DDL, DML y DCL.'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: '¿Cuál es la diferencia entre DDL, DML y DCL en SQL?',
    answers: [
      'DDL se utiliza para definir la estructura de la base de datos, DML para manipular datos y DCL para controlar permisos de acceso.',
      'DDL se utiliza para manipular los datos, DML para definir la estructura y DCL para controlar permisos de acceso.',
      'DDL se utiliza para controlar permisos, DML para definir la estructura y DCL para manipular datos.'
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: '¿Por qué es importante la normalización en el diseño de bases de datos relacionales?',
    answers: [
      'Para evitar redundancia y garantizar la integridad de los datos.',
      'Para facilitar la escalabilidad de la base de datos.',
      'Para mejorar el rendimiento de las consultas SQL.'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: '¿Cómo se manejan las transacciones en las bases de datos relacionales?',
    answers: [
      'Mediante claves foráneas y vistas materializadas.',
      'Mediante sentencias SQL como BEGIN TRANSACTION, COMMIT y ROLLBACK.',
      'Mediante procedimientos almacenados y disparadores (triggers).'
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: '¿Qué ventajas ofrece la replicación en bases de datos relacionales?',
    answers: [
      'Mejora la disponibilidad y la redundancia de los datos.',
      'Facilita la escalabilidad de la base de datos.',
      'Simplifica las consultas SQL.'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: '¿Cuál es el papel de los índices en la optimización del rendimiento en bases de datos relacionales?',
    answers: [
      'Mejoran el rendimiento de las consultas al permitir un acceso más rápido a los datos.',
      'Facilitan la escalabilidad de la base de datos.',
      'Evitan la redundancia de datos en la base de datos.'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: '¿Qué factores pueden afectar negativamente el rendimiento de una consulta SQL y cómo se pueden mitigar?',
    answers: [
      'Falta de índices, consultas mal escritas y uso excesivo de funciones. Se pueden mitigar creando índices adecuados y optimizando consultas.',
      'Falta de claves primarias, duplicidad de datos y exceso de normalización. Se pueden mitigar mediante la normalización adecuada y el uso de claves primarias.',
      'Falta de transacciones, exceso de replicación y consultas no parametrizadas. Se pueden mitigar utilizando transacciones apropiadas y optimizando la replicación.'
    ],
    correctAnswer: 0
  }
];
