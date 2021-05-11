
const parseExerCalcArguments = (args: Array<string>) => {
    if (args.length < 4) throw new Error('Not enough arguments');
    let hours: number[] = []
    for (let i = 3; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            throw new Error('Provided values were not all numbers!');
        } else {
            hours.push(Number(args[i]))
        }
    }
    return {
        target: Number(args[2]),
        hours: hours
    }
}

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

try {
    const { target, hours } = parseExerCalcArguments(process.argv)
    console.log(calculateExercises(hours, target))
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message)
}