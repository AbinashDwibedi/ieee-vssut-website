import {registerDomain} from "../controllers/model.controller.js"
import { Router } from "express";

const router = Router();

router.route("/register" ).post(registerDomain);
// router.route("/competitors").get(retriveCompetitorsData);
export default router

