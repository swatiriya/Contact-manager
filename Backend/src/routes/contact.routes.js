import Router from 'express'
import verifyJWT from '../middlewares/auth.middleware.js';
import { addContact, fetchAllContacts } from '../controllers/contact.controller.js';
const contactRouterConfig = {
  addContact: '/addContact',
  fetchContacts: '/fetchContacts'
}

export const contactRouter = Router();

contactRouter.route(contactRouterConfig.addContact).post(verifyJWT, addContact)
contactRouter.route(contactRouterConfig.fetchContacts).get(verifyJWT, fetchAllContacts);



