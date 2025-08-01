import { useTranslations } from "next-intl";

const sideBar = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    title: "Admin",
    link: "/admin",
  },
] as const;
export default function HomeAboveBox() {
  const t = useTranslations("sideBar");
  return (
    <div>
      {sideBar.map((item) => (
        <div key={item.title} className="p-4 space-y-2 border">
          <h1>{item.link}</h1>
          <h1>{t(item.title)}</h1>
        </div>
      ))}
    </div>
  );
}
