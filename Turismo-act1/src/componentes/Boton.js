import React from 'react';
import '../estilos/Boton.css';

function Boton({texto, esBotonDeClic, manejarClic}){
return(
    <button 
        className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} 
        onClick={manejarClic}>
        {texto}
    </button>
    );
}
export default Boton;