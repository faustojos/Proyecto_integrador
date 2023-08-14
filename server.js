const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Definir la información de las imágenes
const images = [
  {
    id: 1,
    title: 'Gallery 1',
    title1: 'sala',
    imageUrl: 'assets/img/gallery/gallery-1.jpg'
  },
  {
    id: 2,
    title: 'Gallery 2',
    title1: 'sala',
    imageUrl: 'assets/img/gallery/gallery-2.jpg'
  },
  {
    id: 3,
    title: 'Gallery 3',
    title1: 'sala',
    imageUrl: 'assets/img/gallery/gallery-3.jpg'
  },
  {
    id: 4,
    title: 'Gallery 4',
    title1: 'sala',
    imageUrl: 'assets/img/gallery/gallery-4.jpg'
  },
  // Agregar más imágenes aquí
];

app.use(express.static(__dirname)); // Servir archivos estáticos

// API para obtener información de imágenes
app.get('/api/gallery', (req, res) => {
  res.json(images);
});

app.get('/api/gallery/:id', (req, res) => {
  const imageId = parseInt(req.params.id);
  const image = images.find(img => img.id === imageId);
  if (image) {
    res.json(image);
  } else {
    res.status(404).json({ message: 'Imagen no encontrada' });
  }
});

app.put('/api/gallery/:id', express.json(), (req, res) => {
  const imageId = parseInt(req.params.id);
  const updatedImage = req.body;
  const index = images.findIndex(img => img.id === imageId);
  if (index !== -1) {
    images[index] = { ...images[index], ...updatedImage };
    res.json(images[index]);
  } else {
    res.status(404).json({ message: 'Imagen no encontrada' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
