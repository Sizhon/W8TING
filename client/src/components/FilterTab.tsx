export default function FilterTab() {
  return (
    <div role="tablist" className="tabs tabs-lifted bg-base-100">
      <a
        role="tab"
        className="tab tab-active [--tab-bg:#242C36] [--tab-color:white]"
      >
        Onboarding
      </a>
      <a role="tab" className="tab">
        Signing I-9
      </a>
    </div>
  );
}
