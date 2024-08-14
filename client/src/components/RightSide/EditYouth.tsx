import classes from "../../styles/AddYouth.module.css";

export default function EditYouth() {
  return (
    <div className="add-youth">
      <h3 className="text-2xl font-bold mb-4 tracking-wide">
        Add a youth to queue
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
            type="text"
            placeholder="Full Name"
            className="input input-bordered"
          />
          <label className={`label ${classes.purpose}`}>
            <span className="label-text">Purpose for coming in</span>
          </label>
          <select id="purpose" className="select select-bordered">
            <option>Placement</option>
            <option>Signing I-9</option>
          </select>
        </form>
        <div>
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="input input-bordered"
          />
          <label className={`label ${classes.phone}`}>
            <span className="label-text">Phone Number</span>
          </label>
          <input
            id="phone_number"
            type="text"
            placeholder="Phone Number"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className={`flex justify-center ${classes["add-button"]}`}>
        <button className="btn btn-outline w-full">Add to Queue</button>
      </div>
    </div>
  );
}
