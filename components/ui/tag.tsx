type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-[4px] border border-[var(--color-primary-strong)] bg-[var(--color-primary-strong)]/10 px-2 py-1 text-[10px] font-medium uppercase leading-none tracking-[0.14em] text-[var(--color-primary)]">
      {children}
    </span>
  );
}
