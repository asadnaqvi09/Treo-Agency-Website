import express from 'express'

const Router = express.Router();

Router.post('/quote', quoteController);

export default Router