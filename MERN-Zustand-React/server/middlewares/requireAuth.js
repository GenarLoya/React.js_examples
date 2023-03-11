import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Not authorized" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, "secret", (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Not valid token"});
    }

    console.log(user);

    req.user = user
    next();
  });
};

export default requireAuth;
