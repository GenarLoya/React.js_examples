import jwt from "jsonwebtoken";

export const loginHandler = (req, res) => {
  const token = jwt.sign({ test: "test" }, "secret", {
    expiresIn: 60 * 60 * 24,
  });

  return res.json({
    token,
  });
};

export const profileHandler = (req, res) => {
  return res.json({
    profile: req.user,
    message: 'profile data'
  });
};
