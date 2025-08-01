import ThemeChangingDialouge from "@/components/shared/theme-changing-dialauge";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Navbar() {
  return (
    <div className="h-20 border border-b w-full flex items-center justify-between px-6">
      <h1>Logo</h1>
      <ThemeChangingDialouge>
        <Button>Themes</Button>
      </ThemeChangingDialouge>
    </div>
  );
}
