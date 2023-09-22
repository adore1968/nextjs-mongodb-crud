import Link from "next/link";

function TaskCard({ task }) {
  return (
    <Link
      href={`/update-task/${task._id}`}
      className="hover:bg-gray-800 p-5 transition-colors ease-in bg-gray-700 rounded cursor-pointer"
    >
      <h3 className="sm:text-2xl text-xl font-medium">{task.title}</h3>
      <p className="sm:text-xl my-1 text-lg text-gray-200">
        {task.description}
      </p>
      <span className="sm:text-xl text-lg text-gray-200">
        Created At: {new Date(task.createdAt).toLocaleDateString()}
      </span>
    </Link>
  );
}

export default TaskCard;
