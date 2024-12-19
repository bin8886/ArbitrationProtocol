import { FC, ReactNode } from "react";

export const PageTitle: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>
  )
}