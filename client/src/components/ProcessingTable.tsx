import { youthData } from "../ExampleData";
import ProcessingYouth from "./ProcessingYouth";
import { Youth } from "../Types";

import classes from "../styles/ProcessingTable.module.css";

interface ProcessingTableProps {
  queue: Youth[];
  setQueue: (queue: Youth[]) => void;
  waiting: Youth[];
  setWaiting: (waiting: Youth[]) => void;
}

export default function ProcessingTable({ queue, setQueue, waiting, setWaiting }: ProcessingTableProps) {
  const processing: Youth[] = queue.filter(
    (youth: Youth) => youth.status === "PROCESSING"
  );

  return (
    <div className={`overflow-x-auto ${classes["table-container"]}`}>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Staff</th>
            <th>Purpose</th>
            <th>Complete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {processing.map((youth) => (
            <ProcessingYouth key={youth.id} youth={youth} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
