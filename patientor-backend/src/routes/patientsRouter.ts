import express from "express";
import patientsService from "../services/patients";

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(patientsService.getPatients());
});

export default router;