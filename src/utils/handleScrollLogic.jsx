// Importa la función fetchData desde el archivo HttpsApi.js
import { fetchData } from "../api/HttpsApi";

// Definición de la constante PAGE_SIZE con valor 10
const PAGE_SIZE = 10;

// Función handleScrollLogic que recibe un objeto con varias propiedades
const handleScrollLogic = ({
  isLoadingMore,
  setIsLoadingMore,
  resultsCount,
  setDataApi,
  setOriginalData,
  setFilteredData,
  setLoading,
  tableContainerRef,
}) => {
  // Función handleScroll para detectar el evento de scroll
  const handleScroll = () => {
    // Si no hay una referencia válida al contenedor de la tabla, sale de la función
    if (!tableContainerRef.current) return;

    // Obtiene el desplazamiento actual la altura visible y la altura total del contenedor de la tabla
    const { scrollTop, clientHeight, scrollHeight } = tableContainerRef.current;

    // Si el desplazamiento hasta el final es menor o igual a la altura visible más 1 píxel
    // y no se está cargando más datos se activa el estado de isLoadingMore
    if (scrollHeight - scrollTop <= clientHeight + 1 && !isLoadingMore) {
      setIsLoadingMore(true);
    }
  };

  // Agrega un event listener para el evento de scroll que llama a handleScroll
  document.addEventListener("scroll", handleScroll);

  // Función fetchDataOnScroll para obtener más datos cuando se activa isLoadingMore
  const fetchDataOnScroll = async () => {
    try {
      // Realiza una solicitud a la API para obtener más datos
      const data = await fetchData(
        `/?page=${Math.ceil(
          (resultsCount + 1) / PAGE_SIZE
        )}&results=${PAGE_SIZE}`
      );

      // Actualiza los datos de la API y las listas de datos original y filtrado
      setDataApi(data);
      setOriginalData((prevOriginalData) => [
        ...prevOriginalData,
        ...data.results,
      ]);
      setFilteredData((prevFilteredData) => [
        ...prevFilteredData,
        ...data.results,
      ]);

      // Finaliza la carga y desactiva isLoadingMore
      setLoading(false);
      setIsLoadingMore(false);
    } catch (error) {
      console.log("error en la petición ", error);
      setIsLoadingMore(false);
    }
  };

  // Si isLoadingMore es true, llama a fetchDataOnScroll para obtener más datos
  if (isLoadingMore) {
    fetchDataOnScroll();
  }

  // Devuelve una función que limpiará el event listener del scroll al desmontar el componente
  return () => {
    document.removeEventListener("scroll", handleScroll);
  };
};

// Exporta la función handleScrollLogic
export default handleScrollLogic;
