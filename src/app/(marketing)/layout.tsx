import MarketingLayout from "@/modules/marketing/ui/layout";
import { ChildrenProps } from "@/types/global-types";

export default function Layout({ children }: ChildrenProps) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
