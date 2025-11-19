import { UserInfo } from "../../models";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
}

export const loginUser = async ({
  email,
  password,
}: LoginCredentials): Promise<UserInfo> => {
  if (!email || !password) {
    throw new Error("Email y contraseña son requeridos");
  }

  // Obtener usuarios registrados del localStorage
  const existingUsers = localStorage.getItem("registeredUsers");
  const users: UserInfo[] = existingUsers ? JSON.parse(existingUsers) : [];

  // Buscar el usuario por email
  const user = users.find((u: UserInfo) => u.email === email);

  if (!user) {
    throw new Error("Este email no está registrado. Por favor, regístrate primero.");
  }

  // Verificar que la contraseña coincida
  if (user.password !== password) {
    throw new Error("Contraseña incorrecta");
  }

  // Retornar el usuario si las credenciales son correctas
  return {
    email: user.email,
    password: user.password,
  };
};

export const registerUser = async ({
  email,
  password,
  confirmPassword,
}: RegisterCredentials): Promise<UserInfo> => {
  if (!email || !password || !confirmPassword) {
    throw new Error("Todos los campos son requeridos");
  }

  if (password !== confirmPassword) {
    throw new Error("Las contraseñas no coinciden");
  }

  if (password.length < 6) {
    throw new Error("La contraseña debe tener al menos 6 caracteres");
  }

  // Simular verificación de email existente (en producción esto sería una llamada al backend)
  const existingUsers = localStorage.getItem("registeredUsers");
  const users = existingUsers ? JSON.parse(existingUsers) : [];

  if (users.some((user: UserInfo) => user.email === email)) {
    throw new Error("Este email ya está registrado");
  }

  // Guardar usuario registrado
  users.push({ email, password });
  localStorage.setItem("registeredUsers", JSON.stringify(users));

  return {
    email,
    password,
  };
};
