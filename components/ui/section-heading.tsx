type SectionHeadingProps = {
  id?: string;
  title: string;
  action?: React.ReactNode;
};

export function SectionHeading({ id, title, action }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2
        className="border-l-2 border-[var(--color-primary)] pl-4 font-serif text-3xl font-medium leading-tight text-[var(--color-text)] md:text-4xl"
        id={id}
      >
        {title}
      </h2>
      {action}
    </div>
  );
}
