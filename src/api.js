import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import rotas from './rotas';

const servidor = express();
servidor.use( express.json() );
servidor.use(cors())

//Rotas (Controllers) de todos os Endpoints
rotas(servidor);

const PORTA = process.env.PORTA;

servidor.listen(PORTA,
    () => console.log(`---> API subiu com sucesso na porta ${PORTA}!`));
    