import { ChildrenProps } from "@/types/global-types";
import React from "react";
import Navbar from "../components/navbar";

export default function MarketingLayout({ children }: ChildrenProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
