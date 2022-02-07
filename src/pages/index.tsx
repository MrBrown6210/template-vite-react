import { useState } from "react";
import { useTasks } from "../hooks/swr";

function IndexPage() {
  const [count, setCount] = useState(0);

  const { tasks, error } = useTasks(10);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <div>testing</div>
        {error && (
          <div>
            {error.code?.toString()}: {error.message}
          </div>
        )}
        {tasks &&
          tasks.map((t) => {
            return <div key={t.id}>{t.title}</div>;
          })}
      </header>
    </div>
  );
}

export default IndexPage;
