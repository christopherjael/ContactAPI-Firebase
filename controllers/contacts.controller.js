const db = require('../db/firebaseConfig')

const getContactsController = async(req, res) => {
    const contactsSnapshot = await db.collection('contacts').get()
    const contactList = contactsSnapshot.docs.map(doc => ({
        name: doc.data().name,
        lastname: doc.data().lastName,
        phone: doc.data().phone,
        email: doc.data().email
    }))

    res.status(200).json(
        {result:contactList }
    )
}

const createContactsController = async(req, res) => {
    const {name, lastName, email, phone} = req.body
    await db.collection('contacts').add({
        name,
        lastName,
        email,
        phone
    })

    res.status(201).json(
        {
            status: 201,
            message: 'Contact Created'
        }
    )
}

module.exports = {
    getContactsController,
    createContactsController
}