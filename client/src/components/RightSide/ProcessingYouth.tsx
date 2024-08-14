import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Youth } from "../../Types";
import EditYouth from "./EditYouth";

interface ProcessingYouthProps {
  youth: Youth;
}

export default function ProcessingYouth({ youth }: ProcessingYouthProps) {
  return (
    <tr>
      <th>{youth.assigned_number}</th>
      <td>{youth.name}</td>
      <td>{youth.staff}</td>
      <td>{youth.purpose}</td>
      <td>
        <button className="btn">
          <TaskAltOutlinedIcon />
        </button>
      </td>
      <td>
        <button
          onClick={() =>
            (
              document.getElementById("my_modal") as HTMLDialogElement
            )?.showModal()
          }
        >
          <EditNoteOutlinedIcon />
        </button>
        <dialog id="my_modal" className="modal">
          <div className="modal-box">
            <EditYouth youth={youth} />
          </div>
        </dialog>
      </td>
    </tr>
  );
}
