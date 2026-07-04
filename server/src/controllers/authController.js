const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const prisma = require('../config/prisma');

const registerSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

function generateToken(userId) {
  return jwt.sign({}, process.env.JWT_SECRET, {
    subject: userId,
    expiresIn: '7d',
  });
}

async function register(req, res) {
  try {
    const parsed = registerSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: 'Dados inválidos.',
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const { name, email, password } = parsed.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'Já existe um usuário com este email.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    const token = generateToken(user.id);

    return res.status(201).json({
      message: 'Usuário criado com sucesso.',
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Erro interno ao registrar usuário.',
    });
  }
}

async function login(req, res) {
  try {
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: 'Dados inválidos.',
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const { email, password } = parsed.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        message: 'Email ou senha inválidos.',
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({
        message: 'Email ou senha inválidos.',
      });
    }

    const token = generateToken(user.id);

    return res.status(200).json({
      message: 'Login realizado com sucesso.',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Erro interno ao realizar login.',
    });
  }
}

async function me(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: 'Usuário não encontrado.',
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Erro interno ao buscar usuário.',
    });
  }
}

module.exports = {
  register,
  login,
  me,
};