import { User } from "../models/user.model.js";
import { eventBus } from "../utils/event.js";
import jwt from "jsonwebtoken";

export class UserService {
  #generateToken(userId) {
    return jwt.sign(
      { id: userId },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
  }

  async register(userData) {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) throw new Error("El usuario ya existe");

    const user = new User(userData);
    await user.save();

    eventBus.emit('user_registered', {
      id: user._id,
      name: user.name,
      email: user.email
    });

    const token = this.#generateToken(user._id);
    const userObject = user.toObject();
    delete userObject.password;

    return { user: userObject, token };
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Credenciales inválidas");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Credenciales inválidas");

    const token = this.#generateToken(user._id);

    const userObject = user.toObject();
    delete userObject.password;

    return { user: userObject, token };
  }
}
