import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface City {
  value: string;
  label: string;
}

interface Area {
  value: string;
  label: string;
}

interface Case {
  value: string;
  label: string;
}

const cities: City[] = [
  { value: "taipei", label: "臺北" },
  { value: "taichung", label: "臺中" },
  { value: "tainan", label: "臺南" },
  { value: "taidung", label: "臺東" },
];

const taipei: Area[] = [
  { value: "TPO1", label: "TPO1" },
  { value: "TPO2", label: "TPO2" },
  { value: "TPO3", label: "TPO3" },
  { value: "TPO4", label: "TPO4" },
];

const taichung: Area[] = [
  { value: "TCO1", label: "TCO1" },
  { value: "TCO2", label: "TCO2" },
  { value: "TCO3", label: "TCO3" },
  { value: "TCO4", label: "TCO4" },
];

const tainan: Area[] = [
  { value: "TNO1", label: "TNO1" },
  { value: "TNO2", label: "TNO2" },
  { value: "TNO3", label: "TNO3" },
  { value: "TNO4", label: "TNO4" },
];

const taidung: Area[] = [
  { value: "TDO1", label: "TDO1" },
  { value: "TDO2", label: "TDO2" },
  { value: "TDO3", label: "TDO3" },
  { value: "TDO4", label: "TDO4" },
];

const cases: Case[] = [
  { value: "Case01", label: "Case01" },
  { value: "Case02", label: "Case02" },
  { value: "Case03", label: "Case03" },
  { value: "Case04", label: "Case04" },
];

const areaMap: Record<string, Area[]> = {
  taipei,
  taichung,
  tainan,
  taidung,
};

export function StationSelect() {
  const [city, setCity] = useState<string>("");
  const [areas, setAreas] = useState<Array<{ value: string; label: string }>>(
    []
  );
  const [selectedArea, setSelectedArea] = useState<string>("");

  useEffect(() => {
    if (city) {
      setAreas(areaMap[city]);
      setSelectedArea("");
    } else {
      setAreas([]);
      setSelectedArea("");
    }
  }, [city]);

  return (
    <div className="px-6 py-5 grid grid-rows-2 grid-cols-12 gap-y-4 text-sm">
      <div className="my-auto">
        <ImageIcon />
      </div>
      <div className="col-span-5 flex items-center">
        <p>城市：</p>
        <Select onValueChange={(value) => setCity(value)}>
          <SelectTrigger className="w-[70%]">
            <SelectValue placeholder="選擇區域" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city.value} value={city.value}>
                {city.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div></div>
      <div className="col-span-5 flex items-center">
        <p>區域：</p>
        <Select value={selectedArea} onValueChange={(value) => setSelectedArea(value)}>
          <SelectTrigger className="w-[70%]">
            <SelectValue
              placeholder={selectedArea ? selectedArea : "選擇區域"}
            />
          </SelectTrigger>
          <SelectContent>
            {areas?.map((area) => (
              <SelectItem key={area.value} value={area.value}>
                {area.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div></div>
      <div className="col-span-5 flex items-center">
        <p>專案：</p>
        <Select>
          <SelectTrigger className="w-[70%]">
            <SelectValue placeholder="選擇專案" />
          </SelectTrigger>
          <SelectContent>
            {cases?.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-5 flex items-center">搜尋站點：</div>
      <></>
    </div>
  );
}
