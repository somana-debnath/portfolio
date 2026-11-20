export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4 sm:mb-10">
      <h2 id={id} className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {children}
      </h2>
      <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
    </div>
  );
}
