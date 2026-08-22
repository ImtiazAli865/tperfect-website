"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export function ShareButton({
  title,
  className = "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-muted",
  iconClassName = "h-4 w-4",
}: {
  title: string;
  className?: string;
  iconClassName?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled the native share sheet — nothing to do
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <button
      type="button"
      aria-label={copied ? "Link copied" : "Share"}
      onClick={handleShare}
      className={className}
    >
      {copied ? <Check className={iconClassName} /> : <Share2 className={iconClassName} />}
    </button>
  );
}
