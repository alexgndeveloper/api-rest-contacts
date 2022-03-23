const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts-controller');

// Ruta para Obtener los Contactos
router.get('/read-contacts', contactsController.read_contacts);
// Ruta para añadir Contacto
router.post('/add-contacts', contactsController.add_contacts);
// Ruta para borrar Contacto
router.delete('/del-contacts/:id', contactsController.delete_contacts);
// Ruta para modificar Contacto
router.put('/upd-contacts/:id', contactsController.update_contacts);

// Exportamos Router
module.exports = router;