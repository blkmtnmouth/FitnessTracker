const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const exerciseSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weights: Number,
    reps: Number,
    sets: Number
})

const workoutSchema = new Schema({
    day: Number, 
    exercises: [exerciseSchema]
});

workoutSchema.virtual("totalDuration").get(function(){
    return exercisesSchema.duration; 
}); 

const Workout = mongoose.model("Workout", workoutSchema); 

module.exports = Workout; 