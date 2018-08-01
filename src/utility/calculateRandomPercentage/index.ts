<<<<<<< HEAD
const calculateRandomPercentage = (min: number, max: number): number => {
=======
const calculateRandomPercentage = (min:number, max:number):number => {
>>>>>>> 65d0195... Added text skeleton
    const minBoundary = min < 0 ? 0 : min;
    const maxBoundary = max > 100 ? 100 : max;

    return Math.floor(Math.random() * (maxBoundary - minBoundary)) + minBoundary;
};

export default calculateRandomPercentage;
