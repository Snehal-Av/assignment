const projectModel = require("../Model/projectModel");

const projectForm = async (req, res) => {
  try {
    const newProject = new projectModel(req.body);

    const saveProject = await newProject.save();
    res.status(201).json(saveProject);
    console.log(`${saveProject} add successfully`);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Internal server Error", details: err.message });
  }
};

const getallProject = async (req, res) => {
  try {
    const getAllData = await projectModel.find();
    if (!getAllData) {
      res.status(404).json({ msg: "project data not found" });
      console.log(getAllData);
    }
    res.status(201).json(getAllData);
  } catch (error) {}
};

const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const status = req.params.status;
    const UpdProject = req.body;
    const updatedProject = await projectModel.findByIdAndUpdate(
      id,
      status,
      UpdProject,
      { new: true }
    );
    if (!updatedProject) {
      res.status(404).json({ message: "Project Not Found" });
    }
    res.status(201).json(updatedProject);
    console.log("Project Updeted Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server Error" });
  }
};

const proDepartment = async (req, res) => {
  try {
    const departments = ["STR", "FIN", "QLT", "MAN", "STO", "HR"];

    const projectSummary = await Promise.all(
      departments.map(async (department) => {
        const totalPro = await projectModel.countDocuments({ department });
        const closedPro = await projectModel.countDocuments({
          department,
          status: "Closed",
        });

        return {
          department,
          totalPro,
          closedPro,
        };
      })
    );

    res.json(projectSummary);
  } catch (error) {
    res.status(500).send("Error fetching project summary");
  }
};

const dashCards = async (req, res) => {
  try {
    const currentDate = new Date();
    const totalPro = await projectModel.countDocuments();
    const closedPro = await projectModel.countDocuments({ status: "Closed" });
    const runningPro = await projectModel.countDocuments({ status: "Running" });
    const closureDelayPro = await projectModel.countDocuments({
      status: "Running",
      endDate: { $lte: currentDate },
    });
    const cancelledPro = await projectModel.countDocuments({
      status: "Cancelled",
    });

    res.status(201).json({
      totalPro,
      closedPro,
      runningPro,
      closureDelayPro,
      cancelledPro,
    });
    console.log(totalPro, closedPro, runningPro, closureDelayPro, cancelledPro);
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({ message: "Error fetching dashboard stats" });
  }
};

module.exports = {
  projectForm,
  getallProject,
  updateProject,
  proDepartment,
  dashCards,
};
