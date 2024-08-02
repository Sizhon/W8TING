import "./App.css";
import ProcessingTable from "./components/ProcessingTable";
import StatusBar from "./components/StatusBar";
import WaitingLine from "./components/WaitingLine";

function App() {
  return (
    <main className="main-layout">
      <WaitingLine />
      <section className="processing">
        <h1 className="text-3xl font-bold mb-4 tracking-wide">
          Office of Youth Employment and Opportunity
        </h1>
        <StatusBar />
        <ProcessingTable />
      </section>
    </main>
  );
}

export default App;
