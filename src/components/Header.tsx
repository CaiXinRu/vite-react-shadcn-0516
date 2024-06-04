import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { navigateToPreviousPage } from "@/utils/navigation";
import { sheetBars } from "@/utils/sheetBars";
import { getTitle } from "@/utils/titles";
import {
  ArrowLeftIcon,
  FileTextIcon,
  LightningBoltIcon,
  MagnifyingGlassIcon,
  PaddingIcon,
  ReloadIcon,
  TextAlignJustifyIcon,
} from "@radix-ui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const title = getTitle(pathname);
  const isSheetBarPath = sheetBars.some(
    (sheetBar) => sheetBar.path === pathname
  );

  return (
    <Menubar>
      <MenubarMenu>
        <div className="flex px-4 items-center w-full justify-between">
          <div className="flex items-center">
            {isSheetBarPath ? (
              <button onClick={onMenuClick}>
                <TextAlignJustifyIcon />
              </button>
            ) : (
              <button
                onClick={() => navigateToPreviousPage(pathname, navigate)}
              >
                <ArrowLeftIcon />
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
