import { Metadata } from "next";
import { WidgetsGrid } from "@/app/components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Información general",
};
export default function MainPage() {
  return (
    <div className="text-black p-2">
      <div>
        <h1 className="text-5xl">Dashboard</h1>
        <p className="text-2xl">Información General</p>
      </div>
      <WidgetsGrid />
    </div>
  );
}
