import { youthData } from "../ExampleData";
import { Youth } from "../Types";
import WaitingYouth from "./WaitingYouth";

export default function Queue() {
  const waiting: Youth[] = youthData.filter(
    (youth) => youth.status === "WAITING"
  );
  return (
    <ul className="queue">
      {waiting.map((youth) => (
        <li key={youth.id}>
          <WaitingYouth youth={youth} />
        </li>
      ))}
    </ul>
  );
}
