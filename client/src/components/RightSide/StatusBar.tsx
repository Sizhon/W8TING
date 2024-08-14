import classes from "../../styles/StatusBar.module.css";

export default function StatusBar() {
  return (
    <div className={classes.statuses}>
      <button className="btn">
        No Response
        <div className="badge">+99</div>
      </button>
      <button className="btn">
        Processing
        <div className="badge badge-secondary">+99</div>
      </button>
      <button className="btn">
        Processed
        <div className="badge badge-secondary">+99</div>
      </button>
      <button className="btn">
        All
        <div className="badge">+99</div>
      </button>
    </div>
  );
}
