import { sheetBars } from "./sheetBars";

export const getTitle = (pathname: string): string | undefined => {
  const sheetBar = sheetBars.find((sheetBar) => sheetBar.path === pathname);
  if (sheetBar) {
    return sheetBar.value;
  } else if (pathname.startsWith("/station-lists/station-details")) {
    return "細項表單";
  } else if (pathname.startsWith("/station-lists")) {
    return "站點表列表";
  }
  return undefined;
};
