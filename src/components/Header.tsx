import { Menubar, MenubarMenu } from "@/components/ui/menubar";

import {
  ArrowLeftIcon,
  FileTextIcon,
  LightningBoltIcon,
  MagnifyingGlassIcon,
  PaddingIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderSheet } from "./HeaderSheet";

const titles: { [key: string]: string } = {
  "/": "維護表單資訊",
  "/station-lists": "站點表列表",
  "/class-one": "一級保養單",
};

export function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  let title = titles[pathname];

  if (!title && pathname.startsWith("/station-lists/")) {
    title = "站點表列表";
  }

  return (
    <Menubar>
      <MenubarMenu>
        <div className="flex px-4 items-center w-full justify-between">
          <div className="flex items-center">
            {pathname === "/" ? (
              <HeaderSheet />
            ) : (
              <button>
                <ArrowLeftIcon onClick={() => navigate(-1)} />
              </button>
            )}
            <span className="ml-4 text-base">{title}</span>
          </div>
          <div className="flex space-x-4">
            {pathname === "/" && (
              <>
                <PaddingIcon />
                <MagnifyingGlassIcon />
                <LightningBoltIcon />
                <FileTextIcon />
              </>
            )}
            <ReloadIcon />
          </div>
        </div>
      </MenubarMenu>
    </Menubar>
  );
}
