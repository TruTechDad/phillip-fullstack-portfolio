import Reveal from "../Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal distance={35}>
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          {eyebrow}
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-[#FAFAFA] md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#C8C8C8]">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
