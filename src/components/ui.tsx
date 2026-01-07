"use client";
import React from "react";

export const GradientButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-110 transition-transform px-6 py-3 rounded-full text-white font-bold shadow-lg flex items-center justify-center gap-2"
  >
    {children}
  </a>
);

export const Card = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="bg-gray-900/70 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all hover:shadow-pink-500/50">
    {children}
  </div>
);
