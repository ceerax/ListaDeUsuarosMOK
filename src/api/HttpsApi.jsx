const BASE_URL = "https://randomuser.me/api"; // Puedes definir la URL base aquí

export const fetchData = async (endpoint) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Error en la petición");
  }
};
