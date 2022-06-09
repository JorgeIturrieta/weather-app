# Aplicación de clima

Esta es una simple aplicación del clima. Muestra el clima actual y el pronóstico extendido por 5 días de la ciudad en la que el usuario se encuentra por medio de geolocalización. Ademas es posible buscar el clima de otras 5 ciudades previamente definidas.

## Tabla de contenidos

- [Ver proyecto en producción](#ver-proyecto-en-producción)
- [Ejecutar proyecto](#ejecutar-proyecto)
- [Resumen del proyecto](#resumen)
  - [El challenge](#el-challenge)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Linting y formating](#linting-y-formating)
  - [Unit testing](#unit-testing)
  - [End to End testing](#end-to-end-testing)
  - [Git hooks](#git-hooks)
  - [Integración continua](#integración-continua)
  - [Seguridad](#seguridad)
- [Recursos útiles](#recursos-útiles)
- [Autor](#autor)

## Ver proyecto en producción

**Para ver el proyecto actual visite este link : [Weather App](https://weather-app-xi-fawn.vercel.app/)**

## Ejecutar proyecto

### Crear variable de entorno .env.local

**_Nota: Debe reeplazar por su propia api-key. Para más información visite: https://openweathermap.org/api_**

```bash
API_KEY=SU-API-KEY
NEXT_PUBLIC_HOST=http://localhost:3000
```

### Ejecutar los siguientes comandos en orden

```bash
yarn install
```

```bash
yarn dev
```

### Abrir [http://localhost:3000](http://localhost:3000) en su navegador para ver los resultados.

## Resumen del proyecto

### El challenge

Este desafio consiste en mostrar el clima actual y el pronóstico extendido por 5 días de la ciudad en la que el usuario se encuentra por medio de geolocalización. Ademas es posible buscar el clima de otras 5 ciudades previamente definidas.

### Tecnologías Utilizadas

Para realizar este desafio se utilizó:

- **React 18**
- **Framework de React Next Js**
- **Sass**
- **Jest/React-testing-library**
- **Cypress**
- **Husky**
- **Eslint + prettier**

### Linting y formating

Para mantener el codigo consistente se ha utilizado herramientas como eslint para obtener las mejores prácticas en el código y prettier para estandarizar el código y mantenerlo más elegible al desarrollador.
Para más información vea los archivos .eslintrc.json y prettierrc respectivamente.

### Unit testing

Para ejecutar los test unitarios ejecute el comando:

```bash
yarn test
```

### End to End testing

```bash
yarn cypress
```

### Git hooks

Para asegurar la calidad de código se ha creado los siguientes hooks utilizando husky.

- **pre-commit** : Ejecuta el comando yarn lint antes de un commit asegurando que no exista ninguna error de "linting".
- **commit-msg** : Ejecuta el comando npx --no -- commitlint --edit "" esto permite que los mensajes escritos en los commits sigan un orden establecido. Se ha utilizado la convecion: [Angular commit message conventions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)
- **pre-push**: Ejecuta el comando yarn build que asegura que el proyecto ha sido buildeado correctamente y es seguro mandar código al servidor remoto.

### Integración continua.

Se ha generado una pequeño workflow en github actions que contiene en resumen las siguientes tareas principales.

- Instalar dependencias con yarn
- Ejecutar linter
- Ejecutar test unitarios
- Ejecutar build
- Ejecutar test e2e

Con cada pull request se ejecutará este workflow y asegurará (en una gran medida) que el código entrante no genera fallas o inconsistencias con el código en producción. Es necesario que todos los checks pasen para poder aprobar el pull request.

### Seguridad

Para ocultar nuestra api key se ha realizado una api-proxy con los siguientes endpoints:

- **/api/weather**
- **/api/forecast**

Estos endopoints poseen los mismos query params que la original pero la respuestas son reducidas y adaptadas a un conjunto más pequeño de datos.

Ejemplo:
https://weather-app-xi-fawn.vercel.app/api/weather?q=buenos%20aires

```json
{
  "temp": 284.59,
  "day": "jueves, 9 de junio",
  "hour": "10:41",
  "icon": "50d",
  "description": "mist",
  "temp_max": 285.34,
  "temp_min": 283.97,
  "feels_like": 284.22,
  "sunrise": "7:56",
  "sunset": "17:49",
  "city": "Buenos Aires",
  "country": "Argentina",
  "timezoneOffset": -10800
}
```

Se ha establecido cross origin: https://weather-app-xi-fawn.vercel.app/ para que la api solo sea accedida desde ese origen.

**_Nota:Si bien esto limita ataques desde un navegador no queda exenta la posibilidad de ataques desde aplicaciones como postman o por lineas de comandos._**

## Recursos útiles

Para realizar esta aplicación de clima se ha consultado a las siguientes fuentes:

- [Api weahter](https://openweathermap.org/api)
- [Geolocation en JavaScript](https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition)
- [Obtener fecha con unix time](https://www.epochconverter.com/)
- [Convertir a hora local con Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

## Autor

### [Iturrieta Jorge](https://www.linkedin.com/in/jorge-iturrieta/)
