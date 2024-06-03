const titles: { [key: string]: string } = {
  "/": "維護表單資訊",
  "/station-lists": "站點表列表",
};

export const getTitle = (pathname: string): string => {
  if (pathname.startsWith("/station-lists/station-details")) {
    return "細項表單";
  }
  for (const key in titles) {
    if (pathname.startsWith(key)) {
      return titles[key];
    }
  }
  return "維護表單資訊";
};
