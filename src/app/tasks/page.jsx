import TaskCard from "@/components/TaskCard";
import connectDB from "@/database/connection";
import Task from "@/database/models/Task";

const getTasks = async () => {
  try {
    await connectDB();
    const result = await Task.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div className="container mx-auto">
      <div className="sm:grid-cols-2 grid grid-cols-1 gap-2.5">
        {tasks?.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
