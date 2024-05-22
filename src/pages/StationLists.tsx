import { StationList } from "@/components/1_2_StationList";
import { Header } from "@/components/Header";
import { CheckList, columnsList } from "@/components/columnsList";
import { useEffect, useState } from "react";

async function getList(): Promise<CheckList[]> {
  return [
    {
      id: "00000001",
      form: "一級維護單",
      bikeNumber: 600326,
      situation: "啟用",
      power: 60,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000002",
      form: "自動派工單",
      bikeNumber: 1290042,
      situation: "啟用",
      power: 32,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000003",
      form: "不定期專案",
      bikeNumber: 1603333,
      situation: "停用",
      power: 84,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000004",
      form: "電池維護單",
      bikeNumber: 7927321,
      situation: "停用",
      power: 55,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000005",
      form: "二級維護單",
      bikeNumber: 1677726,
      situation: "啟用",
      power: 95,
      bikeType: "1.0",
      barNumber: null,
    },
    {
      id: "00000006",
      form: "一級維護單",
      bikeNumber: 897644,
      situation: "啟用",
      power: 67,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000007",
      form: "自動派工單",
      bikeNumber: 3302231,
      situation: "啟用",
      power: 45,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000008",
      form: "不定期專案",
      bikeNumber: 4423321,
      situation: "停用",
      power: 22,
      bikeType: "1.0",
      barNumber: null,
    },
    {
      id: "00000009",
      form: "電池維護單",
      bikeNumber: 1212343,
      situation: "停用",
      power: 33,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000010",
      form: "二級維護單",
      bikeNumber: 9232342,
      situation: "啟用",
      power: 89,
      bikeType: "1.0",
      barNumber: null,
    },
    {
      id: "00000011",
      form: "一級維護單",
      bikeNumber: 4432234,
      situation: "啟用",
      power: 78,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000012",
      form: "自動派工單",
      bikeNumber: 5533221,
      situation: "啟用",
      power: 90,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000013",
      form: "不定期專案",
      bikeNumber: 6644321,
      situation: "停用",
      power: 45,
      bikeType: "1.0",
      barNumber: null,
    },
    {
      id: "00000014",
      form: "電池維護單",
      bikeNumber: 1123445,
      situation: "停用",
      power: 76,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000015",
      form: "二級維護單",
      bikeNumber: 9876653,
      situation: "啟用",
      power: 82,
      bikeType: "1.0",
      barNumber: null,
    },
    {
      id: "00000016",
      form: "一級維護單",
      bikeNumber: 3322114,
      situation: "啟用",
      power: 59,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000017",
      form: "自動派工單",
      bikeNumber: 4433223,
      situation: "啟用",
      power: 71,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000018",
      form: "不定期專案",
      bikeNumber: 6655443,
      situation: "停用",
      power: 41,
      bikeType: "1.0",
      barNumber: null,
    },
    {
      id: "00000019",
      form: "電池維護單",
      bikeNumber: 3322114,
      situation: "停用",
      power: 54,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000020",
      form: "二級維護單",
      bikeNumber: 2233445,
      situation: "啟用",
      power: 86,
      bikeType: "1.0",
      barNumber: null,
    },
    {
      id: "00000021",
      form: "一級維護單",
      bikeNumber: 7788993,
      situation: "啟用",
      power: 63,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000022",
      form: "自動派工單",
      bikeNumber: 1122334,
      situation: "啟用",
      power: 85,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000023",
      form: "不定期專案",
      bikeNumber: 4455662,
      situation: "停用",
      power: 47,
      bikeType: "1.0",
      barNumber: null,
    },
    {
      id: "00000024",
      form: "電池維護單",
      bikeNumber: 5566778,
      situation: "停用",
      power: 72,
      bikeType: "2.0",
      barNumber: null,
    },
    {
      id: "00000025",
      form: "二級維護單",
      bikeNumber: 6677885,
      situation: "啟用",
      power: 91,
      bikeType: "1.0",
      barNumber: null,
    },
  ];
}

export default function StationLists() {
  const [list, setList] = useState<CheckList[]>([]);

  useEffect(() => {
    async function fetchlist() {
      const result = await getList();
      setList(result);
    }

    fetchlist();
  }, []);

  return (
    <>
      <Header />
      <StationList columns={columnsList} data={list} />
    </>
  );
}
