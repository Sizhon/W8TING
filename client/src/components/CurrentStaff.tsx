import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function CurrentStaff() {
  return (
    <div className="staff-container">
      <h2 className="text-2xl font-bold mb-4 tracking-wide">Staff: Simon</h2>
      <button className="thin-button edit-button">
        <EditOutlinedIcon />
      </button>
    </div>
  );
}
