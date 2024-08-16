import classes from "../../styles/StatusBar.module.css";

interface StatusBarProps {
  setStatus: (status: string) => void;
}

export default function StatusBar({ setStatus }: StatusBarProps) {
  return (
    <div className={classes.statuses}>
      <button className="btn" onClick={() => setStatus("NO RESPONSE")}>
        No Response
        <div className="badge">+99</div>
      </button>
      <button className="btn" onClick={() => setStatus("PROCESSING")}>
        Processing
        <div className="badge badge-secondary">+99</div>
      </button>
      <button className="btn" onClick={() => setStatus("PROCESSED")}>
        Processed
        <div className="badge badge-secondary">+99</div>
      </button>
      <button className="btn" onClick={() => setStatus("ALL")}>
        All
        <div className="badge">+99</div>
      </button>
    </div>
  );
}
