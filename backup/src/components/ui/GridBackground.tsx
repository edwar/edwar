import { ReactNode } from "react";

interface Props {
    children: ReactNode
}
export function GridBackground({ children }: Props) {
  return (
    <div className="min-h-screen bg-transparent bg-dot-white/[0.15]">
      <div className="max-w-7xl mx-auto p-5">
        {children}
      </div>
    </div>
  );
}