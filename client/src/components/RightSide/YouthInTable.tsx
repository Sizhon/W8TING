import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Youth } from "../../Types";
import EditYouth from "./EditYouth";
import { useState } from "react";
import axios from "axios";

interface YouthInTableProps {
  youth: Youth;
  status: string;
}

export default function YouthInTable({ youth, status }: YouthInTableProps) {
  const [selectedYouth, setSelectedYouth] = useState<Youth | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openEditModal = (youth: Youth) => {
    setSelectedYouth(youth);
    setModalOpen(true);
  };

  const closeEditModal = () => {
    setModalOpen(false);
  };

  const updateYouthInfo = async (updatedYouth: Youth) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/v1/queues/onboarding/${updatedYouth.id}`,
        updatedYouth
      );
      // Optionally update the local state or re-fetch data
    } catch (error) {
      console.error("Error updating youth:", error);
    }
  };

  const processedYouth = async (youth: Youth) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/v1/queues/onboarding/${youth.id}`,
        { ...youth, status: "PROCESSED" }
      );
      // Optionally update the local state or re-fetch data
    } catch (error) {
      console.error("Error processing youth:", error);
    }
  };

  const handleSave = () => {
    if (selectedYouth) {
      updateYouthInfo(selectedYouth);
      closeEditModal();
    }
  };

  const youthInfoHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSelectedYouth((prev) => (prev ? { ...prev, [name]: value } : null));
  };
  return (
    <tr>
      <th>{youth.assigned_number}</th>
      <td>{youth.name}</td>
      <td>{youth.staff}</td>
      <td>{youth.purpose}</td>
      {status === "PROCESSING" && (
        <td>
          <button className="btn" onClick={() => processedYouth(youth)}>
            <TaskAltOutlinedIcon />
          </button>
        </td>
      )}
      <td>
        <button onClick={() => openEditModal(youth)}>
          <EditNoteOutlinedIcon />
        </button>
        {modalOpen && selectedYouth && (
          <dialog id="edit_modal" className="modal" open>
            <div className="modal-box">
              <EditYouth
                youthInfo={selectedYouth}
                youthInfoHandler={youthInfoHandler}
              />
              <div className="modal-action">
                <button className="btn btn-outline w-full" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="btn btn-ghost absolute right-2 top-2"
                  onClick={closeEditModal}
                >
                  ✕
                </button>
              </div>
            </div>
          </dialog>
        )}
      </td>
    </tr>
  );
}
