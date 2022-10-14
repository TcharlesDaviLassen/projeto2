import {Router} from 'express';
const routerLogin = Router();

import cors from 'cors'; //Ajuda na segurança 
import loginController from '../controllers/LoginController';

routerLogin.use(cors());


routerLogin.get("/auth", async function(req, res) {
    console.log("Usando o auth")
    res.json(await loginController.validate(req))
})

routerLogin.get("/verify", async function(req, res) {

    console.log("Usando o verify")
    let usuario = await  loginController.validate(req)
    res.json(usuario)
})

// router.post('/', loginController);
// // router.post('/create', loginController.create);


export default routerLogin;
