import prisma from "../db"
import { comparePassword, createJWT, hashPassword } from "../modules/auth"

export const newUser = async (req, res) => {
  const {username, password} = req.body
  const user = await prisma.user.create({
    data: {
      username,
      password: await hashPassword(password)
    }
  })
  
  const token = createJWT(user)
  res.json({token})
}

export const signin = async (req, res) => {\
  const {username, password} = req.body
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })
  
  if (!user) {
    return res.status(401).json({
      message: 'not authorized'
    })
  }
  
  const valid = await comparePassword(password, user.password)
  if (!valid) {
    return res.status(401).json({
      message: 'not authorized'
    })
  }
  
  const token = createJWT(user)
  res.json({token})
}