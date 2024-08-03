import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";

export default function WaitingYouth() {
  return (
    <div className="card bg-base-100 w-96 shadow-xs card-container">
      <h2 className="card-title">26</h2>
      <strong>Casey Bennett</strong>
      <p>Onboarding</p>
      <div className="card-actions justify-end card-btns">
        <button className="btn btn-outline">
          <NextWeekOutlinedIcon />
        </button>
        <button className="btn">
          <RemoveCircleOutlineOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
