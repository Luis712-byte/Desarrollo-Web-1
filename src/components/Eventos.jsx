import React from 'react'

const Eventos = () => {
    const click=()=>{console.log('Hiciste Click.')}
  return (
    <div>
        <h2>Eventos</h2>
        <button onClick={click}>Haz Click.</button>
    </div>
  )
}

export default Eventos