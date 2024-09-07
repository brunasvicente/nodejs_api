import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import rotas from './rotas.js';

const servidor = express();
servidor.use( express.json() );
servidor.use(cors())

rotas(servidor);

const PORTA = process.env.PORTA;

servidor.listen(PORTA,
    () => console.log(`---> API subiu com sucesso na porta ${PORTA}!`));
    