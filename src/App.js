import React from 'react';
import { useState } from 'react';
window.document.title='Formulario';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [valoresEnviados, setValoresEnviados] = useState(false);


  const Nombre = (event) => {
    setNombre(event.target.value);
  };

  const Apellido = (event) => {
    setApellido(event.target.value);
  };

  const Email = (event) => {
    setEmail(event.target.value);
  };

  const Telefono = (event) => {
    setTelefono(event.target.value);
  };

  const Boton = (event) => {
    event.preventDefault();
    setValoresEnviados(true);
  };


  return (
    <div>
  
      {valoresEnviados ? (
        <div>
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Email: {email}</p>
          <p>Telefono: {telefono}</p>
        </div>
      ) : (
        <form onSubmit={Boton}>
          <h1>Formulario</h1>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={Nombre} />
          </label>
          <br />
          <label>
            Apellido:
            <input type="text" value={apellido} onChange={Apellido} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={Email} />
          </label>
          <br />
          <label>
            Telefono:
            <input type="tel" value={telefono} onChange={Telefono} />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default Formulario;