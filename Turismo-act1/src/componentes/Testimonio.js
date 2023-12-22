import React from 'react';
import '../estilos/Testimonio.css';


function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='im' 
        src={require(`../imagenes/foto-${props.imagen}.png`)}
        alt='FotoMegan'/>
      <div className='contenedorTexto'>
        <p className='nombre'>{props.nombre} de {props.pais}</p>
        <p className='cargo'>{props.cargo} en {props.lugar}</p>
        <p className='texto'>"{props.testimonio}"</p>
      </div>
    </div>
  )
}

export default Testimonio;