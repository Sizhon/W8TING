import { useState } from "react";
import classes from "../../styles/AddYouth.module.css";
import { Youth } from "../../Types";
import axios from "axios";

interface EditYouthProps {
  youth: Youth;
}

export default function EditYouth({ youth }: EditYouthProps) {
  const [youthInfo, setYouthInfo] = useState<Youth>(youth);

  async function onUpdateYouth() {
    const res = await axios.patch(
      `http://localhost:8000/api/v1/queues/onboarding/${youth.id}`,
      {
        ...youthInfo,
      }
    );
    console.log(res.data);
  }

  const youthInfoHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setYouthInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(youthInfo);

  return (
    <div className="edit-youth">
      <h3 className="text-2xl font-bold mb-4 tracking-wide">
        Editing Youth {youth.assigned_number}
      </h3>
      <div className={classes["form-control"]}>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            id="name"
            name="name" // Make sure to add the name attribute
            type="text"
            value={youthInfo.name}
            onChange={youthInfoHandler}
            className="input input-bordered"
          />
          <label className={`label ${classes.purpose}`}>
            <span className="label-text">Purpose for coming in</span>
          </label>
          <select
            id="purpose"
            name="purpose" // Make sure to add the name attribute
            className="select select-bordered"
            value={youthInfo.purpose}
            onChange={youthInfoHandler} // Attach the handler to the select as well
          >
            <option value="Placement">Placement</option>
            <option value="Signing I-9">Signing I-9</option>
          </select>
          <label className="label">
            <span className="label-text">Staff</span>
          </label>
          <input
            id="staff"
            name="staff"
            type="text"
            value={youthInfo.staff || ""}
            onChange={youthInfoHandler}
            className="input input-bordered"
          />
        </form>
        <div>
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={youthInfo.email || ""}
            onChange={youthInfoHandler}
            className="input input-bordered"
          />
          <label className={`label ${classes.phone}`}>
            <span className="label-text">Phone Number</span>
          </label>
          <input
            id="phone_number"
            name="phone_number"
            type="text"
            value={youthInfo.phone_number || ""}
            onChange={youthInfoHandler}
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <select
            id="status"
            name="status"
            className="select select-bordered"
            value={youthInfo.status}
            onChange={youthInfoHandler}
          >
            <option value="WAITING">WAITING</option>
            <option value="NO RESPONSE">NO RESPONSE</option>
            <option value="PROCESSING">PROCESSING</option>
            <option value="PROCESSED">PROCESSED</option>
          </select>
        </div>
      </div>
      <div className={`flex justify-center ${classes["add-button"]}`}>
        <button className="btn btn-outline w-full" onClick={onUpdateYouth}>
          Save
        </button>
      </div>
    </div>
  );
}
