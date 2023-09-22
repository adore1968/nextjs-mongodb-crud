import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "This field is required"],
      unique: [true, "This field must be unique"],
    },
    description: {
      type: String,
      required: [true, "This field is required"],
      unique: [true, "This field must be unique"],
    },
  },
  {
    timestamps: true,
  }
);

const Task = models.Task || model("Task", taskSchema);
export default Task;
