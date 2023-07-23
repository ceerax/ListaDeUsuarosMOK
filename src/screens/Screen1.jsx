import React, { useEffect, useState, useRef } from "react";
import { fetchData } from "../api/HttpsApi";
import "../styles/Screen1.css";
import Button from "../components/Button";
import { sortDataByCountry, filterDataByCountry } from "../utils/dataUtils";
import { deleteData, restoreData } from "../utils/deleteUtils";
import handleScrollLogic from "../utils/handleScrollLogic";

const PAGE_SIZE = 10;

const Screen1 = () => {
  // Estados para manejar los datos y el estado de carga
  const [dataApi, setDataApi] = useState({});
  const [loading, setLoading] = useState(true);
  const [isColored, setIsColored] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [deletedData, setDeletedData] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [originalData, setOriginalData] = useState([]);
  const [resultsCount, setResultsCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const tableContainerRef = useRef(null);

  useEffect(() => {
    // Función para obtener datos del API
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData(`/?page=1&results=${resultsCount}`);
        setDataApi(data);
        setOriginalData(data.results);
        setFilteredData(data.results);
        setLoading(false);
        setIsLoadingMore(false);
      } catch (error) {
        console.log("error en la petición ", error);
        setLoading(false);
        setIsLoadingMore(false);
      }
    };
    fetchDataFromApi();
  }, [resultsCount]);

  // Función para manejar el ordenamiento por país
  const handleSortByCountry = () => {
    const sortedData = sortDataByCountry(filteredData, isSorted);
    setFilteredData(sortedData);
    setIsSorted((prevIsSorted) => !prevIsSorted);
  };

  // Función para manejar el filtrado por país
  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter(value);

    const filtered = filterDataByCountry(originalData, value);
    setFilteredData(filtered);
    setIsFiltered(value.trim() !== "");
  };

  // Función para manejar el borrado de elementos
  const handleDelete = (index) => {
    const { filteredData: newFilteredData, deletedItem } = deleteData(
      dataApi.results,
      filteredData,
      index
    );
    setFilteredData(newFilteredData);
    setDeletedData((prevDeletedData) => [...prevDeletedData, ...deletedItem]);
  };

  // Función para restaurar la tabla a su estado original
  const handleRestore = () => {
    const { filteredData: restoredData, deletedData: emptyDeletedData } =
      restoreData(filteredData, deletedData);
    setFilteredData(restoredData);
    setDeletedData(emptyDeletedData);
    setIsFiltered(false);
    setFilter("");
  };

  useEffect(() => {
    // Utiliza la lógica de scroll separada
    const cleanupScrollListener = handleScrollLogic({
      isLoadingMore,
      setIsLoadingMore,
      resultsCount,
      setDataApi,
      setOriginalData,
      setFilteredData,
      setLoading,
      tableContainerRef,
    });

    return () => {
      cleanupScrollListener(); // Limpia el listener del scroll al desmontar el componente
    };
  }, [isLoadingMore, resultsCount]);

  return (
    <div>
      <div className="title">
        <h1 style={{ marginTop: 0 }}>Listado de usuarios</h1>
      </div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          <div className="button-container">
            <Button onClick={() => setIsColored(!isColored)}>
              {isColored ? "Quitar Color" : "Añadir Color"}
            </Button>
            <Button onClick={handleSortByCountry}>
              {isSorted ? "Desordenar" : "Ordenar por País"}
            </Button>
            <Button onClick={handleRestore}>Restaurar Tabla</Button>
          </div>
          <input
            type="text"
            placeholder="Filtrar por país"
            value={filter}
            onChange={handleFilter}
            style={{ marginBottom: "10px" }}
          />

          <div ref={tableContainerRef} className="table-container">
            <table className={isColored ? "colored-table" : ""}>
              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>País</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {isFiltered && filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={5}>No se encontraron resultados</td>
                  </tr>
                ) : (
                  filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.picture.thumbnail}
                          alt="Foto de perfil"
                        />
                      </td>
                      <td>{item.name.first}</td>
                      <td>{item.name.last}</td>
                      <td>{item.location.country}</td>
                      <td>
                        <Button
                          backgroundColor="#950505"
                          textColor="#ffffff"
                          children={"Eliminar"}
                          onClick={() => handleDelete(index)}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {isLoadingMore && <div>Cargando más resultados...</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Screen1;
