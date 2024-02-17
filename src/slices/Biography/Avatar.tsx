"use client";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { components } from "..";
import { useRef } from "react";
import clsx from "clsx";

type AvatarProps = {
  image: ImageField;
  className?: string;
};

export default function Avatar({ image, className }: AvatarProps) {
  const component = useRef(null);
  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0f">
        <PrismicNextImage
          field={image}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </div>
  );
}
