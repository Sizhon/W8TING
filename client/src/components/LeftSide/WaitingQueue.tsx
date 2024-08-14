import { Youth } from "../../Types";

import classes from "../../styles/WaitingQueue.module.css";

import WaitingYouth from "./WaitingYouth";

interface WaitingQueueProps {
  youthsWaiting: Youth[];
}

export default function WaitingQueue({ youthsWaiting }: WaitingQueueProps) {
  return (
    <ul className={classes.queue}>
      {youthsWaiting.map((youth) => (
        <li key={youth.id}>
          <WaitingYouth youth={youth} />
        </li>
      ))}
    </ul>
  );
}
