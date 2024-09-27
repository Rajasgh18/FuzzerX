import { cn } from '@/lib/utils'
import React from 'react'

export const Card = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return (
    <div className={cn('bg-[#51557354] border border-[#FFFFFF66] rounded-xl p-2 px-4', className)}>
      {children}
    </div>
  );
};