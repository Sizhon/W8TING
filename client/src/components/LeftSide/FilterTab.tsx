interface FilterTabProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function FilterTab({ currentTab, onTabChange }: FilterTabProps) {
  return (
    <div role="tablist" className={`tabs tabs-lifted bg-base-100`}>
      <a
        role="tab"
        className={
          currentTab === "Placement"
            ? "tab tab-active [--tab-bg:#242C36] [--tab-color:white]"
            : "tab"
        }
        onClick={() => onTabChange("Placement")}
      >
        Placement
      </a>
      <a
        role="tab"
        className={
          currentTab === "Signing I-9"
            ? "tab tab-active [--tab-bg:#242C36] [--tab-color:white]"
            : "tab"
        }
        onClick={() => onTabChange("Signing I-9")}
      >
        Signing I-9
      </a>
      <a
        role="tab"
        className={
          currentTab === "Queue"
            ? "tab tab-active [--tab-bg:#242C36] [--tab-color:white]"
            : "tab"
        }
        onClick={() => onTabChange("Queue")}
      >
        Queue
      </a>
    </div>
  );
}
