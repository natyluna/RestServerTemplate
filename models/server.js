const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userRouterPath = '/api/users';

        //Middlewares
        this.middlewares();
        //Rutas de  mi app
        this.routes();
    }


    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
       
    }

    routes(){
        this.app.use(this.userRouterPath,require('../routes/user'));

    }
    listem(){
        this.app.listen(this.port, () => console.log(`Servidor corriendo en http://localhost:${this.port}`))
    }
}

module.exports = Server;