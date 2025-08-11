import { type ReactNode } from "react";

interface Props {
    children: string | ReactNode;
    className?: string;
    isInteractive?: boolean
}
export default function Title({ children, className, isInteractive }: Readonly<Props>) {
  return (
    <div className={className}>
        <div className={`inline-block ${isInteractive && 'group'}`}>
            <h2 className={`text-3xl font-bold inline-flex gap-2 ${isInteractive && 'hover:text-slate-200 group-hover:scale-110 group-hover:translate-x-3 transition-all'}`}>
                {children}
            </h2>
            <div className={`w-auto h-2 bg-slate-400 rounded-full mb-[2px] ${isInteractive && 'group-hover:scale-110 group-hover:translate-x-2 transition-all'}`} />
            <div className={`w-auto h-2 bg-slate-900 rounded-full translate-x-2 ${isInteractive && 'group-hover:scale-110 group-hover:translate-x-2 transition-all'}`} />
        </div>
    </div>
  )
}
