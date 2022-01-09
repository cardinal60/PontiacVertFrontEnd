const express = require('express');
const cors = require('cors');
const { dbService } = require('./services/database.service');
const { ConsultationController } = require('./Controllers/consultations.controller');
const {ChaptersController} = require('./Controllers/chapters.controller');

const PORT = 5000;
const app = express();
const SIZE_LIMIT = '50mb';
const consultationController = new ConsultationController();
const chaptersController = new ChaptersController();

/**
 * Initialiser les différents middlewares et routes
 */

// afficher chaque nouvelle requête dans la console
app.use((request, response, next) => {
  // eslint-disable-next-line no-console
  console.log(`New HTTP request: ${request.method} ${request.url}`);
  next();
});

app.use(cors());

app.use(express.json({ limit: SIZE_LIMIT, extended: true }));
app.use(express.urlencoded({ limit: SIZE_LIMIT, extended: true }));

// Routing
app.use('/api/consultations', consultationController.router);
app.use('/api/chapters', chaptersController.router);

/**
 * Se produit lorsque le serveur commence à écouter sur le port.
 */
const server = app.listen(PORT, () => {
  dbService.connectToServer().then(() => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${PORT}.`);
    consultationController.ConsultationService.populateDb();
    chaptersController.ChaptersService.populateDb();
  });
});

module.exports = server;