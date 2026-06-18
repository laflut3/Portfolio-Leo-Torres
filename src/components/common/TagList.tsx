type TagListProps = {
  items: string[]
}

export function TagList({ items }: TagListProps) {
  return (
    <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-[color-mix(in_oklch,var(--portfolio-cyan)_18%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-cyan)_6%,transparent)] px-2.5 py-1.5 text-xs text-[color-mix(in_oklch,var(--portfolio-cyan)_55%,var(--foreground))]"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
