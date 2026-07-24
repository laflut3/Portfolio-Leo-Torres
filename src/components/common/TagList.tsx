type TagListProps = {
  items: string[]
}

export function TagList({ items }: TagListProps) {
  return (
    <ul className="mt-4 flex list-none flex-wrap gap-x-3 gap-y-1 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center text-sm text-[var(--portfolio-text-soft)] after:ml-3 after:text-[var(--portfolio-accent)] after:content-['/'] last:after:hidden"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
