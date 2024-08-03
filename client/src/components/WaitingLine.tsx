import CurrentStaff from "./CurrentStaff";
import FilterTab from "./FilterTab";
import WaitingYouth from "./WaitingYouth";

export default function WaitingLine() {
  return (
    <div className="waiting-sidebar bg-base-300">
      <ul className="menu side-box">
        <CurrentStaff />
        <FilterTab />
        <button className="btn-active btn-neutral plus-button">+</button>
        <li>
          <WaitingYouth />
        </li>
        <li>
          <WaitingYouth />
        </li>
      </ul>
    </div>
  );
}
