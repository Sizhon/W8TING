import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckIcon from "@mui/icons-material/Check";
import classes from "../styles/CurrentStaff.module.css";

interface CurrentStaffProps {
  staffName: string;
  setStaffName: (name: string) => void;
}

export default function CurrentStaff({staffName, setStaffName}: CurrentStaffProps) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setStaffName(event.target.value);
  }

  let currentStaff = <span> Staff: {staffName}</span>;
  let button = <EditOutlinedIcon />;

  if (isEditing) {
    currentStaff = (
      <input
        className={classes["edit-name"]}
        type="text"
        required
        value={staffName}
        onChange={onChangeName}
      />
    );
    button = <CheckIcon />;
  }

  return (
    <div className={classes["staff-container"]}>
      <h2 className="text-2xl font-bold mb-4 tracking-wide">{currentStaff}</h2>
      <button
        className={`${classes["thin-button"]} ${classes["edit-button"]}`}
        onClick={handleEdit}
      >
        {button}
      </button>
    </div>
  );
}
