const Contact = require('../models/contacts-model');

/**
 * Metodo add_contacts. Añadimos el contacto recibido en la Peticion, si no es un error.
 * @param {*} req Peticion
 * @param {*} res Respuesta
 */
function add_contacts(req, res) {
  // Se declara el Contacto
  let contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    cellphone: req.body.cellphone,
    email: req.body.email,
    address: req.body.address
  });

  contact.save((error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        // message: error,
        message: `SERVER_ERROR: ${error}`,
        code: 0
      });
    }

    if (!result) {
      return res.status(400).json({
        error: true,
        message: `CLIENT_ERROR: ${error}`,
        code: 20
      });
    }

    return res.status(200).json({
      error: false,
      message: 'Success',
      data: result,
      code: 10
    });
  });
}

function read_contacts(req, res) {
  Contact.find().exec((error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        message: `SERVER_ERROR: ${error}`,
        code: 0
      });
    }

    return res.status(200).json({
      // error: false,
      // message: 'Success',
      // data: contacts,
      // code: 10
      result
    });
  });
}

function delete_contacts(req, res) {
  const contact_id = req.params.id;

  // Importante objeto {_id: contact_id}
  Contact.deleteOne({ _id: contact_id }, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        message: `SERVER_ERROR: ${error}`,
        code: 0
      });
    }

    if (result === null) {
      return res.status(400).json({
        error: true,
        message: 'NOT_FOUND',
        code: 30
      });
    }

    return res.status(200).json({
      error: false,
      message: 'Success',
      data: result,
      code: 10
    });
  });
}

function update_contacts(req, res) {
  const contact_id = req.params.id;
  const data = req.body;

  Contact.findByIdAndUpdate(contact_id, data, { new: true }, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        message: `SERVER_ERROR: ${error}`,
        code: 0
      });
    }

    if (!result) {
      return res.status(400).json({
        error: true,
        message: 'NOT_FOUND',
        code: 30
      });
    }

    return res.status(200).json({
      error: false,
      message: 'Success',
      data: result,
      code: 10
    });
  });
}

module.exports = {
  read_contacts,
  add_contacts,
  delete_contacts,
  update_contacts
};