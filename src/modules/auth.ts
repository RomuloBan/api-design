import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash)
}

export const createJWT = (user) => {
  const token = jwt.sign({
      id: user.id,
      username: user.username
    },
    process.env.JWT_SECRET
  )
  return token
}

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization
  if (!bearer) {
    return res.status(401).json({
      message: 'not authorized'
    })
  }

  const [, token] = bearer.split(' ')
  if (!token) {
    return res.status(401).json({
      message: 'not valid token'
    })
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'not authorized user'
    })
  }
} 