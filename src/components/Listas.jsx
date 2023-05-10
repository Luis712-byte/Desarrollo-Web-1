import React from 'react'

const Listas = () => {
    const array=['Acción','Humor', 'Drama','Terror']
    const objetos=[
        {id:1,nombre:'Juana',apellido:'perez'},
        {id:2,nombre:'Maria',apellido:'Martinez'},
        {id:3,nombre:'Luisa',apellido:'Gomez'},
        {id:4,nombre:'Diana',apellido:'Hernandez'}
    ]
    const [lista,setLista]=React.useState(array)
    const [listaObj,setListaObj]=React.useState(objetos)
    const agregar=()=>{
        setListaObj([
            ...listaObj,
            {id:5,nombre:'Pedro',apellido:'Torres'}
        ])
    }
  return (
    <div>
        <h2>Listas</h2>
        <ol>
            {
                lista.map((elemento,index)=>(<li key={index}>{elemento}</li>))
            }
        </ol>
        <button onClick={agregar}>Agregar</button>
        <ul>
            {
                listaObj.map((elemento)=>(<li key={elemento.id}>{elemento.nombre} - {elemento.apellido}</li>))
            }
        </ul>
    </div>
  )
}

export default Listas