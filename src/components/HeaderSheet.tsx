import "@/f2eStyle/headerSheetStyle.css";
import { HeaderSheetProps } from "@/types/headerTypes";
import { sheetBars } from "@/utils/sheetBars";
import { useNavigate } from "react-router-dom";

export default function HeaderSheet({ isOpen, onClose }: HeaderSheetProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={`sheetbar ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      {sheetBars.map((bar, index) => (
        <button
          key={index}
          className="bar-content"
          onClick={() => handleNavigation(bar.path)}
        >
          {bar.value}
        </button>
      ))}
    </div>
  );
}
