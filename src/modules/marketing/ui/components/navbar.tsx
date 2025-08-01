"use client";

import ThemeChangingDialouge from "@/components/shared/theme-changing-dialauge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import { SelectIcon } from "@radix-ui/react-select";
import { Languages } from "lucide-react";
import React, { useTransition } from "react";

export default function Navbar() {
  const [_isPending, startTransition] = useTransition();
  const onChange = (v: Locale) => {
    startTransition(async () => {
      setUserLocale(v);
    });
  };
  return (
    <div className="h-20 border border-b w-full flex items-center justify-between px-6">
      <h1>Logo</h1>
      <ThemeChangingDialouge>
        <Button>Themes</Button>
      </ThemeChangingDialouge>
      <Select onValueChange={(v) => onChange(v as Locale)}>
        <SelectTrigger>
          <SelectIcon>
            <Languages />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bn">Bangla</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ar">Arabic</SelectItem>
          <SelectItem value="ur">Urdu</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
