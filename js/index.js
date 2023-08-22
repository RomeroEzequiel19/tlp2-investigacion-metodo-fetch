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

// Enviar Datos al Servidor

const enviarDatosButton = document.getElementById("enviarDatos");

const postEnviarDatos = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const information = {
    title: "Ejemplo de titulo del Elemento",
    body: "Ejemplo del cuerpo del elemento",
  };

  // Configurar la solicitud
  const opciones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(information),
  };

  fetch(url, opciones)
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

enviarDatosButton.addEventListener("click", () => {
  postEnviarDatos();
});

// 3- Descargar una Imagen

const imagenElemento = document.getElementById("imagenElemento");
const div = document.getElementById("divImg");

const descargarImagen = async (url) => {
  await fetch(url, {
    method: "GET",
  })
    .then((response) => response.blob())
    .then((blob) => {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      div.innerHTML = "";
      div.appendChild(img);
    })
    .catch((error) => {
      console.error("Error al descargar la imagen:", error);
    });
};

imagenElemento.addEventListener("click", () => {
  const urlImg =
    "https://cors-anywhere.herokuapp.com/https://via.placeholder.com/150";
  descargarImagen(urlImg);
});
