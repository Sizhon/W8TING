import "./App.css";
import ProcessingTable from "./components/ProcessingTable";
import StatusBar from "./components/StatusBar";
import WaitingLine from "./components/WaitingLine";
import {useState} from "react";
import {Youth} from "./Types.ts";

function App() {
    const [queue, setQueue] = useState<Youth[]>([]);
    const [waiting, setWaiting] = useState<Youth[]>([]);

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
