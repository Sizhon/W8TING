import "./App.css";
import ProcessingTable from "./components/ProcessingTable";
import StatusBar from "./components/StatusBar";
import WaitingLine from "./components/WaitingLine";
import {useEffect, useState} from "react";
import {Youth} from "./Types.ts";

function App() {
    const [queue, setQueue] = useState<Youth[]>([]);
    const [waiting, setWaiting] = useState<Youth[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

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
      parsedData.data && setQueue(parsedData.data);
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
        setQueue={setQueue}
        waiting={waiting}
        setWaiting={setWaiting}
      />
      <section className="processing">
        <h1 className="text-3xl font-bold mb-4 tracking-wide">
          Office of Youth Employment and Opportunity
        </h1>
        <StatusBar />
        <ProcessingTable
          queue={queue}
          setQueue={setQueue}
          waiting={waiting}
          setWaiting={setWaiting}
        />
      </section>
    </main>
  );
}

export default App;
