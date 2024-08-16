import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";

import classes from "../../styles/WaitingYouth.module.css"; // Ensure correct path

import { Youth } from "../../Types";
import axios from "axios";

interface WaitingYouthProps {
  youth: Youth;
  staffName: string;
}

export default function WaitingYouth({ youth, staffName }: WaitingYouthProps) {
  const moveToProcessing = async () => {
    const resData = await axios.patch(
      `http://localhost:8000/api/v1/queues/onboarding/${youth.id}`,
      {
        ...youth,
        status: "PROCESSING",
        staff: staffName,
      }
    );
    console.log(resData);
  };

  return (
    <div className={`${classes["card-container"]} card bg-base-100 shadow-xs`}>
      <h2 className="card-title">{youth.assigned_number}</h2>
      <div className={classes["youth-info"]}>
        <strong>{youth.name}</strong>
        <p>{youth.purpose}</p>
      </div>
      <div className={`${classes["card-btns"]} card-actions`}>
        <button onClick={moveToProcessing} className="btn btn-outline btn-lg">
          <NextWeekOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
