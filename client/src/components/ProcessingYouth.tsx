import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

export default function ProcessingYouth() {
  return (
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>ur mom</td>
        <td>Signing I-9</td>
        <td>
          <button className="btn">
            <TaskAltOutlinedIcon />
          </button>
        </td>
        <td>
          <button>
            <EditNoteOutlinedIcon />
          </button>
        </td>
      </tr>
    </tbody>
  );
}
