import { useLists } from "@/context/listContext";
import { useParams } from "react-router-dom";

export function StationDetailTop() {
  const { lists } = useLists();
  const { id } = useParams<{ id: string }>();

  const list = lists.find((list) => list.id === id);

  if (!list) {
    return <div>表單不存在</div>;
  }

  return (
    <>
      <div className="my-3 px-10 grid grid-cols-6 grid-rows-3 text-sm">
        <div className="col-span-2">
          <span className="text-slate-500 px-3">車輛編號</span>
          <span>{list.id}</span>
        </div>
        <div className="col-span-4">
          <span className="text-slate-500 px-3">車輛位置</span>
          <span>市政南路六段七百八十五號九樓七弄十一巷</span>
        </div>
        <div className="col-span-2">
          <span className="text-slate-500 px-3">車輛群組</span>
          <span>{list.situation}</span>
        </div>
        <div className="col-span-3">
          <span className="text-slate-500 px-3">車柱編號</span>
          <span>{list.barNumber}</span>
        </div>
        <div></div>
        <div className="col-span-2">
          <span className="text-slate-500 px-3">電池電量</span>
          <span>{list.power}%</span>
        </div>
        <div className="col-span-3">
          <span className="text-slate-500 px-3">車輛種類</span>
          <span>{list.bikeType}</span>
        </div>
      </div>
      <hr />
      <div className="my-3 px-10 grid grid-rows-2 text-sm">
        <div>
          <span className="text-slate-500 px-3">表單主旨</span>
          <span>車輛需要保養1234567895555</span>
        </div>
        <div>
          <span className="text-slate-500 px-3">維護描述</span>
          <span>車輛騎了1234567895555公里夠久了要去打臘</span>
        </div>
      </div>
    </>
  );
}
