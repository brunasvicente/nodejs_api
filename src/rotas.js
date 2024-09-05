import express from 'express';

import calculadoraController from './controller/calculadoraController.js';
import lojaController from './controller/lojaController.js';
import mensagemController from './controller/mensagemController.js';
import operacoesController from './controller/operacoesController.js';
import usuarioController from './controller/usuarioController.js';

export default function rotas(servidor) {
    servidor.use(calculadoraController);
    servidor.use(lojaController);
    servidor.use(mensagemController);
    servidor.use(operacoesController);
    servidor.use(usuarioController);

    servidor.use('/storage/perfil', express.static('./storage/perfil'))
    servidor.use('/storage/albuns', express.static('./storage/albuns'))
}
