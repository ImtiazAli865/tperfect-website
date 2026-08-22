"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, type MouseEvent } from "react";

type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  size?: LogoSize;
  href?: string;
  className?: string;
  priority?: boolean;
};

const SIZE_MAP: Record<LogoSize, { icon: number; text: string; gap: string }> = {
  sm: { icon: 34, text: "text-lg", gap: "gap-2" },
  md: { icon: 44, text: "text-xl sm:text-2xl", gap: "gap-2.5" },
  lg: { icon: 58, text: "text-3xl sm:text-4xl", gap: "gap-3" },
};

const MAX_TILT_DEG = 7;

export function Logo({ size = "md", href = "/", className = "", priority = false }: LogoProps) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const { icon, text, gap } = SIZE_MAP[size];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = px * MAX_TILT_DEG * 2;
    const rotateX = -py * MAX_TILT_DEG * 2;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Link href={href} className={`group inline-flex shrink-0 items-center ${className}`}>
      <div className="logo-fade-in">
        <div
          ref={tiltRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className={`flex items-center ${gap} will-change-transform [transition:transform_180ms_ease-out]`}
        >
          <span className="logo-badge-perspective shrink-0" style={{ width: icon, height: icon }}>
            <span className="logo-badge-tilt relative block h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/logo/logo-badge.png"
                alt="T.Perfect logo"
                fill
                sizes={`${icon}px`}
                priority={priority}
                className="object-cover"
              />
              <span aria-hidden="true" className="logo-badge-gloss" />
              <span aria-hidden="true" className="logo-badge-shine" />
            </span>
          </span>

          <span className={`flex flex-col leading-none ${text}`}>
            <span className="relative inline-block">
              <span className="logo-text logo-text-blue">T.</span><span className="logo-text logo-text-green">PERFECT</span><span aria-hidden="true" className="logo-text logo-text-shine absolute inset-0">T.PERFECT</span>
            </span>
            <span
              className="logo-underline mt-1 h-[1.5px] w-full rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #3f86c9 30%, #7cb332 70%, transparent)" }}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
