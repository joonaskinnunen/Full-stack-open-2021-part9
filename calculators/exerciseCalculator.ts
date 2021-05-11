const calculateExercises = (hours: Array<number>, target: number): returnObj => {
    let trainingDays = 0
    let trainingHours = 0
    hours.map(x => x > 0 && trainingDays++)
    hours.map(x => trainingHours += x)
    const average = trainingHours / hours.length
    let rating, ratingDescription;

    if (average > target * 0.9) {
        rating = 3
        ratingDescription = "Excellent!"
    } else if (average > target * 0.6) {
        rating = 2
        ratingDescription = "not too bad but could be better"
    } else {
        rating = 1
        ratingDescription = "you should work harder"
    }
    const obj = {
        periodLength: hours.length,
        trainingDays: trainingDays,
        success: trainingHours >= target * hours.length,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    }

    return obj
}

interface returnObj {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))