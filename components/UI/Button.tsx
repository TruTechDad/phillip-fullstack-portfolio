type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "gold" | "silver";
};

export default function Button({
  children,
  href,
  variant = "gold",
}: ButtonProps) {
  const styles = {
    gold: "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",

    silver:
      "border border-[#C8C8C8] text-[#C8C8C8] hover:bg-[#C8C8C8] hover:text-black",
  };

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition duration-300 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
