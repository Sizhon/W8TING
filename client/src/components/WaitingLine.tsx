import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import CurrentStaff from "./CurrentStaff";
import FilterTab from "./FilterTab";
import WaitingYouth from "./WaitingYouth";

export default function WaitingLine() {
  return (
    <div className="waiting-sidebar bg-base-300">
      <ul className="menu side-box">
        <CurrentStaff />
        <FilterTab />
        <button className="btn-active btn-neutral plus-button">
          <AddCircleOutlineOutlinedIcon />
        </button>
        <li>
          <WaitingYouth />
        </li>
        <li>
          <WaitingYouth />
        </li>
      </ul>
      <p className="text-xl font-bold mb-4 tracking-wide waiting-count">
        Waiting: 2
      </p>
    </div>
  );
}
