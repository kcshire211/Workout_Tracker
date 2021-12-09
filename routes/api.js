const db = require("../models");

module.exports = function(app) {
    
    //gets last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //posts new workout
    app.post("/api/workouts", async (req, res) => {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error occured while creating workout: ", err)
        }
    })

    //adds exercise to workout
    app.put("/api/workouts/:id", ({body, params}, res) => {
        const workoutId = params.id;
        let myExercices = [];

        db.Workout.find({_id: workoutId})
            .then(dbWorkout => {
                myExercices = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...myExercices, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc) {
                if(err){
                    console.log(err)
                }

            })
        } 
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};






















