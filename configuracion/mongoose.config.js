const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/chistes', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('Conectado a MongoDB');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Error al conectar a MongoDB:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Desconectado de MongoDB');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Conexión a MongoDB cerrada por aplicación');
            process.exit(0);
        });
    });
};
