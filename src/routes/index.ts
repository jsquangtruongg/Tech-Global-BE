import user from "./user";
import auth from "./Auth";
import role from "./role";
import course from "./course";
import postNew from "./postNew";
import cart from "./cart";
import payment from "./payment";
import interview from "./interview";
import study from "./study";
import analytics from "./analytics";
import botProduct from "./botProduct";
import botOrder from "./botOrder";
import psychology from "./psychology";
import myDiary from "./My-Diary";
import express from "express";

const initRoutes = (app: express.Express) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/role", role);
  app.use("/api/v1/course", course);
  app.use("/api/v1/post-new", postNew);
  app.use("/api/v1/cart", cart);
  app.use("/api/v1/payment", payment);
  app.use("/api/v1/interview", interview);
  app.use("/api/v1/study", study);
  app.use("/api/v1/analytics", analytics);
  app.use("/api/v1/bot-products", botProduct);
  app.use("/api/v1/bot-orders", botOrder);
  app.use("/api/v1/psychology", psychology);
  app.use("/api/v1/my-diary", myDiary);
};

export default initRoutes;
