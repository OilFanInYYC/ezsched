const express = require('express');
const routerView = express.Router();

const mainPageContoller = require('../controllers/main.ctrl');

routerView.get('/', mainPageContoller)