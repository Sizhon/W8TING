import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import classes from "../styles/WaitingLine.module.css";
import CurrentStaff from "./CurrentStaff";
import FilterTab from "./FilterTab";
import AddYouth from "./AddYouth";
import WaitingQueue from "./WaitingQueue";

export default function WaitingLine() {
  return (
    <div className={`${classes["waiting-sidebar"]} bg-base-300`}>
      <ul className="menu side-box">
        <section className={classes["waiting-header"]}>
          <CurrentStaff />
          <button className="btn btn-active">
            <RefreshOutlinedIcon />
          </button>
        </section>
        <FilterTab />
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
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <AddYouth />
            </form>
          </div>
        </dialog>
        <WaitingQueue />
      </ul>
      <p
        className={`text-xl font-bold mb-4 tracking-wide ${classes["waiting-count"]}`}
      >
        Waiting: 2
      </p>
    </div>
  );
}
