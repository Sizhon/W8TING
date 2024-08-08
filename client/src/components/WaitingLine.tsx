import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import classes from "../styles/WaitingLine.module.css";
import CurrentStaff from "./CurrentStaff";
import FilterTab from "./FilterTab";
import AddYouth from "./AddYouth";
import WaitingQueue from "./WaitingQueue";
import { youthData } from "../ExampleData";
import { Youth } from "../Types";
import { useState } from "react";

export default function WaitingLine() {
  const [tab, setTab] = useState("Placement");

  function handleTabChange(tabName: string) {
    setTab(tabName);
  }

  const waiting: Youth[] = youthData.filter(
    (youth) => youth.status === "WAITING" && youth.purpose === tab
  );

  return (
    <div className={`${classes["waiting-sidebar"]} bg-base-300`}>
      <ul className="menu side-box">
        <section className={classes["waiting-header"]}>
          <CurrentStaff />
          <button className="btn btn-active">
            <RefreshOutlinedIcon />
          </button>
        </section>
        <FilterTab currentTab={tab} onTabChange={handleTabChange} />
        <button
          className={`btn btn-sm btn-outline ${classes["plus-button"]}`}
          onClick={() =>
            (
              document.getElementById("my_modal_3") as HTMLDialogElement
            )?.showModal()
          }
        >
          <AddCircleOutlineOutlinedIcon />
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <AddYouth />
          </div>
        </dialog>
        <WaitingQueue youthsWaiting={waiting} />
      </ul>
      <p
        className={`text-xl font-bold mb-4 tracking-wide ${classes["waiting-count"]}`}
      >
        Waiting: {waiting.length}
      </p>
    </div>
  );
}
