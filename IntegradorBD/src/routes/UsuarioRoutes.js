import express from "express";
import {
  listarUsuarios,
  obtenerUsuario,
  registrarUsuario,
  loginUsuario,
  eliminarUsuario,
  actualizarPerfil,
  actualizarPassword
} from "../controllers/UsuarioController.js";

import verificarToken from "../middelwares/authMiddelware.js";
import protegerRutas from "../middelwares/protegerRutas.js";

const router = express.Router();


router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);

router.get("/perfil", verificarToken, (req, res) => {
  res.status(200).json({ success: true, data: req.usuario });
});

router.patch("/perfil", verificarToken, actualizarPerfil);
router.patch("/password", verificarToken, actualizarPassword);


router.get("/", verificarToken, protegerRutas("administrador"), listarUsuarios);
router.get("/:id", verificarToken, protegerRutas("administrador"), obtenerUsuario);
router.delete("/:id", verificarToken, protegerRutas("administrador"), eliminarUsuario);

export default router;