type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-[#2B2B2B]
        bg-[#111111]
        px-4
        py-2
        text-sm
        font-medium
        text-[#C8C8C8]
        transition-all
        duration-300
        hover:border-[#D4AF37]
        hover:text-[#D4AF37]
        hover:shadow-md
        hover:shadow-[#D4AF37]/20
      "
    >
      {children}
    </span>
  );
}
