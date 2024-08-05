import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

import { Youth } from "../Types";

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
        <button className="btn">
          <EditNoteOutlinedIcon />
        </button>
      </td>
    </tr>
  );
}
