import Usuario from '../models/Usuario.js';

export const criarUsuario = async (req, res) => {
    try {
        const usuarioCriado = await Usuario.create({
            nome:req.body.nome,
            mensagem:req.body.mensagem,
            email:req.body.email
            });
        res.status(201).json(usuarioCriado);
    }catch (error){
        res.status(400).json({error:error});
    }
}

export const deletarUsuario = async (req,res)=> {
    try{
        const usuarioDeletado = await Usuario.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(usuarioDeletado);
    }
    catch(error){ 
        res.status(400).json({error:error});
    }
}

export const pegarUsuario = async (req,res)=>{
    try{
        const usuario = await Usuario.findAll ({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(usuario);
    }
    catch(error){
        res.status(400).json({error:error});
    }
}
        
