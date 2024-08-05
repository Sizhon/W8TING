import { youthData } from "../ExampleData";
import ProcessingYouth from "./ProcessingYouth";
import { Youth } from "../Types";

export default function ProcessingTable() {
  const processing: Youth[] = youthData.filter(
    (youth: Youth) => youth.status === "PROCESSING"
  );

  return (
    <div className="overflow-x-auto table-container">
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
