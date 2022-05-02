import { db }  from "./config/db.js";  //importa o arquivo db.js
import express from "express"; //importa o express
import usuarioRouter from "./routes/usuarioRouter.js";
import Usuario from "./models/Usuario.js";
const app = express(); //cria a aplicação
import bodyParser from "body-parser";

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')

//Rota

app.get("/", (req, res) => {
    res.render("index")
})


try {
    db.authenticate().then(()=>{
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use (express.json()); //permite que o express entenda o formato json

app.use('/', usuarioRouter) 

app.post("/msg", async (req, res) =>{
    console.log(req.body)
    const msg =  {
        nome:req.body.nome,
        mensagem:req.body.mensagem,
        email:req.body.email,
        
    }
    console.log(msg)
    const user = await new Usuario(msg).save();
    const mensagens = await Usuario.findAll();
    res.render("mensagem" ,{
        nome:user.nome,
        mensagem:user.mensagem,
        email:user.email,
        mensagens   
    })
})

app.get ("/msg", async (req,res)=>{
    const mensagens = await Usuario.findAll();
    res.render("mensagem" ,{
        nome:"",
        mensagem:"",
        email:"",
        mensagens
    })
})


app.listen(5000 , ()=>{  //define a porta de escuta
    console.log('Servidor Rodando na porta 5000');  //define a porta que o servidor vai rodar
}); 
