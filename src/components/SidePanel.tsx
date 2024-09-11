import { NavLink } from "react-router-dom";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const panelList = [
  {
    label: "Contacts",
    link: "/",
  },
  {
    label: "Charts and Maps",
    link: "/charts",
  },
  {
    label: "404 page",
    link: "/ddd",
  },
  {
    label: "Error Page",
    link: "/error-page",
  },
];

function PanelContent({ closeDrawer = () => {} }: { closeDrawer?: () => void }) {
  return (
    <nav>
      <ul className="grid gap-4 text-lg text-muted-foreground">
        {panelList.map((panel) => (
          <li onClick={closeDrawer} key={panel.link}>
            <NavLink
              to={panel.link}
              className={({ isActive, isPending }) =>
                isPending ? "text-muted-foreground" : isActive ? "font-bold" : ""
              }
            >
              {panel.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SidePanel() {
  const [showDrawer, setShowDrawer] = useState(false);
  const openDrawer = () => {
    setShowDrawer(true);
  };
  const closeDrawer = () => {
    setShowDrawer(false);
  };
  useEffect(() => {
    window.addEventListener("show-drawer", openDrawer);
    return () => {
      window.removeEventListener("show-drawer", openDrawer);
    };
  });
  return (
    <>
      <div className="p-10 w-[20vw] hidden sm:block">
        <h2 className="mb-5 text-2xl font-bold tracking-tight">Dashboard</h2>
        <PanelContent />
      </div>
      <Sheet open={showDrawer} onOpenChange={(open) => !open && closeDrawer()}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent side={"left"} className="z-[1000]">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Dashboard</h2>
          <PanelContent closeDrawer={closeDrawer} />
        </SheetContent>
      </Sheet>
    </>
  );
}

export default SidePanel;
