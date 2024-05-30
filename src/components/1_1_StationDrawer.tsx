import { Button } from "@/components/ui/button";
import { Situation } from "@/ts-common/types/mainStationTypes";
import { Link } from "react-router-dom";

const labels: string[] = ["手動", "自動", "一級", "二級", "故障", "專案"];

function renderGridLabel(label: string, index: number) {
  return (
    <div
      className="flex justify-center items-center bg-slate-100 my-3"
      key={index}
    >
      {label}
    </div>
  );
}

function renderGridValue(value: number | null) {
  return (
    <div
      className={`flex justify-center items-center my-3 mx-auto w-1/2 rounded-md ${
        value ? "bg-slate-300" : ""
      }`}
    >
      {value}
    </div>
  );
}

export function StationDrawer({ stationName }: { stationName: Situation }) {
  return (
    <>
      <div className="h-1/5 bg-white p-5" style={{ zIndex: "1000" }}>
        <div className="flex items-center justify-between">
          <div className="text-lg">{stationName?.station}</div>
          <Link to={`/station-lists/${stationName.id}`}>
            <Button>檢視站點</Button>
          </Link>
        </div>
        <div className="grid grid-cols-6 grid-rows-2 mb-3">
          {labels.map((label, index) => renderGridLabel(label, index))}
          {renderGridValue(stationName?.manual)}
          {renderGridValue(stationName?.auto)}
          {renderGridValue(stationName?.classOne)}
          {renderGridValue(stationName?.classTwo)}
          {renderGridValue(stationName?.fault)}
          {renderGridValue(stationName?.case)}
        </div>
      </div>
    </>
  );
}
