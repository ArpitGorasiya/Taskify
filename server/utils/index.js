import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });
};

export default createJWT;
