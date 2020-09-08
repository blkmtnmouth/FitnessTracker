const router = require("express").Router();
const Workout = require("../models/workout.js"); 

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  
  router.put("/api/workouts/:id", ({ body }, res) => {
    Workout.collection.insertOne({day: new Date().setDate(new Date().getDate()), exercises: body}, {new: true})
      
    // *KNOWN ISSUE* //
    // AS it is written now you cannot save multiple exercises to the same workout. Each time a new exercise is created it overwrites the last. 
    // I'm not sure how to instert multiple exercises within one workout. I think something like this;  
    //.then(({_id}) => Workout.findOneAndUpdate({}, { $push: { exercises: _id} }, { new: true }))
    // The rest of the functionality seems to work fine. 

      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
          res.status(400).json(err);
        });
  });
  
  router.post("/api/workouts", ({ body }, res) => {    
    Workout.create(body)
      
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
          res.status(400).json(err);
        });
  });

module.exports = router; 
