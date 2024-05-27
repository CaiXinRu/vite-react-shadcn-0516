export interface DetailItem {
  item: string;
  situation: "調整" | "正常";
}

export interface Detail {
  title:
    | "車燈系統"
    | "傳動系統"
    | "煞車系統"
    | "轉動系統"
    | "停車鎖"
    | "車架"
    | "電控系統";
  items: DetailItem[];
}

export interface DetailsContextType {
  details: Detail[];
  fetchDetails: () => void;
}
