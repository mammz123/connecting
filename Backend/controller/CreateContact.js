const Contact = require('./contactSchema');

const CreateContact = async (req, res) => {
  try {
    const { name, email, contactNumber, message } = req.body;

    const contactDetails = await Contact.create({
      name, email, contactNumber, message
    });

    res.status(201).json(contactDetails);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ message: 'Failed to create contact' });
  }
};

module.exports = CreateContact;