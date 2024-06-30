"use client";

import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Contador"
        title={count}
        subtitle="Carrito Compras"
        icon={<IoCafeOutline size={70} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
