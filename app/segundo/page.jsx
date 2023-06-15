import React from 'react';
import About from '../components/About';

function BuscarM() {
  const juego = {
    nombre: 'Doom',
    imagen: '..public/image/mon.png', // Reemplaza 'ruta_de_la_imagen' con la ruta de la imagen real
    tiendas: [
      { nombre: 'Cdkeys', precio: '$10' },
      { nombre: 'Tk4g', precio: '$15' },
    ],
  };

  console.log("probando pag2");
  return (
    <div>
      <div
        className="linear-layout"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <div
          className="game-image"
          style={{
            width: '100%', // Ajusta el ancho de la imagen aquí
            marginBottom: '1rem',
          }}
        >
          <img
            src={juego.imagen}
            alt={juego.nombre}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        {juego.tiendas.map((tienda, index) => (
          <div
            className="item"
            key={index}
            style={{
              flex: '1',
              padding: '1rem',
              backgroundColor: 'black',
              border: '1px solid #ccc',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              marginBottom: '1rem',
              overflow: 'hidden',
              width: '20%', // Ajusta el ancho del cuadro aquí
              margin: '0 auto', // Centra el cuadro horizontalmente
            }}
          >
            <div
              className="item-header"
              style={{
                backgroundColor: 'black',
                color: '#fff',
                padding: '1rem',
                borderBottom: '1px solid #ccc',
                fontSize: '1.6rem', // Ajusta el tamaño de la fuente aquí
              }}
            >
              <div>{juego.nombre}</div>
              <div>{tienda.nombre}</div>
            </div>
            <div
              className="item-content"
              style={{
                padding: '1rem',
                backgroundColor: 'white',
                fontSize: '1.1rem', // Ajusta el tamaño de la fuente aquí
                textAlign: 'center', // Centraliza el texto
              }}
            >
              <div>{tienda.precio}</div>
            </div>
          </div>
        ))}
      </div>
      <About />
    </div>
  );
}

export default BuscarM;
