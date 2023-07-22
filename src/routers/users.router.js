import { Router } from "express";
import passport from "passport";

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/loginError",
    successRedirect: "/products",
  })
);

router.post(
  "/register",
  passport.authenticate("register", {
    failureRedirect: "/registerError",
    successRedirect: "/registerOk",
  })
);

router.get("/logout", (req, res) => {
  req.session.destroy(error => {
    if (error) {
      console.log(error.message);
      res.json({ message: error });
    } else {
      res.redirect("/");
    }
  });
});

router.get(
  "/registerGitHub",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get("/github", passport.authenticate("github"), (req, res) => {
  res.redirect("/products");
});

export default router;
