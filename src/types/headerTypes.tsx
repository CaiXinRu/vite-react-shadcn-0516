export interface SheetBar {
  path: string;
  value: string;
}

export interface HeaderSheetProps {
  isOpen: boolean;
  onClose: () => void;
}
