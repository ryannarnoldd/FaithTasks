// import { Task } from './../components/Task.js'
import { ALL_TASKS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Task from "../components/Task"; // Ensure Task is imported

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h1 className="text-center mb-4">Today's Task!</h1>

      {data?.tasks?.map((task: Task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default Home;