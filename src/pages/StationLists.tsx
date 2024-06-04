import { StationList } from "@/components/1_2_StationList";
import { columnsList } from "@/components/column/columnsList";
import { useLists } from "@/context/listContext";

export default function StationLists() {
  const { lists } = useLists();
  return (
    <>
      <StationList columns={columnsList} data={lists} />
    </>
  );
}
