import CurrentStaff from "./CurrentStaff";
import FilterTab from "./FilterTab";
import WaitingYouth from "./WaitingYouth";

export default function WaitingLine() {
  return (
    <div className="waiting-sidebar bg-base-300">
      <ul className="menu side-box">
        <CurrentStaff />
        <button className="btn-active btn-neutral plus-button">+</button>
        <FilterTab />
        <li>
          <WaitingYouth />
        </li>
        <li>
          <a>Enabled item</a>
        </li>
      </ul>
    </div>
  );
}
