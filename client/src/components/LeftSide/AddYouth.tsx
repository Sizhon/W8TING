import classes from "../../styles/AddYouth.module.css";
import axios from "axios";

export default function AddYouth() {
  const addNewYouth = async () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const purposeInput = document.getElementById(
      "purpose"
    ) as HTMLSelectElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById(
      "phone_number"
    ) as HTMLInputElement;

    const name = nameInput.value;
    const purpose = purposeInput.value;
    const email = emailInput.value;
    const phone_number = phoneInput.value;

    // Add new youth to queue
    await axios.post("http://localhost:8000/api/v1/queues/onboarding", {
      name,
      purpose,
      email,
      phone_number,
    });

    // Reset form fields
    nameInput.value = "";
    purposeInput.value = "Placement";
    emailInput.value = "";
    phoneInput.value = "";

    // Close modal
    (document.getElementById("my_modal_3") as HTMLDialogElement).close();
  };

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
        <button onClick={addNewYouth} className="btn btn-outline w-full">
          Add to Queue
        </button>
      </div>
    </div>
  );
}
