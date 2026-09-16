"use client";
import dynamic from "next/dynamic";

const StatusWidgets = dynamic(() => import("./StatusWidgets"), { ssr: false });

export default function LazyStatusWidgets() {
  return <StatusWidgets />;
}
