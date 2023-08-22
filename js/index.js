// Obtener Datos de una API
const obtenerDatosButton = document.querySelector("#obtenerDatos");

const getElements = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error");
      }
      return respuesta.json();
    })
    .then((info) => {
      // Mostrar los primeros tres elementos del array
      console.log(info.slice(0, 3));
    })
    .catch((error) => {
      console.error("Fatal error:", error);
    });
};

obtenerDatosButton.addEventListener("click", () => {
  getElements();
});
