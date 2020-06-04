# 🌇 Places

> Places es una aplicación de una sola página (Single page application) que nos muestras los lugares turísticos gastronómicos, recreativos, inicialmente de Venezuela 🇻🇪.

## Indice

* [Arquitectura del la aplicación](#archApp)
* [Iniciar la SPA](#initApp)
* [Ejecutar la SPA](#exeApp)

## <a name="archApp"></a> Arquitectura del la aplicación

La aplicación esta construida en **React** para el front-end, el cuál realiza consumo de microservicios API, desarrollados en **NodeJS** especificamente con **Express**, bajo una base de datos no relacional (noSql) gestionada en **MongoDB**.

### Librerias implementadas para complementar el desarrollo del front-end

* [Material-UI](https://material-ui.com/es/)
* [React Router Dom](https://reacttraining.com/react-router/)
* [Redux](https://es.redux.js.org/)
* [React Transition Group](https://reactcommunity.org/react-transition-group/)
* [Formik](https://jaredpalmer.com/formik/)
* [Emojione](https://www.joypixels.com/)

## <a name="initApp"></a> Iniciar la SPA
Una vez clonado el proyecto, debemos movernos a la carpeta raiz, ejecutando el siguiente comando:

```sh
$ cd places-spa
```

Luego necesitamos ejecutar el siguiente comando para instalar todas las librerias necesarias:

```sh
$ npm i
```

## <a name="exeApp"></a> Ejecutar nuestra app
Para arrancar la SPA ejecutamos el siguiente comando:

```sh
$ npm start
```