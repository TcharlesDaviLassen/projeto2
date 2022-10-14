import express, {Response, Request} from'express';
import User from'../models/User';
import cors from 'cors'; //Ajuda na segurança 
import md5 from 'md5';

const app = express();

app.use(express.json());
app.use(cors());

class LoginsController {

    validate = async function authentication(req: any) {

        let authorization = req.headers.authorization + "";
        console.log("req.headers.authorization")
        console.log(authorization)

        authorization = authorization.replace("Basic", "");
        console.log("authorization")
        console.log(authorization)


        let ascii = Buffer.from(authorization, "base64").toString("ascii");
        let dados = ascii.split(":")

        console.log("Usando o authentication")
        console.log(authorization)

        console.log("DADOS")
        console.log(dados)

        console.log("ascii")
        console.log(ascii)

        let name = dados[0];
        let password = dados[1];
        password = md5(password)

        console.log("username, password");
        console.log(name, password);

        let logado = await User.localizaUsuarios(name, password);
        // console.log(logado.toJSON());
        return logado;

    }

}

export default new LoginsController();
