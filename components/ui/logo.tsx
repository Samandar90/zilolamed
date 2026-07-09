import Image from "next/image";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={asset("/img/brand/logo.png")}
      alt="Zilola Medical — лечебно-диагностический центр"
      width={1242}
      height={234}
      priority
      className={cn("h-9 w-auto object-contain", className)}
    />
  );
}
