const express = require('express');
const mongooseConfig = require('./configuracion/mongoose.config');
const jokesRoutes = require('./rutas/jokes.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar rutas
app.use('/api/chistes', jokesRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Conectar a MongoDB
mongooseConfig();
