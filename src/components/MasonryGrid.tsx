import type { Route } from "next";
import MasonryCard, { type CardSize } from "./MasonryCard";

interface MasonryEntity {
  id: string;
  name: string;
  description: string;
  slug: string;
  image?: string;
}

interface MasonryGridProps {
  items: MasonryEntity[];
  basePath: string;
  badge?: string;
  /** Se numeran las tarjetas empezando en este offset (para "ver primeras 4" en home). */
  startIndex?: number;
}

// Ritmo de tamaños mixto y no uniforme — parte de la diferenciación exigida
// por AGENTS.md §1/§2: nunca el mismo recuadro repetido en toda la grid.
const SIZE_PATTERN: CardSize[] = ["lg", "sm", "md", "sm", "lg", "md", "sm", "lg", "sm", "md"];

export default function MasonryGrid({ items, basePath, badge, startIndex = 0 }: MasonryGridProps) {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
      {items.map((item, i) => (
        <MasonryCard
          key={item.id}
          title={item.name}
          description={item.description}
          href={`${basePath}/${item.slug}` as Route}
          image={item.image}
          badge={badge}
          index={startIndex + i + 1}
          size={SIZE_PATTERN[(startIndex + i) % SIZE_PATTERN.length]}
        />
      ))}
    </div>
  );
}
