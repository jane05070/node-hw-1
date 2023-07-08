const fs = require("fs/promises");
const path = require("path");
const contactsPath = require("./db/contacts.json");


const listContacts = async() =>{
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);

}

const getContactById = (contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

const removeContact = (contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

const addContact = (name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. 
}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}


