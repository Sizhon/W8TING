import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";

import { Youth } from "../Types";

interface WaitingYouthProps {
  youth: Youth;
}

export default function WaitingYouth({ youth }: WaitingYouthProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-xs card-container">
      <h2 className="card-title">{youth.assigned_number}</h2>
      <div className="youth-info">
        <strong>{youth.name}</strong>
        <p>{youth.purpose}</p>
      </div>
      <div className="card-actions justify-end card-btns">
        <button className="btn btn-outline">
          <NextWeekOutlinedIcon />
        </button>
        <button className="btn btn-outline">
          <RemoveCircleOutlineOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
