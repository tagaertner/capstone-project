const express = require("express");
const router = express.Router();
const { getTasks, setTask, updateTasks, deleteTasks } = require("../controllers/taskController");

router.route("/").get(getTasks).post(setTask);
router.route("/:id").put(updateTasks).delete(deleteTasks);

module.exports = router;
