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






}






















