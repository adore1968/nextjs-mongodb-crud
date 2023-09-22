"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function NewTaskPage({ params }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = params;

  const getTask = async () => {
    try {
      const { status, data } = await axios(`/api/tasks/${id}`);
      if (status === 200) {
        setValue("title", data.title);
        setValue("description", data.description);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    if (id) {
      getTask();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const createTask = async (newTask) => {
    try {
      const { status, data } = await axios.post("/api/tasks", newTask, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (status === 200) {
        console.log(data);
        setError("");
        reset();
        router.refresh();
        router.push("/tasks");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const updateTask = async (newTask) => {
    try {
      const { status, data } = await axios.put(`/api/tasks/${id}`, newTask, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (status === 200) {
        console.log(data);
        setError("");
        reset();
        router.refresh();
        router.push("/tasks");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const onSubmit = handleSubmit((data) => {
    if (!id) createTask(data);
    else updateTask(data);
  });

  const deleteTask = async () => {
    try {
      const { status, data } = await axios.delete(`/api/tasks/${id}`);
      if (status === 200) {
        console.log(data);
        setError("");
        reset();
        router.refresh();
        router.push("/tasks");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const setButtonColors = () => {
    if (id) return "bg-sky-700 hover:bg-sky-600";
    return "bg-emerald-700 hover:bg-emerald-600";
  };

  return (
    <div className="flex justify-center">
      <div className="flex-auto max-w-2xl">
        <div className="flex items-center justify-between mb-2">
          <h2 className="sm:text-3xl text-2xl font-bold">
            {id ? "Update Task" : "Create Task"}
          </h2>
          {id && (
            <button
              type="button"
              onClick={deleteTask}
              className="bg-rose-700 hover:bg-rose-600 sm:text-xl inline-block px-4 py-2 text-lg text-white transition-colors"
            >
              Delete
            </button>
          )}
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 p-5 bg-gray-800 rounded"
        >
          {error && <p className="sm:text-xl text-rose-600 text-lg">{error}</p>}
          <label htmlFor="title" className="sm:text-xl text-xl font-medium">
            {errors.title && (
              <p className="sm:text-xl text-rose-600 mb-2 text-lg">
                {errors.title.message}
              </p>
            )}
            The title for the task
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="bg-gray-950 w-full px-4 py-2 mt-1 text-gray-200"
              {...register("title", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
          </label>

          <label
            htmlFor="description"
            className="sm:text-xl text-xl font-medium"
          >
            {errors.title && (
              <p className="sm:text-xl text-rose-600 mb-2 text-lg">
                {errors.title.message}
              </p>
            )}
            The description for the task
            <textarea
              id="description"
              rows="5"
              placeholder="Description"
              className="bg-gray-950 w-full px-4 py-2 mt-1 text-gray-200 resize-none"
              {...register("description", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            ></textarea>
          </label>
          <button
            type="submit"
            className={`sm:text-xl w-fit inline-block px-4 py-2 text-lg transition-colors ease-in ${setButtonColors()}`}
          >
            {id ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTaskPage;
