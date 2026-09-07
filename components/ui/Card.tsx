import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-[#2B2B2B]
        bg-[#111111]
        p-8
        shadow-lg
        shadow-black/40
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D4AF37]
        hover:shadow-[#D4AF37]/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}
