const { BeginnerWorkoutPlan, InterMediateWorkoutPlan, BWorkouts, IWorkouts } = require("./seedData");

const getWorkoutData = async (req, res) => {
  try {
    const B_DATA = BeginnerWorkoutPlan;
    res.send({
      success: true,
      status: 200,
      message: "Success",
      data: { bdata: B_DATA, idata: InterMediateWorkoutPlan },
      workouts: BWorkouts,
      iworkouts: IWorkouts
    });
  } catch (error) {
    res.send({ success: false, status: 404, message: "Fetch Failed" });
  }
};

module.exports = {
  getWorkoutData
};