import * as express from "express";
import * as controllers from "../controllers/app";

const router = express.Router();

router.post("/init", controllers.init);

export default router;
