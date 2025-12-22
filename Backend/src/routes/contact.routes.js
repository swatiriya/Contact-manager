import Router from 'express'
import verifyJWT from '../middlewares/auth.middleware';
const contactRouterConfig = {
  addContact: '/addContact'
}

export const contactRouter = Router();

contactRouter.route(contactRouterConfig.addContact).post(verifyJWT,)



