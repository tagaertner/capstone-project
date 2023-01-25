// @desc Get task
// @route GET /api/tasks
// @access Private

const getTasks = (req, res) => {
  res.status(200).json({ message: "Get tasks" });
};

// @desc set task
// @route post /api/tasks
// @access Private
const setTask = (req, res) => {
  res.status(200).json({ message: "Set task" });
};

// @desc put task
// @route put /api/tasks/:id
// @access Private
const updateTasks = (req, res) => {
  res.status(200).json({ message: `Update task ${req.params.id}` });
};

// @desc delete task
// @route delete /api/tasks/:id
// @access Private
const deleteTasks = (req, res) => {
  res.status(200).json({ message: "Delete tasks" });
};

module.exports = { getTasks, setTask, updateTasks, deleteTasks };
