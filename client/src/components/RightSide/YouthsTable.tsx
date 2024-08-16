import YouthInTable from "./YouthInTable";
import { Youth } from "../../Types";

import classes from "../../styles/ProcessingTable.module.css";

interface YouthsTableProps {
  queue: Youth[];
  status: string;
}

export default function YouthsTable({ queue, status }: YouthsTableProps) {
  const processing: Youth[] =
    status === "ALL"
      ? queue
      : queue.filter((youth: Youth) => youth.status === status);

  return (
    <div className={`overflow-x-auto ${classes["table-container"]}`}>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Staff</th>
            <th>Purpose</th>
            {status === "PROCESSING" && <th>Complete</th>}
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {processing.map((youth) => (
            <YouthInTable key={youth.id} youth={youth} status={status} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
