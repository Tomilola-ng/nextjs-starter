import React from "react";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <Link
      href={"/"}
      className={cn(
        className, "relative size-10"
      )}
    >
      <Image
        src={"/logo.svg"}
        alt="Logo"
        fill
        priority
        className="object-cover"
      />
    </Link>
  );
}
