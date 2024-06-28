import { Metadata } from "next";
import { SimpleWidget } from "@/app/components";

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
      <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
}
