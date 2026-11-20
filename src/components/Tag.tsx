export function TagList({ tags, label }: { tags: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="rounded-full bg-tint px-3 py-1 text-xs font-medium text-rose-ink">
          {t}
        </li>
      ))}
    </ul>
  );
}
