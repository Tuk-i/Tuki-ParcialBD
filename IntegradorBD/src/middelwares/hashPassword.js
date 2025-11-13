const bcrypt = require('bcrypt');

const hashearPassword = async (password) => {
  const saltRounds = 20;
  return await bcrypt.hash(password, saltRounds);
};

const compararPassword = async (password, passwordHasheado) => {
  return await bcrypt.compare(password, passwordHasheado);
};

module.exports = {
  hashearPassword,
  compararPassword
};