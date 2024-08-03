import ProcessingYouth from "./ProcessingYouth";

export default function ProcessingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Staff</th>
            <th>Purpose</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <ProcessingYouth />
        <ProcessingYouth />
      </table>
    </div>
  );
}
