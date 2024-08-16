import classes from "../../styles/StatusBar.module.css";

interface StatusBarProps {
  status: string;
  setStatus: (status: string) => void;
}

export default function StatusBar({ status, setStatus }: StatusBarProps) {
  return (
    <div className={classes.statuses}>
      {/* <button className="btn" onClick={() => setStatus("NO RESPONSE")}>
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
      </button> */}
      <div role="tablist" className="tabs tabs-boxed bg-base-100">
        <a
          role="tab"
          className={status === "NO RESPONSE" ? "tab tab-active" : "tab"}
          onClick={() => setStatus("NO RESPONSE")}
        >
          No Response
        </a>
        <a
          role="tab"
          className={status === "PROCESSING" ? "tab tab-active" : "tab"}
          onClick={() => setStatus("PROCESSING")}
        >
          Processing
        </a>
        <a
          role="tab"
          className={status === "PROCESSED" ? "tab tab-active" : "tab"}
          onClick={() => setStatus("PROCESSED")}
        >
          Processed
        </a>
        <a
          role="tab"
          className={status === "ALL" ? "tab tab-active" : "tab"}
          onClick={() => setStatus("ALL")}
        >
          All
        </a>
      </div>
    </div>
  );
}
