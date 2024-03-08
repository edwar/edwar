import { ReactNode } from "react";

interface Props {
    children: ReactNode
}
export function GridBackground({ children }: Props) {
  return (
    <div className="min-h-screen bg-transparent bg-grid-small-white/[0.08]">
      <div className="max-w-7xl mx-auto p-5">
        {children}
      </div>
    </div>
  );
}