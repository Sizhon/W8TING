import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

import CurrentStaff from "./CurrentStaff";
import FilterTab from "./FilterTab";
import AddYouth from "./AddYouth";
import Queue from "./Queue";

export default function WaitingLine() {
  return (
    <div className="waiting-sidebar bg-base-300">
      <ul className="menu side-box">
        <section className="waiting-header">
          <CurrentStaff />
          <button className="btn btn-active ">
            <RefreshOutlinedIcon />
          </button>
        </section>
        <FilterTab />
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-sm btn-outline plus-button"
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
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <AddYouth />
            </form>
          </div>
        </dialog>
        <Queue />
      </ul>
      <p className="text-xl font-bold mb-4 tracking-wide waiting-count">
        Waiting: 2
      </p>
    </div>
  );
}
