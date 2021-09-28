# cliente-servidor

Este laboratorio fue realizado con fines academicos.
con el fin de comprender el uso e implementacion de clientes pesados por medio de modulos en java Script. 


## Comenzando 🚀

A continuación se presentarán series de instrucciones para que se pueda tener un funcionamiento en maquina local del proyecto


### Pre-requisitos 📋

Para el correcto funcionamiento en un ambiente de desarrollo se deberán tener instaladas las siguientes tecnologías:  
* [Git](https://git-scm.com/) - Software de control de versiones
* [Java 8](https://www.java.com/es/download/ie_manual.jsp) - Entorno de desarrollo
* [Gradle](https://gradle.org/) - Manejador de dependencias


### Instalación 🔧

1. **Clonar el proyecto**
    ```
    https://github.com/JCPosso/ARSW-Lab5
    ```
2. **Compilar el proyecto**
    ```
    gradle javaCompile
    ```
3. **Ejecutar la aplicación**  
    * Para entornos Windows
        ```
        java -cp "target/classes;target/dependency/*" edu.eci.arsw.blueprintsapi.BlueprintsAPIApplication
        ``` 
    * Para entornos Unix
        ```
        java $JAVA_OPTS -cp target/classes:target/dependency/* edu.eci.arsw.blueprintsapi.BlueprintsAPIApplication
        ```
4. **Servicio Web**
Para observar la pagina web se debera
    ```
    localhost:8080
    ```
    Esto redireccionará al archivo index.html del proyecto

## Modificacion de modulo de consulta.

Para este proyecto el archivo App.js hace uso de un modulo para pedir los datos
uno de estos es apimock.js que tiene los datos quemados en el codigo y apiclient.js que
consulta al servicio API REST para pedir los datos.

para cambiar cambiar de donde se consultaran los datos basta modificar una linea en app.js
y cambiar el modulo al que se le asignara el espacio api, cambiando entre apiclient y apimock.

```var api = apiclient;```

    

## Ejecutando las pruebas ⚙️

Para la ejecución de las pruebas
```
gradle test
```

## Arquitectura
Se cuenta con un API REST hecho en spring y un cliente pesado hecho en js.


## Construido con 🛠️

* [Gradle](https://gradle.org/) - Manejador de dependencias
* [JUnit](https://junit.org/junit5/) - Herramienta para pruebas unitarias en Java



## Autores ✒️

* **Johan Damian Garrido**

* **Juaan Camilo Posso**

## Licencia 📄

Este proyecto está bajo la Licencia GNU General Public License mire el archivo [LICENSE.md](LICENSE.md) para detalles
