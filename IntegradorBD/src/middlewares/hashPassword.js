import bcrypt from 'bcrypt';

export const hashearPassword = async (password) => {
  const saltRounds = 20;
  return await bcrypt.hash(password, saltRounds);
};

export const compararPassword = async (password, passwordHasheado) => {
  return await bcrypt.compare(password, passwordHasheado);
};