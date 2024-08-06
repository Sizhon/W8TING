import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import classes from "../styles/CurrentStaff.module.css";

export default function CurrentStaff() {
  return (
    <div className={classes["staff-container"]}>
      <h2 className="text-2xl font-bold mb-4 tracking-wide">Staff: Simon</h2>
      <button className={`${classes["thin-button"]} ${classes["edit-button"]}`}>
        <EditOutlinedIcon />
      </button>
    </div>
  );
}
