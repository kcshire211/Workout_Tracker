const router = require("express").Router();
const Workout = require("../models/workout");

//gets current workout
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => res.json(err));
});

//creates new workout
router.post("/workouts", (req, res) => {
  Workout.create(req.body)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => res.json(err));
});

router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then((workoutData) => {
      console.log(workoutData);
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(res.json);
      res.json(err)
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workoutData) => {
      console.log(workoutData);
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(res.json);
      res.json(err)
    });
});

module.exports = router;






















