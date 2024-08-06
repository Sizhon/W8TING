import { youthData } from "../ExampleData";
import { Youth } from "../Types";

import classes from "../styles/WaitingQueue.module.css";

import WaitingYouth from "./WaitingYouth";

export default function WaitingQueue() {
  const waiting: Youth[] = youthData.filter(
    (youth) => youth.status === "WAITING"
  );
  return (
    <ul className={classes.queue}>
      {waiting.map((youth) => (
        <li key={youth.id}>
          <WaitingYouth youth={youth} />
        </li>
      ))}
    </ul>
  );
}
