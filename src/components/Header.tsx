import { Button } from "@/components/ui/button";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { ThemeSwitch } from "./ThemeSwitch";

function Header() {
  const showDrawer = () => {
    window.dispatchEvent(new CustomEvent("show-drawer")); //emit an custom event to toggle drawer
  };
  return (
    <div className="flex justify-between">
      <Button variant={"ghost"} onClick={showDrawer} className="sm:hidden">
        <TextAlignJustifyIcon height={32} width={32} />
      </Button>
      <div className="ml-auto">
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Header;
