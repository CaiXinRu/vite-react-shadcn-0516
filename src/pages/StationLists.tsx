import { StationList } from "@/components/1_2_StationList";
import { Header } from "@/components/Header";
import { columnsList } from "@/components/column/columnsList";
import { useLists } from "@/context/listContext";

export default function StationLists() {
  const { lists } = useLists();
  return (
    <>
      <Header />
      <StationList columns={columnsList} data={lists} />
    </>
  );
}
