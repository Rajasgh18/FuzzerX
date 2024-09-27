import { cn } from "@/lib/utils";
import React from "react";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("bg-[#51557354] border border-[#FFFFFF66] rounded-xl p-2 px-4", className)}>{children}</div>;
};

export const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mb-2", className)}>{children}</div>;
};

export const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>;
};

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("", className)}>{children}</div>;
};
