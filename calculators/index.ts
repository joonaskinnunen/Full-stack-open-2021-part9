import express from "express";
import { calculateBmi } from "./bmiCalculator";

const app = express();

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get("/bmi", (req, res) => {
    const { query } = req;
    const { height, weight } = query;
  
    if (!height || !weight) {
      return res.status(400).json({ error: "parameters missing" });
    }
  
    const parsedHeight = Number(height);
    const parsedWeight = Number(weight);
  
    if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
      return res.status(400).json({ error: "malformatted parameters" });
    }
  
    const bmi = calculateBmi(parsedHeight, parsedWeight);
  
    return res.json({ weight, height, bmi });
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
