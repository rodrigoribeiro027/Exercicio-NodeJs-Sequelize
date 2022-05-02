import express from "express";
import { criarUsuario, deletarUsuario, pegarUsuario } from "../controllers/UsuarioController.js";


const router = express.Router();


router.post("/Usuario", criarUsuario);
router.delete("/deletarUsuario/:id", deletarUsuario);
router.get("/pegarUsuario/:id", pegarUsuario);


export default router;