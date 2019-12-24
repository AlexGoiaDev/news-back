const
    express = require('express'),
    app = express(),
    PORT = 3333,
    cors = require('cors'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./config.json'),
    /* Controlloers */
    newsController = require('./controllers/newsController');

app.use(cors({ origin: '*' }));
app.use(compression());
app.use(bodyParser.json({ limit: '10mb', extended: true }));

/* ENDPOINTS */
app.use(newsController);

/* CONEXIÓN CON LA BASE DE DATOS */
mongoose.connect(`mongodb+srv://${config.username}:${config.password}@${config.host}/${config.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(
    () => {
        console.log(`¡Conectado a la base de datos! ${config.host}`);
        console.log(`** Conexión para hacer pruebas y tests **`);
    }
).catch((err) => {
    console.error(`ERROR MONGODB: ${err}`);
});

app.listen(PORT, () => {
    console.log(`API RUNNING ON PORT ${PORT}`);
});


