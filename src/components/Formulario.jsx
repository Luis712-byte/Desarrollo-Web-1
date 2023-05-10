import React from "react";

const Formulario = () => {
  //hooks
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [lista, setLista] = React.useState([]);
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState(0);

  const registrarDato = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      alert("Ingrese Nombre");
      return;
    }
    if (!apellido.trim()) {
      alert("Ingrese Apellido");
      return;
    }
    //agregar nuevo usuario
    setLista([...lista, { nombre, apellido }]);
    //limpiar inputs
    e.target.reset();
    //limpiar los estados
    setNombre("");
    setApellido("");
  };
  const eliminarUsuario = (id) => {
    const listaFiltrada = lista.filter((elemento, index) => index !== id);
    setLista(listaFiltrada);
  };

  const editarUsuario = (id) => {
    setModoEdicion(true);
    setId(id);
    const usuario = lista[id];
    setNombre(usuario.nombre);
    setApellido(usuario.apellido);
  };

  const actualizarUsuario = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !apellido.trim()) {
      alert("Ingrese nombre y apellido");
      return;
    }
    const usuarioActualizado = { nombre, apellido };
    const listaActualizada = [...lista];
    listaActualizada.splice(id, 1, usuarioActualizado);
    setLista(listaActualizada);
    setModoEdicion(false);
    setId(0);
    setNombre("");
    setApellido("");
  };
  const limpiarInputs = () => {
    setNombre("");
    setApellido("");
  };

  return (
    <div className="container">
    <h2>Formulario de Registro</h2>
    <form onSubmit={modoEdicion ? actualizarUsuario : registrarDato}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Ingrese su Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido:</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          placeholder="Ingrese su Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {modoEdicion ? "Actualizar" : "Registrar"}
      </button>
      {modoEdicion && (
        <button
          onClick={() => {
            setModoEdicion(false);
            limpiarInputs();
          }}
          className="btn btn-secondary mx-2"
        >
          Cancelar
        </button>
      )}
    </form>
    <hr />
    <h2>Listado de usuarios registrados</h2>
    <ol>
      {lista.map((elemento, index) => (
        <li key={index}>
          {elemento.nombre} {elemento.apellido}
          <button
            onClick={() => editarUsuario(index)}
            className="btn btn-primary btn-sm mx-2"
          >
            Editar{" "}
          </button>
          <button
            onClick={() => eliminarUsuario(index)}
            className="btn btn-danger btn-sm"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ol>
  </div>
  
  );
};
export default Formulario;
