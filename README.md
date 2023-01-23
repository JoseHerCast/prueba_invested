
# Prueba Invested

Repositorio destinado a la prueba técnica para la empresa Invested

## Description

La prueba consistía en un sistema de créditos, el cual ya cuentaría con algunos clientes registrados, existía la opción de dar de alta a nuevos clientes con un monto de dinero solicitado. Algunos clientes podían tener más de 1 crédito y cada crédito se pagaba en 4 parcialidades, algunos clientes ya tenían su cuenta liquidada (todos los pagos hechos), otros solo algunos pagos y otros ningún pago realizado, también el sistema daba la opción de registrar un nuevo pago.

Era posible utilizar un mock server o la memoria del navegador para la consistencia de datos (no es necesario desarrollar el backend de la aplicación).

Asegúrate de tener instalado Node.js y npm en tu sistema.

Instala Vite de manera global ejecutando el siguiente comando en tu terminal:

```
npm install vite 
Navega a la carpeta del proyecto en tu sistema de archivos utilizando el comando cd.
```

Una vez dentro de la carpeta del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install
```
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```
npm run dev
```
Abre tu navegador web y dirígete a la dirección http://localhost:5173. Deberías ver tu proyecto ejecutándose en el navegador.

Para compilar el proyecto, ejecuta el siguiente comando:

```
npm run build
```
Una vez que la compilación haya terminado, se generará una carpeta llamada "dist" en la raíz del proyecto. Esta carpeta contiene los archivos necesarios para desplegar el proyecto en un servidor web.

Una vez compilado la versión de despliegue, podemos previsualizarla en el localhost con el siguiente comando:


```
npm run preview
```

Abre tu navegador web y dirígete a la dirección http://localhost:4173. Deberías ver tu proyecto ejecutándose en el navegador.

Para desplegar el proyecto, puedes usar una herramienta de despliegue automático como Heroku, Firebase, o GitHub Pages, o bien, puedes subir los archivos de la carpeta "dist" a tu servidor web de preferencia.

Para detener el servidor, simplemente presiona CTRL + C en tu terminal.

Ten en cuenta que es posible que algunos comandos o configuraciones varíen dependiendo de la configuración específica de tu proyecto.
