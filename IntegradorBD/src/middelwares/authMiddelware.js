const jwt = require('jsonwebtoken');

const verificarToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const usuarioActual = await Usuario.findById(decoded.id);
    if (usuarioActual.eliminado) return res.status(401).json({ error: 'Usuario no existe' });

    req.usuario = usuarioActual;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = verificarToken;

const protegerRutas = (...roles) => {
  return (req, res, next) => {
    if (!req.usuario || !roles.includes(req.usuario.rol)) {
      return res.status(403).json({ error: 'El rol asignado no tiene acceso a esta transaccion' });
    }
    next();
  };
};
module.exports = protegerRutas;