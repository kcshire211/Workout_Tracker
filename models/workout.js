const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "What type of exercise?"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "What is the name of this exercise?"
                },
                duration: {
                    type: Number,
                    required: "How many minutes is this exercise?"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// workoutSchema.virtual("totalDuration").get(function() {
//     return this.exercise.reduce((total, exercise) => {
//         return total + exercise.duration;
//     }, 0);
// });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;