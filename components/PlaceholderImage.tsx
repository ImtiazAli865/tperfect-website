import { ImageOff } from "lucide-react";

export function PlaceholderImage({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-neutral-200 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-600 ${className}`}
    >
      <ImageOff className="h-6 w-6" strokeWidth={1.5} />
      {label && <span className="px-2 text-center text-xs font-medium tracking-wide uppercase">{label}</span>}
    </div>
  );
}
