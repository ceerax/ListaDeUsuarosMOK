// Función sortDataByCountry que ordena los datos por el campo "dob.age" (edad) de forma ascendente o descendente
// dependiendo del valor de la variable isSorted

export const sortDataByCountry = (data, isSorted) => {
  // Creamos una copia del arreglo original para evitar modificar el estado directamente
  const sortedData = [...data];

  // Si isSorted es true, ordenamos los datos por el campo "dob.age" (edad) de forma ascendente
  if (isSorted) {
    sortedData.sort((a, b) => a.dob.age - b.dob.age);
  } else {
    // Si isSorted es false, ordenamos los datos alfabéticamente por el campo "location.country" (país)
    sortedData.sort((a, b) =>
      a.location.country.localeCompare(b.location.country)
    );
  }

  // Devolvemos el arreglo ordenado
  return sortedData;
};

// Función filterDataByCountry que filtra los datos por el campo "location.country" (país) según el filtro especificado
export const filterDataByCountry = (data, filter) => {
  // Si el filtro está vacío, devolvemos todos los datos sin cambios
  if (filter.trim() === "") {
    return data;
  } else {
    // Si el filtro no está vacío, filtramos los datos por el campo "location.country" (país) ignorando mayúsculas y minúsculas
    return data.filter((item) =>
      item.location.country.toLowerCase().includes(filter.toLowerCase())
    );
  }
};
