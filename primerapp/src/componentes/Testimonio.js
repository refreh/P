import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
       src={require(`../imagenes/${props.imagen}.jpg`)}
       alt={props.alt}  />
       <div className='contenedor-texto-testimonio'>
         <p className='nombre-testimonio' > <strong>{props.nombre}</strong></p>
     
         <p className='cargo-testimonio' >{props.cargo} en <strong>{props.empresa}</strong> </p>
        
         <p className='texto-testimonio' >{props.testimonio}</p>
         <audio controls>
          <source src={require(`../imagenes/${props.audio}`)} />
       
          </audio>
  

       </div>
    </div>

  );
}

export default Testimonio;