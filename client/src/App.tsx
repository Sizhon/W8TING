import "./App.css";
import YouthsTable from "./components/RightSide/YouthsTable.tsx";
import StatusBar from "./components/RightSide/StatusBar.tsx";
import WaitingLine from "./components/LeftSide/WaitingLine.tsx";
import { useEffect, useState } from "react";
import { Youth } from "./Types.ts";
import { sortQueue } from "../utils/utilities.ts";

function App() {
  const [queue, setQueue] = useState<Youth[]>([]);
  const [waiting, setWaiting] = useState<Youth[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [status, setStatus] = useState<string>("PROCESSING");

  const sortQueueAndSet = (queue: Youth[]) => {
    setQueue(() => sortQueue(queue));
  };

  useEffect(() => {
    // Create WebSocket connection.
    const socket = new WebSocket("ws://localhost:8000/");

    // Connection opened
    socket.addEventListener("open", (event) => {
      console.log("WebSocket is open now.");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      const parsedData = JSON.parse(event.data);
      console.log(parsedData);
      parsedData.data && sortQueueAndSet(parsedData.data);
      // Handle incoming messages and update state if necessary
    });

    // Handle connection close
    socket.addEventListener("close", (event) => {
      console.log("WebSocket is closed now.");
    });

    // Handle errors
    socket.addEventListener("error", (event) => {
      console.error("WebSocket error observed:", event);
    });

    // Set WebSocket instance to state
    setWs(socket);

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <main className="main-layout">
      <WaitingLine
        queue={queue}
        setQueue={sortQueueAndSet}
        waiting={waiting}
        setWaiting={setWaiting}
      />
      <section className="processing">
        <h1 className="text-3xl font-bold mb-4 tracking-wide">
          Office of Youth Employment and Opportunity
        </h1>
        <StatusBar setStatus={setStatus} />
        <YouthsTable queue={queue} status={status} />
      </section>
    </main>
  );
}

export default App;
