import "../styles/Button.css";

// Creamos el componente Button como una función de React que acepta varias propiedades como argumentos
const Button = ({ onClick, children, backgroundColor, textColor }) => {
  // Definimos un objeto con los estilos del botón, utilizando los valores recibidos o valores por defecto
  const buttonStyles = {
    backgroundColor: backgroundColor || "#007bff", // Color de fondo, si no se proporciona se usa "#007bff" (azul)
    color: textColor || "#ffffff", // Color de texto, si no se proporciona se usa "#ffffff" (blanco)
  };

  // Retornamos el JSX del botón, utilizando la clase "button" del archivo de estilos y los estilos definidos
  return (
    <button className="button" onClick={onClick} style={buttonStyles}>
      {children}
      {/* El contenido dentro del componente Button se muestra aquí */}
    </button>
  );
};

// Exportamos el componente Button para que pueda ser utilizado en otros lugares del proyecto
export default Button;
