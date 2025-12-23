import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // "Bearer THE_TOKEN".split(' ')
  // ["Bearer", "THE_TOKEN"][1]
  const token = req.headers.authorization?.split(' ')[1];

  if(!token) return res.json({ message: 'Token Missing' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(req)
    // console.log(decoded)
    req.user = decoded.userId;
    next();
  } catch {
    return res.json({ message: 'Invalid Token' })
  }
}

export default authMiddleware;