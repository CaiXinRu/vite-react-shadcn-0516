import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import {
  FileTextIcon,
  LightningBoltIcon,
  MagnifyingGlassIcon,
  PaddingIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { HeaderSheet } from "./HeaderSheet";

export function Header() {
  return (
    <Menubar>
      <MenubarMenu>
        <div className="flex px-4 items-center w-full justify-between">
          <div className="flex items-center">
            <HeaderSheet />
            <span className="ml-4 text-base">維護表單資訊</span>
          </div>
          <div className="flex space-x-4">
            <PaddingIcon />
            <MagnifyingGlassIcon />
            <LightningBoltIcon />
            <FileTextIcon />
            <ReloadIcon />
          </div>
        </div>
      </MenubarMenu>
    </Menubar>
  );
}
