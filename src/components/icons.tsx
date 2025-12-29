"use client";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        Y
      </text>
    </svg>
  );
}
