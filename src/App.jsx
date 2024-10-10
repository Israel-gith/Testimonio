import React from 'react';
import Testimonio from './components/Testimonio';
import { Container, Box, List } from '@mui/material';

const App = () => {
  const testimonios = [
    {
      id: 1,
      nombre: 'Juan Pérez en Suecia',
      imagen: 'juan.jpg',
      alt: 'Juan sonriendo',
      testimonio: 'Desde que implementamos React, el rendimiento mejoró notablemente. Los hooks han simplificado mucho el manejo del estado, reduciendo la complejidad del código y permitiéndonos entregar proyectos con mayor rapidez y eficiencia.',
      titulo: 'Líder de Proyecto de Desarrollo'
    },
    {
      id: 2,
      nombre: 'María García en Japón',
      imagen: 'maria.jpg',
      alt: 'María relajada',
      testimonio: 'Con React, desarrollar interfaces es mucho más sencillo. El sistema de componentes ha permitido crear aplicaciones escalables y mantenibles en menos tiempo, lo que ha mejorado nuestro flujo de trabajo y la satisfacción del cliente.',
      titulo: 'Desarrolladora de Experiencia de Usuario (UX)'
    },
    {
      id: 3,
      nombre: 'Carlos López en Alemania',
      imagen: 'carlos.jpg',
      alt: 'Carlos centrado',
      testimonio: 'Incorporar React a nuestro proyecto fue una excelente decisión. Las actualizaciones en tiempo real mejoraron la experiencia del usuario y la estructura del código nos permitió mantener una base mucho más clara y organizada.',
      titulo: 'Arquitecto de Software'
    },
    {
      id: 4,
      nombre: 'Ana Ruiz en Singapur',
      imagen: 'ana.jpg',
      alt: 'Ana riéndose',
      testimonio: 'La comunidad de React me ha ayudado a aprender de forma rápida. Crear aplicaciones complejas es fácil y gratificante. React me ha permitido enfrentar nuevos desafíos con confianza y disfrutar más el proceso de desarrollo.',
      titulo: 'Desarrolladora Frontend Senior'
    }
  ];

  return (
   <>
        {testimonios.map((testimonio) => (
          <Testimonio
            key={testimonio.id}
            nombre={testimonio.nombre}
            imagen={testimonio.imagen}
            alt={testimonio.alt}
            testimonio={testimonio.testimonio}
            titulo={testimonio.titulo}
          />
        ))}
      </>
  );
};

export default App;