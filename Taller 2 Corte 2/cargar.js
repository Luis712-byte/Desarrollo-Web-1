var tabla = [
  { nombre: "pedro", apellido: "gomez", direccion: "calle 8" },
  { nombre: "Juancho", apellido: "perez", direccion: "calle 10" },
  { nombre: "Maria", apellido: "gonzalez", direccion: "calle 7" },
];

let cuerpotabla = document.getElementById("tablausuario");
let i = 1;
function listar() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let listado = "";
      for (let i = 0; i < data.length; i++) {
        listado +=
          '<tr><th scope="row">' +
          (i + 1) +
          "</td><td>" +
          data[i].id +
          "</td><td>" +
          data[i].nombre +
          "</td><td>" +
          data[i].apellido +
          "</td><td>" +
          data[i].direccion +
          "</td><td>" +
          data[i].telefono +
          "</td><td>" +
          data[i].CorreoElectronico +
          "</td><td>" +
          data[i].ciudad +
          "</td><td>" +
          data[i].pais +
          "</td></tr>";
      }
      cuerpotabla.innerHTML = listado;
    })
    .catch((error) => console.error(error));
}
function buscarEnTabla() {
  // Obtener el valor buscado desde el campo de entrada
  const valorBuscado = document.getElementById("Validar").value;

  // Obtener una referencia a la tabla
  const tabla = document.getElementById("tabla");

  // Recorrer las filas de la tabla
  for (let i = 0; i < tabla.rows.length; i++) {
    // Obtener una referencia a la celda de la segunda columna
    const celda = tabla.rows[i].cells[1];

    // Obtener el valor de la celda y comprobar si coincide con el valor buscado
    const valor = celda.textContent.trim().toLowerCase();
    if (valor === valorBuscado.trim().toLowerCase()) {
      // El valor buscado se ha encontrado, mostrar un mensaje de alerta
      alert("El valor buscado se ha encontrado en la fila " + i);
      return; // Terminar la búsqueda
    }
  }

  // El valor buscado no se ha encontrado
  alert("El valor buscado no se ha encontrado en la tabla.");
}

function ValidarID() {
  const filaEncontrada = buscarEnTabla("ID");
  if (filaEncontrada) {
    // El valor buscado se ha encontrado, hacer algo con la fila correspondiente
    alert("ID Existe");
  } else {
    // El valor buscado no se ha encontrado
    alert("ID no existe");
  }
}
function nuevo() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let id = document.getElementById("ID").value;
      let nombre = document.getElementById("nombre").value;
      let apellido = document.getElementById("apellido").value;
      let direccion = document.getElementById("direccion").value;
      let telefono = document.getElementById("Telefono").value;
      let CorreoElectronico = document.getElementById("Correo").value;
      let ciudad = document.getElementById("Ciudad").value;
      let pais = document.getElementById("Pais").value;

      if (!id) {
        alert("Ingrese ID");
        return;
      }
      if (!nombre) {
        alert("Ingrese Nombre");
        return;
      }
      if (!apellido) {
        alert("Ingrese Apellido");
        return;
      }
      if (!direccion) {
        alert("Ingrese Direccion");
        return;
      }
      if (!telefono) {
        alert("Ingrese Telefono");
        return;
      }
      if (!CorreoElectronico) {
        alert("Ingrese Correo");
        return;
      }
      if (!ciudad) {
        alert("Ingrese Ciudad");
        return;
      }
      if (!pais) {
        alert("Ingrese Pais");
        return;
      }

      let i = 0;
      cuerpotabla.innerHTML +=
        '<tr><th scope="row">' +
        (i + 1) +
        "</th><td>" +
        id +
        "</td><td>" +
        nombre +
        "</td><td>" +
        apellido +
        "</td><td>" +
        direccion +
        "</td><td>" +
        telefono +
        "</td><td>" +
        CorreoElectronico +
        "</td><td>" +
        ciudad +
        "</td><td>" +
        pais +
        "</td></tr>";
      i += 1;
      let nuevo = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        Correo: CorreoElectronico,
        ciudad: ciudad,
        pais: pais,
      };
      data.push(nuevo);
      document.getElementById("nombre").value = "";
      document.getElementById("apellido").value = "";
      document.getElementById("direccion").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("Correo").value = "";
      document.getElementById("ciudad").value = "";
      document.getElementById("pais").value = "";
    })
    .catch((error) => console.error(error));
}
