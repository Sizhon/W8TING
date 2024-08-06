import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";

import classes from "../styles/WaitingYouth.module.css"; // Ensure correct path

import { Youth } from "../Types";

interface WaitingYouthProps {
  youth: Youth;
}

export default function WaitingYouth({ youth }: WaitingYouthProps) {
  return (
    <div className={`${classes["card-container"]} card bg-base-100 shadow-xs`}>
      <h2 className="card-title">{youth.assigned_number}</h2>
      <div className={classes["youth-info"]}>
        <strong>{youth.name}</strong>
        <p>{youth.purpose}</p>
      </div>
      <div className={`${classes["card-btns"]} card-actions`}>
        <button className="btn btn-outline btn-sm">
          <NextWeekOutlinedIcon />
        </button>
        <button className="btn btn-outline btn-sm">
          <RemoveCircleOutlineOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
