export class Story {

    difficulty: String;

    summary: String;

    averageEstimation: Number

    constructor(difficulty : String, summary : String) {
        
    }

    setAverageEstimation(averageEstimation : Number) {
        this.averageEstimation = averageEstimation;
    }

}