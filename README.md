Lista de Usuarios - Aplicación de React

Esta es una aplicación de React que muestra un listado de usuarios con funcionalidades de filtrado, ordenamiento y paginación de resultados. Permite a los usuarios interactuar con la lista y realizar acciones como eliminar y restaurar elementos.
Funcionalidades

    Carga de datos desde un API externo.
    Filtrado de usuarios por país.
    Ordenamiento alfabetico por país .
    Eliminación de usuarios de la lista y restauración de elementos eliminados.
    Scroll infinito para cargar más resultados automáticamente.

Mejoras Realizadas

    Componentización: Se dividió la lógica y la interfaz de usuario en componentes más pequeños y reutilizables, como el botón personalizado y la lógica de scroll infinito.

    Optimización: Se implementó una lógica de paginación mediante scroll infinito para mejorar el rendimiento y reducir la carga inicial de datos.

    Reutilización de Funciones: Se crearon funciones de utilidad para el manejo del ordenamiento y filtrado de datos, lo que hace que el código sea más legible y fácil de mantener.

    Renderizado Condicional: Se utilizó renderizado condicional para mostrar mensajes de "Cargando..." y "No se encontraron resultados" según el estado actual de los datos.

    Scroll infinito: para que el usuario pueda ver el contenido de una manera optima sin que se le cargue todo a la vez.

    Codigo comentado .

pasos que se logro completar

    Carga de datos desde un API externo con 100 elementos. "esta fue una de la mejora que realice con el scroll infinito"
    Visualización de la data en formato de tabla, con campos como Foto, Nombre, Apellido y País.
    Botón para añadir color a la tabla, sombreando líneas pares con el color #112233 y líneas impares con el color #556677.
    Botón para ordenar alfabéticamente la tabla por país.
    Botón en cada línea de la tabla para eliminar usuarios individualmente.
    Botón para restaurar la tabla a su estado original y recuperar los registros borrados.
    Corrección de bugs y optimización del código.
    Botón para filtrar la data por país sin realizar un ordenamiento innecesario cada vez que se aplica un filtro.

paso no logrado
Ordena la data al clickear la columna header (titulo) de cada campo. "lo iba crear como un un custom hook con la logica del Botón para ordenar alfabéticamente la tabla por país"

Instrucciones para Ejecutar el Proyecto

    Clona el repositorio en tu máquina local.
    Asegúrate de tener Node.js y npm instalados en tu sistema.
    Abre una terminal en la carpeta raíz del proyecto.
    Ejecuta npm install para instalar las dependencias del proyecto.
    Ejecuta npm start para iniciar la aplicación en un servidor local.
    Abre tu navegador web y visita http://localhost:3000 para ver la aplicación en funcionamiento.

¡Listo! Ahora podrás explorar la lista de usuarios, realizar búsquedas, ordenar los datos y probar todas las funcionalidades implementadas.
