import classes from "../../styles/AddYouth.module.css";
import { Youth } from "../../Types";

interface EditYouthProps {
  youthInfo: Youth;
  youthInfoHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function EditYouth({
  youthInfo,
  youthInfoHandler,
}: EditYouthProps) {
  return (
    <div className="edit-youth">
      <h3 className="text-2xl font-bold mb-4 tracking-wide">
        Assigned number: {youthInfo.assigned_number}
      </h3>
      <div className={classes["form-control"]}>
        <form method="dialog">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            id="name"
            name="name"
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
            name="purpose"
            className="select select-bordered"
            value={youthInfo.purpose}
            onChange={youthInfoHandler}
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
    </div>
  );
}
