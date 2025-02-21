import { Schema, model, type Document } from 'mongoose';
// need to figure out date object.

interface ITask extends Document {
  title: string,
  question: string,
  verse: string
}

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  question: {
    type: String,
  },
  verse: {
    type: String,
  },
//   items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
});

const Task = model<ITask>('Task', taskSchema);

export { type ITask, taskSchema };

export default Task;