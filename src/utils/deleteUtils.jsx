// Función deleteData que elimina un elemento del arreglo filteredData según el índice proporcionado,
// y devuelve un objeto con las listas actualizadas de filteredData y los elementos eliminados
export const deleteData = (data, filteredData, index) => {
  // Obtiene el elemento que se va a eliminar del arreglo filteredData
  const deletedItem = filteredData[index];

  return {
    // Devuelve un nuevo arreglo de filteredData sin el elemento en el índice proporcionado
    filteredData: filteredData.filter((item, i) => i !== index),
    // Devuelve un nuevo arreglo de elementos eliminados, tomando en cuenta solo los elementos
    // que sean idénticos al elemento eliminado (deletedItem)
    deletedItem: [...data].filter((item) => item === deletedItem),
  };
};

// Función restoreData que restaura los elementos previamente eliminados y devuelve un objeto
// con las listas actualizadas de filteredData y deletedData
export const restoreData = (filteredData, deletedData) => {
  return {
    // Devuelve un nuevo arreglo de filteredData que contiene los elementos originales y los
    // elementos previamente eliminados
    filteredData: [...filteredData, ...deletedData],
    // Devuelve un nuevo arreglo vacio para deletedData
    deletedData: [],
  };
};
