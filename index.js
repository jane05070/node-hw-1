import { Command } from "commander";
import  contactsService from "./contacts.js";

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
      return console.table(allContacts);

    case 'get':
      const oneContact = await contactsService.getContactById(id);
      return console.table(oneContact);

    case 'add':
      const newContact = await contactsService.addContact(name, email, phone);
      return console.table(newContact);

    case 'remove':
      const removeContact = await contactsService.removeContact(id);
      return console.table(removeContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
