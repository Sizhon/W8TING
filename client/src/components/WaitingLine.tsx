import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import classes from "../styles/WaitingLine.module.css";
import CurrentStaff from "./CurrentStaff";
import FilterTab from "./FilterTab";
import AddYouth from "./AddYouth";
import WaitingQueue from "./WaitingQueue";
//import { youthData } from "../ExampleData";
import {Youth} from "../Types";
import {useEffect, useState} from "react";
import axios from "axios";

interface WaitingLineProps {
  queue: Youth[];
  setQueue: (queue: Youth[]) => void;
  waiting: Youth[];
  setWaiting: (waiting: Youth[]) => void;
}

export default function WaitingLine({ queue, setQueue, waiting, setWaiting }: WaitingLineProps) {
  const [tab, setTab] = useState("Placement");
  const [staffName, setStaffName] = useState("Unknown");


  function handleTabChange(tabName: string) {
    setTab(tabName);
  }

  useEffect(() => {
    const updatedWaitingQueue = queue.filter(
      (youth: Youth) => youth.status === "WAITING" && youth.purpose === tab
    )
    setWaiting(updatedWaitingQueue);
  }, [tab, queue]);

  const updateQueue = async () => {
    const tableRes = await axios.get("http://localhost:8000/api/v1/queues/onboarding");
    const array = tableRes.data.data;
    setQueue(array);
  }

  return (
    <div className={`${classes["waiting-sidebar"]} bg-base-300`}>
      <ul className="menu side-box">
        <section className={classes["waiting-header"]}>
          <CurrentStaff
            staffName={staffName}
            setStaffName={setStaffName}
          />
          <button onClick={updateQueue} className="btn btn-active">
            <RefreshOutlinedIcon/>
          </button>
        </section>
        <FilterTab currentTab={tab} onTabChange={handleTabChange}/>
        <button
          className={`btn btn-sm btn-outline ${classes["plus-button"]}`}
          onClick={() =>
            (
              document.getElementById("my_modal_3") as HTMLDialogElement
            )?.showModal()
          }
        >
          <AddCircleOutlineOutlinedIcon/>
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <AddYouth/>
          </div>
        </dialog>
        <WaitingQueue
          youthsWaiting={waiting}
          staffName={staffName}
        />
      </ul>
      <p
        className={`text-xl font-bold mb-4 tracking-wide ${classes["waiting-count"]}`}
      >
        Waiting: {waiting.length}
      </p>
    </div>
  );
}
