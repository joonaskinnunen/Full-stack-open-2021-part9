import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();
app.use(express.json());

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


  app.post("/exercises", (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = req.body;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dailyExercises = body.daily_exercises;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    let target = body.target;
  
    if (!target || !dailyExercises) {
      return res.status(400).json({ error: "parameters missing" });
    }
  
    target = Number(target);
  
    if (!Array.isArray(dailyExercises) || isNaN(target) || dailyExercises.some((hours) => isNaN(hours))) {
      return res.status(400).json({ error: "malformatted parameters" });
    }
  
    return res.json(calculateExercises(dailyExercises, target));
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
