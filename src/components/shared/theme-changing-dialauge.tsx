"use client";

import { ChildrenProps } from "@/types/global-types";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { themesArr } from "@/constants/global-constants";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
export default function ThemeChangingDialouge({ children }: ChildrenProps) {
  const { theme: selectedTheme, setTheme, systemTheme } = useTheme();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Themes (selected: {selectedTheme}, {systemTheme})
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-2">
          {themesArr.map((theme) => (
            <div
              onClick={() => setTheme(theme.title.toLocaleLowerCase())}
              className={cn(
                "w-full flex items-center transition-all justify-center py-10 rounded-md",
                theme.tailwind,
                theme.title.toLocaleLowerCase() === selectedTheme && "scale-75"
              )}
              key={theme.title}
            >
              {theme.title}
              {theme.title.toLocaleLowerCase() === systemTheme && "(system)"}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
