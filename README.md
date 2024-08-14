# Aplicación de Serie Fibonacci

Esta aplicación permite generar una serie Fibonacci basada en una hora proporcionada por el usuario o utilizando la hora del servidor. Los resultados se envían por correo electrónico y se almacenan en el historial de la aplicación.

## Características

- Genera una serie Fibonacci basada en una hora proporcionada por el usuario o en la hora actual del servidor.
- Envía el resultado de la serie por correo electrónico.
- Almacena el historial de series generadas.
- Interfaz de usuario desarrollada con React y Material-UI.
- Backend utilizando AWS Lambda y API Gateway.

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - Material-UI
  - Axios

- **Backend:**
  - AWS Lambda
  - API Gateway
  - AWS SES (para el envío de correos electrónicos)

- **Base de Datos:**
  - (Si se utiliza alguna base de datos para el historial, especifícala aquí, como DynamoDB)

## Instalación

### Requisitos

- Node.js (versión 14.x o superior)
- npm o yarn
- AWS CLI configurado con credenciales adecuadas (si trabajas con la parte del backend)

### Configuración del Frontend

1. Clona el repositorio:
   ```bash
   git clone https://github.com/sniperwolf2313/fibonacci-app-front.git
   ```
 2. Navega al directorio del proyecto:  
```bash
   cd fibonacci-app-front
```
3. Instala las dependencias:
```bash
npm install
# o
yarn install
```

### Inicia el servidor de desarrollo:
```bash
npm start
# o
yarn start
```

### Interfaz de Usuario:

Ingresa una hora en el formato HH:MM
o selecciona la opción de usar la hora del servidor.
Haz clic en "Generar Fibonacci" para obtener la serie Fibonacci.
El resultado se enviará al correo electrónico configurado y se almacenará en el historial.
Historial:
Consulta el historial de series generadas para ver las series y los tiempos de generación anteriores.
