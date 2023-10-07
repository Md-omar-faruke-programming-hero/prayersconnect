import { TaskProvider } from "@/context/TaskContext";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main>
      <TaskProvider>
        <div className="flex md:flex-row sm:flex-col justify-center rounded-lg p-8 space-x-4 ">
          <TaskList status="todo" />
          <TaskList status="in-progress" />
          <TaskList status="done" />
        </div>
      </TaskProvider>
    </main>
  );
}
