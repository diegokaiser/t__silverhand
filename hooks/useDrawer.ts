import { useContext } from "react";
import { DrawerContextRef } from "@/providers/DrawerProvider";

export const useDrawer = () => {
  const ctx = useContext(DrawerContextRef);
  if (!ctx) throw new Error('useDrawer must be used within DrawerProvider');
  return ctx
}
