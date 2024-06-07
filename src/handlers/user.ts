import prisma from "../db"
import { createJWT, hashPassword } from "../modules/auth"

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